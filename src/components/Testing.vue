<template>
  <div class="container content_vebinar ">
<!--  {{ testVebinar }}-->
<!--    <br>-->
<!--    <br>-->
<!--    {{ infoTest  }}-->
<!--    <br>-->
<!--    <br>-->
<!-- <div>userTest: {{ userTest }}</div> -->
<!--    <br>-->
<!--    <br>-->
   <!-- <div>resultInfo: {{ resultInfo }}</div> -->
    <h1 class="title_test">
      Тестовий вебінар
    </h1>
    <div v-if="infoTest.user_statistics">
      <div v-if="infoTest.user_statistics.test_available && resultInfo === ''">
          <div class="list_question" v-for="(quest, idx) in testVebinar" :key="idx">
          <div class="lq_item">
            <p class="lq_number">Питання №{{idx + 1}}</p>
            <p class="lq_question">
              {{ quest.title }}
            </p>
            <!--         Checkbox           -->
            <div v-if="quest.multiple_answers" class="ansver_list">
              <div class="wrap_checkbox"  v-for="(answer, idx_2) in quest.answers_set" :key="idx_2">
                <label class="wrap_check_radio" :for="'radio_'+ idx +idx_2">
                  <input type="checkbox" :id="'radio_'+ idx + idx_2" v-on:click="addAnsverChebox(quest.id, answer.id, answer.correct = !answer.correct)">
                  <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                </label>
                <label :for="'radio_'+ idx + idx_2">
                  {{answer.title}}
                </label>
              </div>
            </div>
            <div v-else class="ansver_list">
              <div class="wrap_radio" v-for="(answer, idx_2) in quest.answers_set" :key="idx_2">
                <input type="radio" :id="'radio_'+ idx + idx_2" :name="'radio_'+ idx" v-on:click="addAnsverRadio(quest.id, answer.id)">
                <label class="jss54 jss56" :for="'radio_'+ idx + idx_2">
                  <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                  </svg>
                  <svg class="MuiSvgIcon-root jss55" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
                  </svg>
                </label>
                <label :for="'radio_'+ idx + idx_2">
                  {{answer.title}}
                </label>
              </div>
            </div>
          </div>
        </div>
        <button v-on:click="postTest()" class="btn_test_complete">Завершити тест</button>
      </div>
      <div v-else>
        <div v-if="resultInfo.success" class="block_success">
          <h3>Вітаємо! Ви пройшли тест до курсу "Тестовий вебінар"</h3>
          <p>Ваш відсоток правильних відповідей</p>
          <span class="interest">{{ userTest.result }}%</span>
          <p>Ви можете отримати Сертифікат про проходження курсу "Тестовий вебінар"</p>
          <a 
            href='#'
            @click.prevent="getSertificat(proId)" 
            class="btn_certificate"
          >Отримати сертифікат</a>
        </div>
        <div v-else-if="!resultInfo.success" class="block_success">
          <p>Ваш відсоток правильних відповідей</p>
          <span class="interest">{{ resultInfo.result }}%</span>
          <p v-if="infoTest.max_tries !==0">Кількість спроб: {{infoTest.max_tries - infoTest.user_statistics.tries}}</p>
          <p v-if="infoTest.max_tries === 0">Кількість спроб: Безліч</p>
          <a href="#" v-if="infoTest.max_tries === 0 || infoTest.max_tries > infoTest.user_statistics.tries" v-on:click.prevent="restart()" class="btn_certificate">Спробувати ще!</a>
        </div>
        <div v-if="(infoTest.max_tries) === infoTest.user_statistics.tries && infoTest.max_tries !== 0 && !resultInfo.success" class="block_success">
            <h3>Тест не пройдено!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TestVebinar',
  props: ['proId', 'type'],
  data () {
    return {
      testVebinar: [],
      // proId: this.$route.params.Pid,
      sertificate: '',
      resultInfo: '',
      infoTest: [],
      userTest: {}
    }
  },
  created () {
    this.getNotify()
  },
  methods: {
    async getSertificat(id) {
      console.log(`https://asprof-test.azurewebsites.net/api/${this.type}/${id}/test/results/certificate/`)
      console.log(this.$store.getters.getToken)
      this.$message('Очікуйте зараз іде підготовка сертифіката')
      await axios({
        url: `https://asprof-test.azurewebsites.net/api/${this.type}/${id}/test/results/certificate/`,
        data: this.userTest,
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.getToken
        }
      }).then(respons => {
        console.log(respons.data)
        
        var a = document.createElement("a");
        a.style = "display: none";
        a.href = `data:application/pdf;base64,<?= ${respons.data} ?>`;
        a.download = "download.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

      })
        .catch(error => {
          console.log(error)
          this.$message('Помилка')
        })
        .finally()
        
    },
    restart () {
      this.resultInfo = ''
      this.getNotify()
    },
    addAnsverChebox (idQuest, idAnsver, add) {
      // alert(add)
      if (add) {
        this.userTest[idQuest].push(idAnsver)
      } else {
        for (let x = 0; x < this.userTest[idQuest].length; x++) {
          if (this.userTest[idQuest][x] == idAnsver) {
            this.userTest[idQuest].splice(x, 1)
          }
        }
      }
    },
    addAnsverRadio (idQuest, idAnsver) {
      this.userTest[idQuest] = idAnsver
    },
    async postTest () {
      // let obj = {
      //   '47': '50',
      //   '48': '52'
      // }
      await axios({
        url: `https://asprof-test.azurewebsites.net/api/${this.type}/${this.proId}/test/results/`,
        data: this.userTest,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.getToken
        }
      }).then(respons => {
        // this.$message('Тест закінчено!')
        this.resultInfo = respons.data
      })
        .catch(error => {
          console.log(error)
          this.$message('Помилка')
        })
        .finally(() => (this.loading = false))
      this.getNotify()
    },
    async getNotify () {
      await axios({
        url: `https://asprof-test.azurewebsites.net/api/${this.type}/${this.proId}/test/`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.getToken
        }
      }).then(respons => {
        this.testVebinar = respons.data.questions_set
        this.infoTest = respons.data
      })
        .catch(error => {
          console.log(error)
          this.$message('Помилка')
        })
        .finally(() => (this.loading = false))
      // если тест доступен, получить тест
      if (this.infoTest.user_statistics.test_available) {
        await axios({
          url: `https://asprof-test.azurewebsites.net/api/${this.type}/${this.proId}/test/`,
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.getToken
          }
        }).then(respons => {
          this.testVebinar = respons.data.questions_set
          for (let i = 0; i < this.testVebinar.length; i++) {
            if (this.testVebinar[i].multiple_answers) {
              this.userTest[this.testVebinar[i].id] = []
            } else {
              this.userTest[this.testVebinar[i].id] = ''
            }
            for (let x = 0; x < this.testVebinar[i].answers_set.length; x++) {
              this.testVebinar[i].answers_set[x].correct = false
            }
          }
          // this.messages = res;
        })
          .catch(error => {
            console.log(error)
            this.$message('Помилка')
          })
          .finally(() => (this.loading = false))
      } else {
        await axios({
          url: `https://asprof-test.azurewebsites.net/api/${this.type}/${this.proId}/test/results/`,
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.getToken
          }
        }).then(respons => {
          this.testVebinar = respons.data.questions_set
          this.userTest = respons.data[0]
          this.resultInfo = respons.data[0]
        })
          .catch(error => {
            console.log(error)
            this.$message('Помилка')
          })
          .finally(() => (this.loading = false))
      }
    }
  }
}

</script>

<style lang="scss">

.interest {
  font-size: desktop-vw(50);
  color: green;
}

.block_success {
  text-align: center;
}

.list_question {
  margin-bottom: desktop-vw(40);
}

.ansver_list {
  padding: 0 0 0 desktop-vw(20);
}

h1.title_test {
  color: #1faeea;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: desktop-vw(20);
}

.lq_number {
  color: #000;
  font-weight: bold;
  font-size: desktop-vw(14);
  margin-bottom: desktop-vw(10);
}

.lq_question {
  font-size: desktop-vw(15);
  margin-bottom: desktop-vw(20);
}

.content_vebinar {
  padding: desktop-vw(50) 0;
}

.wrap_checkbox {
  display: flex;
  margin-bottom: desktop-vw(10);
  label {
    cursor: pointer;
  }
}

.wrap_radio {
  margin-top: 3px;
  position: relative;
  display: flex;
  margin-right: desktop-vw(20);
  margin-bottom: desktop-vw(20);

  label {
    cursor: pointer;
  }

  input[type=radio] {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 0px;
    min-width: 0px;
    height: 0px;
    margin: 0;
    cursor: pointer;
  }

  input:checked ~ label.jss54 svg:nth-child(1) {
    fill: #1faeea;
  }

  input:checked ~ label.jss54 svg:nth-child(2) {
    fill: #1faeea;
    opacity: 1;
  }

  label.radioName {
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    cursor: pointer;
  }

  label.jss54 {
    margin-right: desktop-vw(5);
    display: block;
    max-width: desktop-vw(24);
    min-width: desktop-vw(24);
    height: desktop-vw(24);
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    svg:nth-child(1) {
      width: 100%;
      height: 100%;
      fill: rgba(0, 0, 0, 0.54);
    }

    svg:nth-child(2) {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      fill: rgba(0, 0, 0, 0.54);
      opacity: 0;
    }
  }
}

.wrap_check_radio {
  margin-top: 3px;
  display: block;
  max-width: desktop-vw(18);
  min-width: desktop-vw(18);
  box-sizing: border-box;
  width: 100%;
  height: desktop-vw(18);
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.54);
  margin-right: desktop-vw(10);
  cursor: pointer;
  position: relative;

  input[type=checkbox],
  input[type=radio] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 0px;
    min-width: 0px;
    height: 0px;
    margin: 0;
    cursor: pointer;
  }

  input:not(checked) ~ .MuiSvgIcon-root {
    display: none;
  }

  input:checked ~ .MuiSvgIcon-root {
    display: block;
    max-width: desktop-vw(24);
    min-width: desktop-vw(24);
    height: desktop-vw(24);
    position: absolute;
    top: -5px;
    left: -5px;
    fill: #1faeea;
  }
}

.btn_test_complete,
.btn_certificate {
  border-radius: desktop-vw(10);
  height: desktop-vw(50);
  color: #fff;
  display: flex;
  font-size: 15px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  max-width: desktop-vw(200);
  width: 100%;
  background: #1faeea;
  border: 0;
  font-weight: bold;
  cursor: pointer;
  margin-top: desktop-vw(30);
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
}

.btn_certificate {
  max-width: desktop-vw(300);
  width: 100%;
  line-height: 20px;
}

@media screen and (max-width: $mobile) {
  h1.title_test {
    margin-bottom: mobile-vw(20);
  }

  .interest {
    font-size: mobile-vw(50);
  }

  .list_question {
    margin-bottom: mobile-vw(40);
  }

  .ansver_list {
    padding: 0 0 0 mobile-vw(20);
  }

  .lq_number {
    font-size: mobile-vw(14);
    margin-bottom: mobile-vw(10);
  }

  .lq_question {
    font-size: mobile-vw(15);
    margin-bottom: mobile-vw(20);
  }

  .content_vebinar {
    padding: mobile-vw(50) 0;
  }

  .wrap_checkbox {
    display: flex;
    margin-bottom: mobile-vw(10);
    label {
      cursor: pointer;
    }
  }

  .wrap_checkbox label {
    display: flex;
    align-items: center;
  }

  .wrap_radio {
    margin-right: mobile-vw(20);
    margin-bottom: mobile-vw(20);

    label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    label.jss54 {
      margin-right: mobile-vw(5);
      max-width: mobile-vw(24);
      min-width: mobile-vw(24);
      height: mobile-vw(24);
    }
  }

  .wrap_check_radio {
    max-width: mobile-vw(18);
    min-width: mobile-vw(18);
    height: mobile-vw(18);
    border-radius: 3px;
    border: 2px solid rgba(0, 0, 0, 0.54);
    margin-right: mobile-vw(10);


    input:checked ~ .MuiSvgIcon-root {
      max-width: mobile-vw(24);
      min-width: mobile-vw(24);
      height: mobile-vw(24);
    }
  }

  .btn_test_complete,
  .btn_certificate {
    border-radius: mobile-vw(10);
    height: mobile-vw(50);
    max-width: mobile-vw(200);
    margin-top: mobile-vw(30);
  }

  .btn_certificate {
    max-width: mobile-vw(300);
  }
}

</style>

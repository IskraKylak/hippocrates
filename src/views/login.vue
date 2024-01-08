<template>
  <div class="login">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container" >
        <div class="login_content" v-if="tokkent === ''">
            <h2 class="login_title">
                {{$t('login.title')}}
            </h2>
            <form @submit.prevent="onSubmit" class="login_form">
                <div class="form-item" :class="{ errorInput: v$.email.$error }">
                    <input
                        :class="{ error: v$.email.$error }"
                        v-model="email"
                        @change="v$.email.$touch()"
                        placeholder="Еmail"
                    />
                    <p class="errorText" v-if="v$.email.required.$invalid">
                        Filed is required
                    </p>
                    <p class="errorText" v-if="v$.email.email">Email is not correct</p>
                </div>
                <div class="form-item" :class="{ errorInput: v$.password.$error }">
                    <input
                        type="password"
                        v-model="password"
                        :class="{ error: v$.password.$error }"
                        @change="v$.password.$touch()"
                        :placeholder="$t('placeholder.pass')"
                    />
                    <p class="errorText" v-if="v$.password.required.$invalid">
                        Filed is required
                    </p>
                    <p class="errorText" v-if="v$.password.minLength.$invalid">
                        Password mast have at least {{ v$.password.minLength.$params.min }} !
                    </p>
                </div>
				        <Button class="btnLogin">{{$t('login.btnEnter')}}</Button>
                <Button :btnClass="'btnBorder'" @click.prevent="openReg()" class="btnReg">{{$t('login.btnReg')}}</Button>
            </form>
        </div>
        <div v-else class="registred">
          <h2 class="registred_title">{{$t('titleReg')}}</h2>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import Button from '@/components/UI/Controls/Button.vue'
export default {
  name: 'Login',
  components: {
    Breadcrumbs,
	Button
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
        password: '',
        email: '',
    }
  },
  validations () {
    return {
      password: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
    }
  },
  methods: {
    openReg() {
      this.$router.push(`/${this.$i18n.locale}/register`)
    },
    async onSubmit () {
      this.v$.$touch()
      if (!this.v$.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        }
        try {
          await this.$store.dispatch('login', user)
          this.$router.push(`/${this.$i18n.locale}/`)
        } catch (e) {
          this.$message(this.$t('login.message.login'))
          throw e
        }
      }
    }
  },
  computed: {
    breadcrumbs() {
      return [
        {
            name: this.$t('breadcrumbs.home'),
            link: `/${this.$i18n.locale}/`
        },
        {
            name: this.$t('breadcrumbs.login'),
        }
      ]
    },
    tokkent() {
        return this.$store.getters.getToken
    },
  }
}
</script>

<style lang="scss" scoped>

.registred {
   padding: desktop-vw(50) 0 desktop-vw(200) 0;

   &_title {
      color: #1FAEEA;
   }
}

.form-item .errorText {
  display: none;
  margin-top: 2px;
  font-size: desktop-vw(13);
  color: rgb(207, 86, 86);
}

.form-item.errorInput .errorText {
  display: block;
}

.form-item {
	width: 100%;

	input {
		font-family: "OpenSans";
		height: desktop-vw(44);
		border: 1px solid #1faeea;
    	border-radius: 2px;
		width: 100%;
		padding: desktop-vw(15);
		font-size: desktop-vw(16);

		&:focus {
			outline: none;
		}

		&::placeholder {
			font-family: "OpenSans";
			font-size: desktop-vw(16);
		}
		
	}
}

.login {
	padding-top: desktop-vw(150);

	&_title {
		font-style: normal;
		font-weight: 700;
		font-size: desktop-vw(24);
		line-height: 130%;
		text-align: center;
		text-transform: uppercase;
		color: #1FAEEA;
		margin-bottom: desktop-vw(50);
	}

	&_content {
		padding: desktop-vw(30) 0 desktop-vw(50) 0;
	}

	&_form {
		max-width: desktop-vw(350);
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		grid-gap: desktop-vw(20);
		align-items: center;

		.btnLogin {
			background: #1FAEEA;
			color: #fff;
			max-width: desktop-vw(180);
			width: 100%;
		}

		.btnReg {
			max-width: desktop-vw(180);
			width: 100%;
		}
	}
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
  .registred {
    padding: mobile-vw(50) 0 mobile-vw(200) 0;

    &_title {
        color: #1FAEEA;
    }
  }

  .form-item .errorText {
    display: none;
    margin-top: 5px;
    font-size: mobile-vw(13);
    color: rgb(207, 86, 86);
  }

  .form-item.errorInput .errorText {
    display: block;
  }

  .form-item {
    width: 100%;

    input {
      font-family: "OpenSans";
      height: mobile-vw(44);
      border: 1px solid #1faeea;
        border-radius: 2px;
      width: 100%;
      padding: mobile-vw(15);
      font-size: mobile-vw(16);

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-family: "OpenSans";
        font-size: mobile-vw(16);
      }
      
    }
  }

  .login {
    padding-top: mobile-vw(30);

    &_title {
      font-style: normal;
      font-weight: 700;
      font-size: mobile-vw(24);
      line-height: 130%;
      text-align: center;
      text-transform: uppercase;
      color: #1FAEEA;
      margin-bottom: mobile-vw(50);
    }

    &_content {
      padding: mobile-vw(30) 0 mobile-vw(50) 0;
    }

    &_form {
      max-width: mobile-vw(350);
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      grid-gap: mobile-vw(20);
      align-items: center;

      .btnLogin {
        background: #1FAEEA;
        color: #fff;
        max-width: mobile-vw(180);
        width: 100%;
      }

      .btnReg {
        max-width: mobile-vw(180);
        width: 100%;
      }
    }
  }
}

</style>
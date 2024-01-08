<template>
  <div class="calendar">
    <div class="header-calendar">
      <button @click="prev">&#9668;</button>
      <span class="title">{{ title }}</span>
      <button @click="next">&#9658;</button>
    </div>
    <div class="week days">
      <div class="day">{{$t('Calendar.days.Mon')}}</div>
      <div class="day">{{$t('Calendar.days.Tue')}}</div>
      <div class="day">{{$t('Calendar.days.Wed')}}</div>
      <div class="day">{{$t('Calendar.days.Ths')}}</div>
      <div class="day">{{$t('Calendar.days.Fri')}}</div>
      <div class="day">{{$t('Calendar.days.Sat')}}</div>
	    <div class="day">{{$t('Calendar.days.Sun')}}</div>
    </div>
    <div class="week" v-for="(week, idx) in weeks" :key="idx">
      <div class="day selectable"
           :class="day == 0 ? 'hide' : ''"
           v-for="(day, idx) in week" @click="showEvents(day)" :key="idx">
           <div 
            class="day-wrap"
            :class="{'selected_day' : dayTrue(day, this.month, this.year)}" 
            @click="returnData(day)"
          >
              {{ day }} 
           </div>
      </div>
    </div>
  </div>
</template>
<script>
const DATE = new Date()
// const DAYS = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
// const MONTHS = ['Cічень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
const daysInYearMonth = (y, m) => new Date(y, m, 0).getDate()
export default {
  props: ['content'],
  data () {
    return {
      title: '',
      eventTrue: [],
      month: 0,
      year: 0,
      days: [],
      weeks: [],
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    MONTHS() {
      return [
        this.$t('Calendar.month.January'),
        this.$t('Calendar.month.February'), 
        this.$t('Calendar.month.March'), 
        this.$t('Calendar.month.April'), 
        this.$t('Calendar.month.May'), 
        this.$t('Calendar.month.June'), 
        this.$t('Calendar.month.July'), 
        this.$t('Calendar.month.August'), 
        this.$t('Calendar.month.September'),
        this.$t('Calendar.month.October'), 
        this.$t('Calendar.month.November'), 
        this.$t('Calendar.month.December'),
      ]
    }
  },
  created () {
    // this.getNotify()
  },
  methods: {
    dayTrue (day, month, year) {
      if(this.content) {
        let calendarStr = day + "." + month + "." + year
        for (let index = 0; index < this.content.length; ++index) {
          let date = new Date(this.content[index].start_date)
          let dataItem = date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
          // console.log('dataItem ' + dataItem)
          if(dataItem == calendarStr) {
              return true
          }
            
        }
      }
      return false
    },
    // async getNotify () {
    //   await axios
    //     .get('https://asprof-test.azurewebsites.net/api/events/?format=json')
    //     .then(respons => {
    //       let res = respons.data
    //       this.$store.dispatch('setClEvent', res)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //     .finally(() => (this.loading = false))
    //   this.eventTrue = this.$store.getters.getClEvent
    // },
    returnData (day) {
      let strData = day + '-' + (this.month + 1) + '-' + this.year
      this.$emit('dataSelect', strData)
    },
    next () {
      this.update(new Date(this.year, this.month + 1, 1))
    },
    prev () {
      this.update(new Date(this.year, this.month - 1, 1))
    },
    daysInMonth () {
      return daysInYearMonth(this.year, this.month)
    },
    monthStartsOn () {
      return new Date(this.year, this.month, 1).getDay()
    },
    setTitle () {
      this.title = `${this.MONTHS[this.month]} ${this.year}`
    },
    update (date) {
      
      if (date) {
        this.month = date.getMonth()
        this.year = date.getFullYear()
        this.day = date.getDate()
      }
      this.setTitle()
      this.setDays()
      this.setWeeks()
    },
    setDays () {
      let preDays = this.monthStartsOn() > 0 ? Array(this.monthStartsOn() - 1).fill(0) : []
      this.days = [...preDays, ...Array(this.daysInMonth() + 2).keys()]
    },
    setWeeks () {
      let n = 1
      this.weeks = []

      while (n < this.days.length) {
        let week = [...this.days.slice(n, n += 7), ...Array(7).fill(0)].slice(0, 7)
        this.weeks.push(week)
      }
    },
    showEvents (day) {
      let data = `${this.title2}-${day}`
      this.$emit('showEvents', { data: data })
    },
    init () {
      this.update(DATE)
    }
  }
}
</script>
<style lang="scss" scoped>

.calendar {
	background: #F8F8F8;
	border-radius: 3px;
	overflow: hidden;
	width: desktop-vw(300);
	height: max-content;

	.header-calendar {
		height: desktop-vw(33);
		background: #1FAEEA;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 desktop-vw(18);

		button:nth-child(1) {
			font-size: 0;
			border: 0;
			display: block;
			background: transparent;
			width: desktop-vw(7);
			height: desktop-vw(12);
			margin-top: 2px;

			&:before {
				content: '';
				display: block;
				background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 8 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.75876 1.01111L1.48389 6.29111L6.75876 11.5711' stroke='white' stroke-width='2'/%3e%3c/svg%3e");
				background-repeat: no-repeat;
				width: 100%;
				height: 100%;
				cursor: pointer;
			}
		}

		button:nth-child(3) {
			font-size: 0;
			border: 0;
			display: block;
			background: transparent;
			width: desktop-vw(7);
			height: desktop-vw(12);

			&:before {
				content: '';
				display: block;
				background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 8 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.75876 1.01111L1.48389 6.29111L6.75876 11.5711' stroke='white' stroke-width='2'/%3e%3c/svg%3e");
				background-repeat: no-repeat;
				width: 100%;
				height: 100%;
				cursor: pointer;
				transform: rotate(180deg);
			}
			
		}

		span.title {
			font-style: normal;
			font-weight: 400;
			font-size: desktop-vw(18);
			line-height: 130%;
			/* identical to box height */
			text-align: center;
			text-transform: uppercase;
			color: #FFFFFF;
		}
	}

	.week {
		width: 100%;
		height: desktop-vw(33);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

		.day {
			font-style: normal;
			font-weight: 400;
			font-size: desktop-vw(14);
			line-height: 130%;
			text-align: center;
			text-transform: uppercase;
			color: #000000;

			&:nth-child(6) {
				color: #9D1006;
			}
			&:nth-child(7) {
				color: #9D1006;
			}
		}
	}
}

* {
  box-sizing: border-box
}

.day-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}
.selected_day {
  background: #e1cd00;
}

.week.days {
  background: #DCDCDC;

  .day {
	display: flex;
	justify-content: center;
	align-items: center;

	font-style: normal;
	font-weight: 400;
	font-size: desktop-vw(12);
	line-height: 130%;
	text-transform: uppercase;
	color: #000000;
  }
}

// .calendar {
//   width: 300px;
//   /*margin: 20px;*/
//   /*border: 1px solid #000;*/
//   border-bottom-width: 2px;
//   border-right-width: 2px;
//   /*padding: 20px;*/
//   background: #fff;
// }

// .week {
//   width: 300px;
//   height: 32px;
//   padding: 1px 0;
// }

// .day {
//   width: 40px;
//   height: 30px;
//   float: left;
//   display: flex;
//   direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 1px;
//   border-radius: 3px;
// }

.day.selectable {
  cursor: pointer;
}

.day.selectable:hover {
  border: 1px solid #000;
  background: #ddf2f7;
}

.hide {
  opacity: 0;
}

.calendar.true .class-red {
  background: #e1cd00;
  color: #fff;
  font-weight: bold;
}

// .header button {
//   background: transparent;
//   border: 0;
//   cursor: pointer;
// }

// .header {
//   text-align: center;
//   height: 35px;
// }

.header-calendar.true {
}

#datepicker .calendar .header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
    .calendar {
      width: 100%;

      .header-calendar {
        height: mobile-vw(35);
        padding: 0 mobile-vw(18);

        button:nth-child(1) {
          width: mobile-vw(7);
          height: mobile-vw(12);
        }

        button:nth-child(3) {
          width: mobile-vw(7);
          height: mobile-vw(12);      
        }

        span.title {
          font-size: mobile-vw(18);
        }
      }

      .week {
        height: mobile-vw(45);

        .day {
          font-size: mobile-vw(18);
        }
      }
    }

    .week.days {
      .day {
        font-size: mobile-vw(14);
      }
    }
}
</style>

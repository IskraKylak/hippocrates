<template>
  <div class="register">
    <div class="container">
        <Breadcrumbs :content="breadcrumbs" /> 
    </div>
    <div class="container">
        <div class="register_content">
			<h2 class="register_title">
				РЕЄСТРАЦІЯ
			</h2>
			<form @submit.prevent="onSubmit" class="register_form">
				<p>Вже маєте зареєстрований аккаунт?</p>
				<router-link to="/login" class="register_login">Увійдіть</router-link>
				<p>Інформація про особу</p>
				<div class="wrap_form_row">
					<div class="form-item" :class="{ errorInput: v$.surname.$error }">
						<input
							v-model="surname"
							:class="{ error: v$.surname.$error }"
							@change="v$.surname.$touch()"
							placeholder="Прізвище*"
						/>
						<p class="errorText" v-if="v$.surname.required.$invalid">
							Filed is required
						</p>
						<p class="errorText" v-if="v$.surname.minLength.$invalid">
							Surname mast have at least
							{{ v$.surname.minLength.$params.min }} !
						</p>
					</div>
					<div class="form-item" :class="{ errorInput: v$.name.$error }">
						<input
							v-model="name"
							:class="{ error: v$.name.$error }"
							@change="v$.name.$touch()"
							placeholder="Ім'я*"
						/>
						<p class="errorText" v-if="v$.name.required.$invalid">
							Filed is required
						</p>
						<p class="errorText" v-if="v$.name.minLength.$invalid">
							Name mast have at least {{ v$.name.minLength.$params.min }} !
						</p>
					</div>
					<div class="form-item" :class="{ errorInput: v$.middleName.$error }">
						<input
							v-model="middleName"
							:class="{ error: v$.middleName.$error }"
							@change="v$.middleName.$touch()"
							placeholder="Побатькові*"
						/>
						<p class="errorText" v-if="v$.middleName.required.$invalid">
							Filed is required
						</p>
						<p class="errorText" v-if="v$.middleName.minLength.$invalid">
							Surname mast have at least
							{{ v$.middleName.minLength.$params.min }} !
						</p>
					</div>
				</div>
				<p>Місце проживання</p>
				<div class="wrap_form_row">
					<div
						class="form-item select"
						:class="{ errorInput: v$.selectedRegions.$error }"
					>
						<select
							v-model="selectedRegions"
							:class="{ error: v$.selectedRegions.$error }"
							@change="v$.selectedRegions.$touch()"
							placeholder="Оберіть область*"
						>
							<option value="" disabled selected>Виберіть область*</option>
							<option
							v-for="region in regions"
							:value="region.name"
							:key="region.name"
							>
							{{ region.name }}
							</option>
						</select>
						<p class="errorText" v-if="v$.selectedRegions.required.$invalid">
							Filed is required
						</p>
					</div>
					<div class="form-item" :class="{ errorInput: v$.locality.$error }">
						<input
							v-model="locality"
							:class="{ error: v$.locality.$error }"
							@change="v$.locality.$touch()"
							placeholder="Населенний пункт*"
						/>
						<p class="errorText" v-if="v$.locality.required.$invalid">
							Filed is required
						</p>
						<p class="errorText" v-if="v$.locality.minLength.$invalid">
							Surname mast have at least
							{{ v$.locality.minLength.$params.min }} !
						</p>
					</div>
				</div>
				<p>Професійна діяльність</p>
				<div class="wrap_form_row">
					<div
						class="form-item select"
						:class="{ errorInput: v$.selectedSpeciality.$error }"
					>
						<select
							v-model="selectedSpeciality"
							:class="{ error: v$.selectedSpeciality.$error }"
							@change="v$.selectedSpeciality.$touch()"
						>
							<option value="" disabled selected>Виберіть спеціальність*</option>
							<option
							v-for="spec in speciality"
							:value="spec.id"
							:key="spec.name"
							>
							{{ spec.name }}
							</option>
						</select>
						<p class="errorText" v-if="v$.selectedSpeciality.required.$invalid">
							Filed is required
						</p>
					</div>
					<div class="form-item" :class="{ errorInput: v$.work.$error }">
						<input
							v-model="work"
							:class="{ error: v$.work.$error }"
							@change="v$.work.$touch()"
							placeholder="місце роботи*"
						/>
						<p class="errorText" v-if="v$.work.required.$invalid">
							Filed is required
						</p>
						<p class="errorText" v-if="v$.work.minLength.$invalid">
							Surname mast have at least
							{{ v$.work.minLength.$params.min }} !
						</p>
					</div>
					<div class="form-item" :class="{ errorInput: v$.position.$error }">
						<input
							v-model="position"
							:class="{ error: v$.position.$error }"
							@change="v$.position.$touch()"
							placeholder="Посада*"
						/>
						<p class="errorText" v-if="v$.position.required.$invalid">
							Filed is required
						</p>
						<p class="errorText" v-if="v$.position.minLength.$invalid">
							Surname mast have at least
							{{ v$.position.minLength.$params.min }} !
						</p>
					</div>
				</div>
				<p>Контактні дані</p>
				<div class="wrap_form_row">
					<div class="form-item" :class="{ errorInput: v$.email.$error }">
						<input
							:class="{ error: v$.email.$error }"
							v-model="email"
							@change="v$.email.$touch()"
							placeholder="Еmail*"
						/>
						<p class="errorText" v-if="v$.email.required.$invalid">
							Filed is required
						</p>
						<p class="errorText" v-if="v$.email.email">Email is not correct</p>
					</div>
					<div class="form-item" :class="{ errorInput: v$.tel.$error }">
						<input
							v-model="tel"
							:class="{ error: v$.tel.$error }"
							@change="v$.tel.$touch()"
							placeholder="Мобільний телефон*"
						/>
						<p class="errorText" v-if="v$.tel.required.$invalid">
							Filed is required
						</p>
						<p class="errorText" v-if="v$.tel.numeric.$invalid">
							You phone is not correct
						</p>
						<p class="errorText" v-if="v$.tel.minLength.$invalid">
							Tel mast have at least
							{{ v$.tel.minLength.$params.min }} !
						</p>
					</div>
				</div>
				<p>Безпека</p>
				<div class="wrap_form_row">
					<div class="form-item" :class="{ errorInput: v$.password1.$error }">
						<input
							type="password"
							v-model="password1"
							:class="{ error: v$.password1.$error }"
							@change="v$.password1.$touch()"
							placeholder="Пароль*"
							ref="password"
							autocomplete="off"
						/>
						<p class="errorText" v-if="v$.password1.required.$invalid">
							Filed is required
						</p>
						<p class="errorText" v-if="v$.password1.minLength.$invalid">
							Password mast have at least
							{{ v$.password1.minLength.$params.min }} !
						</p>
					</div>
					<div class="form-item" :class="{ errorInput: v$.password2.$error }">
						<input
							type="password"
							v-model="password2"
							:class="{ error: v$.password2.$error }"
							@change="v$.password2.$touch()"
							placeholder="Пароль*"
						/>
						<p class="errorText"  v-if="v$.password2.sameAsPassword.$params.equalTo">Password and Confirm Password should match</p>
						<p class="errorText" v-if="v$.password2.required.$invalid">
							Filed is required
						</p>
					</div>
				</div>
				<div class="register_message">
					Поля, відмічені зірочкою (*) обов’язкові до заповнення.
				</div>
				<div class="register_terms">
					Натискаючи на кнопку "Реєстрація", Ви погоджуєтесь з<a href="#" target="_blank" class="UserAgreement_link"> угодою користувача</a>
				</div>
				<Button class="btnReg">Реєстрація</Button>
			</form>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumbs from '@/components/Breadcrumbs'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email, numeric, sameAs } from '@vuelidate/validators'
import Button from '@/components/UI/Controls/Button.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
	name: 'Rigester',
	components: {
		Breadcrumbs,
		Button
	},
	setup () {
		return { v$: useVuelidate() }
	},
	data() {
		return {
			surname: '',
			name: '',
			middleName: '',
			regions: [
				{ name: 'Автономна Республіка Крим' },
				{ name: 'Вінницька' },
				{ name: 'Волинська' },
				{ name: 'Дніпропетровська' },
				{ name: 'Донецька' },
				{ name: 'Житомирська' },
				{ name: 'Закарпатська' },
				{ name: 'Запорізька' },
				{ name: 'Івано-Франківська' },
				{ name: 'Київ' },
				{ name: 'Київська' },
				{ name: 'Кіровоградська' },
				{ name: 'Луганська' },
				{ name: 'Львівська' },
				{ name: 'Миколаївська' },
				{ name: 'Одеська' },
				{ name: 'Полтавська' },
				{ name: 'Рівненська' },
				{ name: 'Севастополь' },
				{ name: 'Сумська' },
				{ name: 'Тернопільська' },
				{ name: 'Харківська' },
				{ name: 'Херсонська' },
				{ name: 'Хмельницька' },
				{ name: 'Черкаська' },
				{ name: 'Чернівецька' },
				{ name: 'Чернігівська' }
			],
			selectedRegions: '',
			locality: '',
			speciality: [],
			selectedSpeciality: '',
			work: '',
			position: '',
			email: '',
			tel: '',
			password1: '',
			password2: '',
			breadcrumbs: [
				{
					name: 'Головна',
					link: '/'
				},
				{
					name: 'РЕЄСТРАЦІЯ',
				}
			],
		}
	},
	validations () {
		return {
			surname: {
				required,
				minLength: minLength(4),
			},
			name: {
				required,
				minLength: minLength(4),
			},
			middleName: {
				required,
				minLength: minLength(4),
			},
			selectedSpeciality: {
				required,
			},
			selectedRegions: {
				required,
			},
			locality: {
				required,
				minLength: minLength(4),
			},
			work: {
				required,
				minLength: minLength(4),
			},
			position: {
				required,
				minLength: minLength(4),
			},
			password1: {
				required,
				minLength: minLength(4),
			},
			password2: {
				required,
				// minLength: minLength(4),
				sameAsPassword: sameAs(this.password1)
			},
			tel: {
				required,
				numeric,
				minLength: minLength(1),
			},
			email: {
				required,
				email,
			},
		}
	},
	methods: {
		async onSubmit () {
			this.v$.$touch()
			if (!this.v$.$invalid) {
				const user1 = {
					email: this.email,
					password: this.password1,
					first_name: this.name,
					last_name: this.surname,
					patronymic: this.middleName,
					phone: this.tel,
					work_phone: "",
					birth_date: null,
					region: this.selectedRegions,
					town: this.locality,
					start_activity_date: null,
					college: "",
					diploma: "",
					job_place: this.work,
					job_name: this.selectedSpeciality,
					specialization: null
				}
				try {
					await this.$store.dispatch('register', user1)
					this.$router.push('/')
				} catch (e) {
					this.$message('Помилка')
					throw e
				}
			}
		},
		...mapActions([
			'GET_SPECIALIZATIONS_FROM_API'
		]),
	},
	mounted() {
		this.GET_SPECIALIZATIONS_FROM_API().then((response) => {
			if(response) {
				this.speciality = response
			}
		})
	}
}
</script>
<style lang="scss" scoped>

.UserAgreement_link {
	color: #1FAEEA;
	text-decoration: none;
}

.register_form {
	display: flex;
	flex-direction: column;

	.btnReg {
		margin: 0 auto;
		background: #1FAEEA;
	}

	p {
		font-family: "OpenSans";
		text-align: center;
		font-size: desktop-vw(16);
		color: #414141;
		margin-bottom: desktop-vw(15);
		font-weight: 500;
	}

	.wrap_form_row {
		margin-bottom: desktop-vw(30);


		&:nth-of-type(1) {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: desktop-vw(20);
		}

		&:nth-of-type(2) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: desktop-vw(20);
		}

		&:nth-of-type(3) {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: desktop-vw(20);
		}

		&:nth-of-type(4) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: desktop-vw(20);
		}

		&:nth-of-type(5) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: desktop-vw(20);
		}
	}
}

.form-item .errorText {
  display: none;
  margin-top: 5px;
  font-size: desktop-vw(13);
  color: rgb(207, 86, 86);
}

.form-item.errorInput .errorText {
  display: block;
}

select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

select::-ms-expand {
	display: none;
}

.form-item {
	width: 100%;

	select {
		font-family: "OpenSans";
		height: desktop-vw(44);
		border: 1px solid #1faeea;
    	border-radius: 2px;
		width: 100%;
		padding: 0 desktop-vw(13);
		font-size: desktop-vw(16);
		&:focus {
			outline: none;
		}

		
	}

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


.register {
	padding-top: desktop-vw(150);

	&_terms {
		text-align: left;
		margin-bottom: desktop-vw(15);
	}

	&_message {
		color: #cd1b1b;
		margin-bottom: desktop-vw(15);
	}

	&_login {
		width: max-content;
		color: #1FAEEA;
		margin: 0 auto desktop-vw(15) auto;
		font-weight: 700;
		text-decoration: none;
	}

	&_title {
		font-style: normal;
		font-weight: 700;
		font-size: desktop-vw(24);
		line-height: 130%;
		text-align: center;
		text-transform: uppercase;
		color: #1FAEEA;
		margin-bottom: desktop-vw(30);
	}

	&_content {
		padding: desktop-vw(30) 0 desktop-vw(50) 0;
	}
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
  	.UserAgreement_link {
		color: #1FAEEA;
		text-decoration: none;
	}

	.register_form {
		display: flex;
		flex-direction: column;

		.btnReg {
			margin: 0 auto;
			background: #1FAEEA;
		}

		p {
			font-family: "OpenSans";
			text-align: center;
			font-size: mobile-vw(16);
			color: #414141;
			margin-bottom: mobile-vw(15);
			font-weight: 500;
		}

		.wrap_form_row {
			margin-bottom: mobile-vw(30);


			&:nth-of-type(1) {
				display: grid;
				grid-template-columns: 1fr;
				grid-gap: mobile-vw(20);
			}

			&:nth-of-type(2) {
				display: grid;
				grid-template-columns: 1fr;
				grid-gap: mobile-vw(20);
			}

			&:nth-of-type(3) {
				display: grid;
				grid-template-columns: 1fr;
				grid-gap: mobile-vw(20);
			}

			&:nth-of-type(4) {
				display: grid;
				grid-template-columns: 1fr;
				grid-gap: mobile-vw(20);
			}

			&:nth-of-type(5) {
				display: grid;
				grid-template-columns: 1fr;
				grid-gap: mobile-vw(20);
			}
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

	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	select::-ms-expand {
		display: none;
	}

	.form-item {
		width: 100%;

		select {
			font-family: "OpenSans";
			height: mobile-vw(44);
			border: 1px solid #1faeea;
			border-radius: 2px;
			width: 100%;
			padding: 0 mobile-vw(13);
			font-size: mobile-vw(16);
			&:focus {
				outline: none;
			}

			
		}

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


	.register {
		padding-top: mobile-vw(30);

		&_terms {
			text-align: left;
			margin-bottom: mobile-vw(15);
		}

		&_message {
			color: #cd1b1b;
			margin-bottom: mobile-vw(15);
		}

		&_login {
			width: max-content;
			color: #1FAEEA;
			margin: 0 auto mobile-vw(15) auto;
			font-weight: 700;
			text-decoration: none;
		}

		&_title {
			font-style: normal;
			font-weight: 700;
			font-size: mobile-vw(24);
			line-height: 130%;
			text-align: center;
			text-transform: uppercase;
			color: #1FAEEA;
			margin-bottom: mobile-vw(30);
		}

		&_content {
			padding: mobile-vw(30) 0 mobile-vw(50) 0;
		}
	}
}

</style>
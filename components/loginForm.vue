<template>
	<div id="main">
		<div class="inner">
			<!-- <div id="image01"
			 class="image"><img :src="require('@/assets/images/zhp-logo.png')"
				 alt="Logo ZHP"></div> -->
			<h1 id="text02">Witaj ponownie!</h1>
			<h2> Zaloguj się</h2>
			<v-alert :value="errorInForm"
			 type="error"
			 transition="scale-transition">
				Coś poszło nie tak .. Czy logujesz się z tego samego e-maila, którym aktywowaliście konto?... W razie dalszych problemów skontaktuj się z centralą gry.
			</v-alert>
			<v-form ref="form"
			 v-model="valid">
				<v-text-field v-model="email"
				 :rules="emailRules"
				 label="E-mail"
				 color="success"
				 light
				 outline
				 required></v-text-field>

				<v-text-field v-model="password"
				 :append-icon="showPassword ? 'visibility_off' : 'visibility'"
				 :rules="[passwordRules.required, passwordRules.min]"
				 :type="showPassword ? 'text' : 'password'"
				 color="success"
				 light
				 outline
				 name="input-10-1"
				 label="Podaj hasło"
				 hint="Uwaga! Prosimy by było inne niż Twoje hasło do konta mailowego!"
				 @click:append="showPassword = !showPassword"></v-text-field>

				<v-checkbox v-model="persistentLogin"
				 class="my-0"
				 light
				 label="Zaloguj mnie na stałe"
				 required></v-checkbox>

				<v-btn :disabled="!valid"
				 @click="loginFormSubmit"
				 light
				 color="green">
					Aktywuj konto ! :)
				</v-btn>
				<v-btn light
				 @click="clearForm">Wyczyść</v-btn>
			</v-form>

			<small>Konto jeszcze nieaktywne?
				<nuxt-link to="/register">
					Aktywuj je tutaj!
				</nuxt-link> :)
			</small>
			<br>
			<!-- TODO: implement "password reset" feature -->
			<passwordReset></passwordReset>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import passwordReset from '@/components/passwordReset'

export default {
  components: { passwordReset },
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'Pole nie może być puste',
      v => /.+@.+/.test(v) || 'Nieprawidłowy adres E-mail'
    ],
    password: '',
    passwordRules: {
      required: value => !!value || 'Pole nie może być puste',
      min: v => (v && v.length >= 6) || 'Min. 6 znaków!',
      emailMatch: () => 'Podane hasło lub email nie zgadzają się'
    },
    showPassword: false,
    persistentLogin: false,
    errorInForm: false
  }),
  methods: {
    loginFormSubmit() {
      if (this.$refs.form.validate()) {
        console.log('Form accepted ! Triggering FB function...')
        this.$store
          .dispatch('login', {
            email: this.email,
            password: this.password,
            persistentLogin: this.persistentLogin
          })
          .then(result => {
            console.log('result of promise:', result)
            if (result === true) {
              this.clearForm()
              this.errorInForm = false
              this.$router.push('/')
            } else {
              this.errorInForm = true
            }
          })
        this.clearForm()
      }
    },
    clearForm() {
      this.$refs.form.reset()
      this.persistentLogin = false
    }
  },
  computed: {
    // TODO: implement upon vuex creation
    //   isLoading() {
    //     return this.$store.state.loadingState;
    //   }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/myFormsStyles.scss';
</style>
<template>
	<div id="main">
		<div class="inner">
			<div id="image01"
			 class="image"><img :src="require('@/assets/images/zhp-logo.png')"
				 alt="Logo ZHP"></div>
			<h1 id="text02">Aktywuj konto do gry</h1>
			<v-alert :value="errorInForm"
			 type="error"
			 transition="scale-transition">
				Coś poszło nie tak .. Czy aktywujesz konto z tego samego emaila, którym zgłaszano patrol na bśp?... W razie dalszych problemów skontaktuj się z centralą gry.
			</v-alert>
			<v-form ref="form"
			 v-model="valid">
				<v-text-field v-model="name"
				 :rules="nameRules"
				 outline
				 color="success"
				 label="Nazwa patrolu"
				 light
				 required></v-text-field>
				<v-text-field v-model="email"
				 :rules="emailRules"
				 label="E-mail"
				 color="success"
				 light
				 outline
				 required></v-text-field>

				<v-text-field v-model="password"
				 :append-icon="showPassword ? 'visibility_off' : 'visibility'"
				 :rules="[passwordRules.required, passwordRules.min,
				 () => {return !repeatedPassword ? true : repeatedPassword === password || 'To hasło musi być identyczne z podanym poniżej'}]"
				 :type="showPassword ? 'text' : 'password'"
				 color="success"
				 light
				 outline
				 name="input-10-1"
				 label="Podaj hasło"
				 hint="Uwaga! Prosimy by było inne niż Twoje hasło do konta mailowego!"
				 @click:append="showPassword = !showPassword"></v-text-field>

				<v-text-field v-model="repeatedPassword"
				 :append-icon="showRepeatedPassword ? 'visibility_off' : 'visibility'"
				 :rules="[
				 repeatedPasswordRules.required, repeatedPasswordRules.min,
				 () => repeatedPassword === password || 'To hasło musi być identyczne z podanym powyżej !']"
				 :type="showRepeatedPassword ? 'text' : 'password'"
				 color="success"
				 light
				 outline
				 name="input-10-1"
				 label="Powtórz hasło"
				 hint="Tu wprowadź ponownie hasło z powyżej dla upewnienia"
				 @click:append="showRepeatedPassword = !showRepeatedPassword"></v-text-field>
				<v-btn :disabled="!valid"
				 @click="registerFormSubmit"
				 light
				 color="green">
					Aktywuj konto ! :)
				</v-btn>
				<v-btn light
				 @click="clearForm">Wyczyść</v-btn>
			</v-form>
			<small>Konto jeszcze nieaktywne?
				<nuxt-link to="/login">
					Aktywuj je tutaj!
				</nuxt-link> :)
			</small>
			<br>
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
    name: '',
    nameRules: [v => !!v || 'Pole nie może być puste'],
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
    repeatedPassword: '',
    repeatedPasswordRules: {
      required: value => !!value || 'Pole nie może być puste',
      min: v => (v && v.length >= 6) || 'Min. 6 znaków!'
    },
    showRepeatedPassword: false,
    errorInForm: false
  }),
  methods: {
    registerFormSubmit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        console.log('Form accepted ! Triggering FB function...')
        this.$store
          .dispatch('register', {
            email: this.email,
            password: this.password,
            persistentLogin: this.persistentLogin,
            patrolName: this.patrolName
          })
          .then(result => {
            console.log('result of promise', result)
            if (result === true) {
              this.clearForm()
              this.errorInForm = false
              this.$router.push('/')
            } else {
              this.errorInForm = true
            }
          })
      }
    },
    clearForm() {
      this.$refs.form.reset()
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


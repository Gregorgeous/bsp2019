<template>
	<v-layout column
	 justify-center
	 align-center>
		<v-flex xs12
		 sm8
		 md6>
			<registerForm></registerForm>
		</v-flex>
	</v-layout>
</template>

<script>
import registerForm from '@/components/registerForm'
export default {
  components: {
    registerForm
  }
}
</script>

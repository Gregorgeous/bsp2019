<template>
	<v-layout justify-center
	 align-center>
		<v-flex xs12>
			<v-card>
				<v-card-title class="headline ">BŚP 2019</v-card-title>
				<v-card-text>
					<h1 class='title'>Zaloguj się aby zacząć zabawę !</h1>
					<hr class="my-3">
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    patrolName: 'patrol1',
    score: '15',
    questsFinished: '2',
    questsLeft: '30'
  })
}
</script>

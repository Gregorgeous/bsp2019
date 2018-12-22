<template>
	<v-layout justify-center
	 align-center>
		<v-flex xs12>
			<v-card>
				<v-card-title class="headline segment">
					<h1 class='title'>Patrol:</h1>
					<span>{{patrolName}} </span>
				</v-card-title>
				<v-divider></v-divider>
				<v-card-text>
					<div class='segment mb-1'>
						<h2 class='subheading'>Metodyka:</h2>
						<!-- TODO: Add the official zhp's metodyka logos support for each level-->
						<h3>Harcerze starsi</h3>
						<v-icon>supervisor_account</v-icon>
					</div>
					<v-divider class='mb-2'></v-divider>
					<div class='segment'>
						<h2 class='subheading'>Liczba pkt.:</h2>
						<h3>{{score}}</h3>
					</div>
					<div class='segment'>
						<h2 class='subheading'>Zrobionych zadań:</h2>
						<h3>{{questsFinished}}</h3>
					</div>
					<div class='segment'>
						<h2 class='subheading'>Pozostało zadań:</h2>
						<h3>{{questsLeft}}</h3>
					</div>
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


<style lang="scss" scoped>
.v-card__title.headline.segment {
  background-color: lightseagreen;
}

.segment {
  display: flex;
  justify-content: space-between;
}
</style>

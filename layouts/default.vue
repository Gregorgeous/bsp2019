<template>
	<v-app dark>
		<v-navigation-drawer mini-variant
		 v-model="drawer"
		 permanent
		 app>
			<v-list>
				<v-list-tile v-for="(item, i) in items"
				 :to="item.to"
				 :key="i"
				 router
				 exact>
					<v-list-tile-action>
						<v-icon v-html="item.icon" />
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title v-text="item.title" />
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar fixed
		 app>
			<v-toolbar-title>
				BŚP 2019
			</v-toolbar-title>
		</v-toolbar>
		<v-content :style="{backgroundImage:imageURL }"
		 id='main-background-window'>
			<v-container>
				<nuxt />
			</v-container>
		</v-content>
		<v-navigation-drawer :right="right"
		 v-model="rightDrawer"
		 temporary
		 fixed>
			<v-list>
				<v-list-tile @click.native="right = !right">
					<v-list-tile-action>
						<v-icon light>compare_arrows</v-icon>
					</v-list-tile-action>
					<v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-footer :fixed="fixed"
		 app>
			<a class='caption'
			 href="https://www.facebook.com/ZHP.Zoliborz/">&vellip; Made by: szczep "Po drodze" i Dział IT W-wa Żoliborz &vellip;</a>
		</v-footer>
	</v-app>
</template>

<script>
export default {
  data() {
    return {
      imageURL: null,
      clipped: false,
      drawer: true,
      fixed: false,
      mini: true,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    randomBackgroundImage() {
      let num = Math.floor(Math.random() * 10) + 1
      let backgroundGradient =
        'linear-gradient(45deg, rgba(201, 101, 113, 0.831) 0%, rgba(93, 173, 207, 0.51) 81%),'
      let randomImageURL =
        'url(' + require(`@/assets/images/background-${num}.jpg`) + ')'
      this.imageURL = backgroundGradient + randomImageURL
    }
  },
  computed: {},
  mounted() {
    this.randomBackgroundImage()
  }
}
</script>

<style lang="scss" scoped>
#main-background-window {
  background-size: cover;
  background-image: linear-gradient(
    45deg,
    rgba(201, 101, 113, 0.831) 0%,
    rgba(93, 173, 207, 0.51) 81%
  );
  background-position: center;
}

.v-footer {
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    color: white;
    transition: color 0.2s ease-out;
    &:hover {
      color: gold;
      text-decoration: underline;
    }
  }
}
</style>


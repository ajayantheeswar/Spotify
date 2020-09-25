<template>
	<div class=".min-h-screen relative">
		<NavBar position="fixed"></NavBar>
		<div class="block bg-blue-700 home-ad relative">
			<div class="tagline">
				<h1>Listening is everything</h1>
				<h4 class="text-spgreen1 text-xl font-semibold mb-4">
					Millions of songs and podcasts. No credit card needed.
				</h4>
				<button
					class="bg-spgreen1 text-blue-700 text-xl font-semibold p-2 pr-10 pl-10 focus:outline-none rounded-r-full rounded-l-full mt-5"
				>
					Get Spotify Free
				</button>
			</div>
		</div>
		<Footer></Footer>
	</div>
	
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from '@/views/Navbar/Navbar.vue';
import Footer from '@/components/shared/Footer/Footer.vue'

export default Vue.extend({
	components : {
		NavBar,
		Footer
	}
});
</script>

<style lang="postcss" scoped>
.home-ad {
	background-image: url("../../assets/bursts.svg");
	background-size: 400%;
	background-position: 43% 0%;
	height: 100vh;
	background-color: #2d46b9;
	overflow: hidden;
}

.tagline {
	position: absolute;
	top: 21%;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.tagline h1 {
	@apply text-spgreen1 pt-20 font-bold mb-4;
	font-size: 2rem;
}

.tagline button {
	font-size: 1rem;
}

@media (max-width: 768px) {
	.tagline {
		width: 300px;
	}
}

@media (min-width: 600px) {
	.home-ad {
		background-size: 168%;
	}
}

@media (min-width: 1024px) {
	.tagline {
		top: 15%;
		text-indent: -14rem;
		width: 700px;
	}
	.tagline h1 {
		font-size: 148px;
		line-height: 150px;
	}
	.tagline h4 {
		text-indent: 0;
		margin-top: 1.4rem;
	}
}
</style>

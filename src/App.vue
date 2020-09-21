<template>
	<div id="app">
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

import Footer from "@/components/shared/Footer/Footer.vue";

export default Vue.extend({
	components: {
		Footer
	},
});
</script>

<style></style>

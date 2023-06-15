<template>
	<v-app>
		<MainHeader></MainHeader>

		<v-main>
			<div class="main-container">
				<RouterView />
			</div>
		</v-main>

		<MainNavBar />

		<MainFooter></MainFooter>
	</v-app>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNavBar from "./component/MainNavBar.vue";
import MainHeader from "./component/header/MainHeader.vue";
import MainFooter from "./component/MainFooter.vue";
</script>

<style scoped>
.main-container {
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 50px;
	padding-bottom: 100px;
	box-sizing: border-box;
}
</style>

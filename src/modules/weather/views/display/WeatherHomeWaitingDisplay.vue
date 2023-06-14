<template>
	<transition-group name="wave" tag="span" class="wave-container">
		<span
			v-for="(letter, index) in letters"
			:key="index"
			:style="{ animationDelay: getAnimationDelay(index) }"
			class="wave-letter"
		>
			{{ letter }}
		</span>
	</transition-group>
</template>

<script setup lang="ts">
const sentence: string = "Please wait a moment ...";
let letters: string[];
letters = sentence.split("");

function getAnimationDelay(index: number): string {
	const animationDelay: number = (index + 1) * 0.1;
	return `${animationDelay}s`;
}
</script>

<style>
.wave-letter {
	animation: wave-animation 1s linear infinite;
	display: inline-block;
}

@keyframes wave-animation {
	0% {
		transform: translateY(0);
	}
	25% {
		transform: translateY(50%);
	}
	50% {
		transform: translateY(0);
	}
	75% {
		transform: translateY(-50%);
	}
	100% {
		transform: translateY(0);
	}
}
</style>

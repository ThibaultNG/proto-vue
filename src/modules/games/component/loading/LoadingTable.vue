<template>
	<v-container style="position: relative">
		<v-row class="v-row-wrap align-center">
			<v-col
				v-for="n in 20"
				:key="n"
				cols="12"
				lg="3"
				md="4"
				sm="6"
				xs="12"
				class="d- align-center"
			>
				<v-card
					class="bg-grey d-flex justify-center align-center"
					style="height: 180px; width: 250px"
				>
					<v-progress-circular
						indeterminate
						:size="44"
						class="justify-center align-center"
					></v-progress-circular>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

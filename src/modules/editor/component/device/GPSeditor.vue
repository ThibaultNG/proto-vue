<template>
	<v-card class="bg-grey-lighten-4">
		<v-card-title class="bg-primary-darken-3">GPS</v-card-title>
		<v-container class="p-10">
			<v-select
				label="Com port"
				:items="['COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6']"
			></v-select>
			<v-text-field label="baudrate" placeholder="4800" />
			<v-container>
				<v-row no-gutters>
					<v-col v-for="chan in channels" :key="chan.id" cols="12" sm="6">
						<v-card class="ma-10">
							<v-card-title>{{ chan.description }}</v-card-title>
							<v-card-subtitle>Unit : {{ chan.unitLabel }}</v-card-subtitle>
							<v-card-text>id :{{ chan.id }}</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-container>
		<v-card-actions>
			<v-btn text="Remove device" class="bg-error" @click="emit('click')"/>
		</v-card-actions>
	</v-card>
</template>

<script setup lang="ts">
const channels = [
	{
		id: "6f1e4561-6055-4072-8600-d9c38c1929ae",
		name: "latitude",
		description: "Latitude",
		unitLabel: "°"
	},
	{
		id: "7ed948cf-1ac6-42c0-9b48-d82575993237",
		name: "longitude",
		description: "Longitude",
		unitLabel: "°"
	},
	{
		id: "a6f22720-fb7c-4f31-b114-a9ad3389867a",
		name: "satellites",
		description: "Satellites",
		unitLabel: "sat"
	},
	{
		id: "1553afd5-3713-4e84-80db-b063014dc2e0",
		name: "X(m)",
		description: "X metrique",
		unitLabel: "m"
	},
	{
		id: "1f422c76-5dfb-4526-bfe4-ccc065cb2d14",
		name: "Y(m)",
		description: "Y metrique",
		unitLabel: "m"
	}
];

const emit = defineEmits<{
	(e: "click"): void;
}>();
</script>

<template>
	<v-btn color="primary">
		Ajouter un composant

		<v-menu activator="parent">
			<v-list>
				<v-list-item
					v-for="(item, index) in items"
					:key="index"
					:value="index"
					@click="emit('click', item.title)"
				>
					<template #append>
						<v-icon>mdi-plus-circle-outline</v-icon>
					</template>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</v-btn>
</template>

<script setup lang="ts">
const items = [{ title: "GPS" }, { title: "LIDAR" }, { title: "LB124" }, { title: "NAI" }];

const emit = defineEmits<{
	(e: "click", title: string): void;
}>();
</script>

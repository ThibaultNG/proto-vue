<template>
	<ul>
		<template v-if="meteoStore.data != undefined && meteoStore.data != null">
			<span v-for="(value, key, index) in meteoStore.data">
				<template v-if="typeof value === 'object'">
					<br />
					<span v-for="(valueBis, indexBis, keyBis) in value">
						<MeteoDataValueWithIcon
							v-if="String(indexBis) === 'time'"
							icon="mdi-clock-time-one-outline"
							:value="valueBis"
							unit=""
						></MeteoDataValueWithIcon>

						<MeteoDataValueWithIcon
							v-if="String(indexBis) === 'temperature'"
							icon="mdi-weather-sunny"
							:value="valueBis"
							unit="°C"
						></MeteoDataValueWithIcon>

						<MeteoDataValueWithIcon
							v-else-if="String(indexBis) === 'windspeed'"
							icon="mdi-weather-windy"
							:value="valueBis"
							unit="km/h"
						></MeteoDataValueWithIcon>

						<span v-else>
							<!-- [{{ index }}.{{ indexBis }}]{{ keyBis }}: {{ valueBis }} -->
						</span>
						<br />
					</span>
				</template>
				<template v-else>
					<!-- [{{ index }}]{{ key }}: {{ value }}  
                    <br />
                    -->
				</template>
			</span>
			<br />
		</template>
	</ul>
</template>

<script lang="ts" setup>
import MeteoDataValueWithIcon from "./MeteoDataValueWithIcon.vue";
import { useMeteoStore } from "../store/meteoStore";

const meteoStore = useMeteoStore();
</script>

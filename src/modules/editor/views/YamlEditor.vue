<template>
	<!-- Warning for mobile users -->
	<v-card class="d-md-none" color="error">
		<v-card-title class="text-wrap">This feature is not available on your device</v-card-title>
		<v-card-text>
			You need a keyboard to insert new lines. You can only use this feature if you can copy
			and paste the text
		</v-card-text>
	</v-card>

	<v-expansion-panels variant="popout">
		<v-expansion-panel>
			<v-expansion-panel-title color="primary"> Save </v-expansion-panel-title>
			<v-expansion-panel-text>
				<v-text-field
					v-model="saveFileName"
					clearable
					label="File name"
					:rules="fileNameRules"
				></v-text-field>
				<v-btn
					prepend-icon="mdi-content-save"
					color="primary"
					text="Save"
					class="mr-5"
					@click="saveYaml"
				/>
			</v-expansion-panel-text>
		</v-expansion-panel>
		<v-expansion-panel>
			<v-expansion-panel-title color="primary-lighten-3">
				Load from server</v-expansion-panel-title
			>
			<v-expansion-panel-text>
				<v-select v-model="selectedFile" :items="fileList" label="File" />
				<v-btn
					color="primary"
					prepend-icon="mdi-cloud-download-outline"
					text="Get from server"
					@click="getConfigFromServer"
				/>
			</v-expansion-panel-text>
		</v-expansion-panel>
		<v-expansion-panel>
			<v-expansion-panel-title color="primary-lighten-3">
				Upload file
			</v-expansion-panel-title>
			<v-expansion-panel-text>
				<FileInput @input="setContent" />
			</v-expansion-panel-text>
		</v-expansion-panel>
	</v-expansion-panels>

	<pre>
		<code ref="codeElement" class="language-yaml" contenteditable @keydown="edit">{{ yamlCode }}</code>
	</pre>

	<v-snackbar v-model="showConnectionError" color="error" :timeout="10000">
		Could not connect to server
	</v-snackbar>

	<v-snackbar v-model="showEnterWarning" color="warning" :timeout="2000">
		Use SHIFT+ENTER instead of ENTER
	</v-snackbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHighlight } from "../composables/highlight";
import FileInput from "../component/FileInput.vue";
import * as editorService from "../service/editorService";

const codeElement = ref<HTMLElement>();
const yamlCode = ref<string>("# Config starts here\n\n# End of file");
const showEnterWarning = ref<boolean>(false);
const showConnectionError = ref<boolean>(false);
const fileList = ref<string[]>([]);
const selectedFile = ref<string>();
const saveFileName = ref<string>("");

const fileNameRules = [
	(input: string) => {
		if (input.substring(input.length - 5) != ".yaml") {
			console.log(input.substring(input.length - 5));

			return "File names must end with '.yaml'";
		}
		return true;
	}
];

const { highlight, highlightOnInput } = useHighlight(codeElement, 1000);

function refreshFileList() {
	editorService.getFileList().then((list) => (fileList.value = list));
}

refreshFileList();

function saveYaml() {
	yamlCode.value = codeElement.value!.innerText;
	// The texts turns back to normal when a new value is assigned, that is why we highlight again
	highlight();
	editorService.saveConfig(saveFileName.value, yamlCode.value).then(() => {
		setTimeout(() => {}, 1000);
		refreshFileList();
	});
}

function edit(event: KeyboardEvent) {
	// Shows a warning to the user when he tries to add a new line with Enter instead of Shift+Enter
	if (event.key === "Enter" && !event.shiftKey) {
		event.preventDefault();
		showEnterWarning.value = true;
		return;
	}

	highlightOnInput();
}

function setContent(content: string) {
	yamlCode.value = content;
	highlight();
}

function getConfigFromServer(): void {
	editorService
		.getFile(selectedFile.value!)
		.then((data) => {
			setContent(data);
			saveFileName.value = selectedFile.value!;
		})
		.catch((error) => {
			console.error(error);
			showConnectionError.value = true;
		});
}
</script>

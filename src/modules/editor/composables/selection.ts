import { onMounted, ref, toValue, type Ref, onBeforeUnmount } from "vue";
import Cursor from "../models/cursor";

export function useSelection(element: HTMLElement | Ref<HTMLElement | undefined>) {
	const cursorPosition = ref<number>(0);

	onMounted(() => {
		toValue(element)!.addEventListener("click", getCursorPosition);
		toValue(element)!.addEventListener("keydown", getCursorPosition);
	});

	onBeforeUnmount(() => {
		toValue(element)!.removeEventListener("click", getCursorPosition);
		toValue(element)!.removeEventListener("keydown", getCursorPosition);
	});

	function getCursorPosition(): void {
		const selection: Selection = document.getSelection()!;
		selection.modify("extend", "backward", "documentboundary");
		const position: number = selection.toString().length;
		if (selection.anchorNode != undefined) selection.collapseToEnd();

		cursorPosition.value = position;
	}

	function resetCursorPosition() : void{
		// let offset1 = Cursor.getCurrentCursorPosition(codeElement.value!);
		const offset: number = cursorPosition.value + 1;

		Cursor.setCurrentCursorPosition(offset, toValue(element)!);
		toValue(element)!.focus();
	}

	return { resetCursorPosition };
}

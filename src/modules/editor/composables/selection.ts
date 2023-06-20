import { onMounted, ref, toValue, type Ref, onBeforeUnmount } from "vue";

/* Records the position of the selection cursor on the provided HTMLElement
and returns a fonction to set the selection cursor back to the last known position */
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

	function resetCursorPosition(): void {
		const offset: number = cursorPosition.value + 1;

		setCurrentCursorPosition(offset, toValue(element)!);
		toValue(element)!.focus();
	}

	function setCurrentCursorPosition(charCount: number, element: HTMLElement) {
		if (charCount >= 0) {
			const selection: Selection = window.getSelection()!;

			const range = createRange(element, { count: charCount });

			if (range) {
				range.collapse(false);
				selection.removeAllRanges();
				selection.addRange(range);
			}
		}
	}

	function createRange(node: Node, charCount: Count, range?: Range | undefined): Range {
		if (!range) {
			range = document.createRange();
			range.selectNode(node);
			range.setStart(node, 0);
		}

		if (charCount.count === 0) {
			range.setEnd(node, charCount.count);
		} else if (node && charCount.count > 0) {
			if (node.nodeType === Node.TEXT_NODE) {
				if (node.textContent!.length < charCount.count) {
					charCount.count -= node.textContent!.length;
				} else {
					range.setEnd(node, charCount.count);
					charCount.count = 0;
				}
			} else {
				for (let childIndex = 0; childIndex < node.childNodes.length; childIndex++) {
					range = createRange(node.childNodes[childIndex], charCount, range);

					if (charCount.count === 0) {
						break;
					}
				}
			}
		}
		return range;
	}

	return { resetCursorPosition };
}

interface Count {
	count: number;
}

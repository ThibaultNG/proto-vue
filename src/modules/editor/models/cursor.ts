// Credit to Liam (Stack Overflow)
// https://stackoverflow.com/a/41034697/3480193
export default class Cursor {
	static getCurrentCursorPosition(parentElement: HTMLElement) {
		const selection = window.getSelection();
		let charCount = -1;
		let node;

		if (selection?.focusNode) {
			if (Cursor._isChildOf(selection.focusNode, parentElement)) {
				node = selection.focusNode;
				charCount = selection.focusOffset;

				while (node) {
					if (node === parentElement) {
						break;
					}

					if (node.previousSibling) {
						node = node.previousSibling;
						charCount += node.textContent?.length ? node.textContent.length : 0;
					} else {
						node = node.parentNode;
						if (node === null) {
							break;
						}
					}
				}
			}
		}

		return charCount;
	}

	static setCurrentCursorPosition(charCount: number, element: HTMLElement) {
		if (charCount >= 0) {
			const selection: Selection = window.getSelection()!;

			const range = Cursor._createRange(element, { count: charCount });

			if (range) {
				range.collapse(false);
				selection.removeAllRanges();
				selection.addRange(range);
			}
		}
	}

	static _createRange(node: Node, charCount: Count, range?: Range | undefined): Range {
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
				for (let lp = 0; lp < node.childNodes.length; lp++) {
					range = Cursor._createRange(node.childNodes[lp], charCount, range);

					if (charCount.count === 0) {
						break;
					}
				}
			}
		}
		return range;
	}

	static _isChildOf(node: Node, parentElement: HTMLElement) {
		while (node !== null) {
			if (node === parentElement) {
				return true;
			}
			node = node.parentNode!;
		}

		return false;
	}
}

interface Count {
	count: number;
}

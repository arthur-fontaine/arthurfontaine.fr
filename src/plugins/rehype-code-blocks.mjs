const CLAMP_FROM_LINES = 24;

function textOf(node) {
	if (node.type === "text") return node.value;
	if (!node.children) return "";
	return node.children.map(textOf).join("");
}

function element(tagName, properties, children = []) {
	return { type: "element", tagName, properties, children };
}

function wrap(pre) {
	const lines = textOf(pre).replace(/\n$/, "").split("\n").length;
	const long = lines >= CLAMP_FROM_LINES;

	const children = [
		element(
			"button",
			{
				type: "button",
				className: ["code-copy"],
				"data-copy": "",
				"aria-label": "Copy code",
			},
			[{ type: "text", value: "Copy" }],
		),
		pre,
	];

	if (long) {
		children.push(
			element(
				"button",
				{
					type: "button",
					className: ["code-expand"],
					"data-expand": "",
					"aria-expanded": "false",
				},
				[{ type: "text", value: `Show all ${lines} lines` }],
			),
		);
	}

	return element(
		"div",
		{
			className: ["code-block"],
			"data-lines": lines,
			...(long ? { "data-clamped": "true" } : {}),
		},
		children,
	);
}

export function rehypeCodeBlocks() {
	return (tree) => {
		const visit = (node) => {
			if (!node.children) return;
			node.children = node.children.map((child) => {
				if (
					child.type === "element" &&
					child.tagName === "pre" &&
					child.children?.some(
						(c) => c.type === "element" && c.tagName === "code",
					)
				) {
					return wrap(child);
				}
				visit(child);
				return child;
			});
		};
		visit(tree);
	};
}

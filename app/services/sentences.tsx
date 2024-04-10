const messages = [
	{ sentenceId: 1, text: "The quick brown fox jumps over the lazy dog" },
	{ sentenceId: 2, text: "Waltz, bad nymph, for quick jigs vex." },
	{ sentenceId: 3, text: "Glib jocks quiz nymph to vex dwarf." },
	{ sentenceId: 4, text: "Sphinx of black quartz, judge my vow." },
	{ sentenceId: 5, text: "How quickly daft jumping zebras vex!" },
	{ sentenceId: 6, text: "The five boxing wizards jump quickly." },
	{ sentenceId: 7, text: "Jackdaws love my big sphinx of quartz." },
	{ sentenceId: 8, text: "Pack my box with five dozen liquor jugs." },
];

export async function beginPractice() {
	return messages[0];
}

export async function getSentenceById(sentenceId: number) {
	return messages.find((message) => message.sentenceId === sentenceId);
}

export async function getNextSentence(sentenceId: number) {
	const index = messages.findIndex(
		(message) => message.sentenceId === sentenceId,
	);
	if (index === -1 || index + 1 === messages.length) {
		return null;
	}
	return messages[index + 1];
}

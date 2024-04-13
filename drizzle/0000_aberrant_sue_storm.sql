CREATE TABLE `sentences` (
	`id` text,
	`text` text NOT NULL,
	`transcription` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `sentences_id_unique` ON `sentences` (`id`);
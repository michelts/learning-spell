CREATE TABLE `sentences` (
	`id` text PRIMARY KEY NOT NULL,
	`learningSession` text,
	`text` text NOT NULL,
	`transcription` text
);
--> statement-breakpoint
CREATE INDEX `learningSession_idx` ON `sentences` (`learningSession`);
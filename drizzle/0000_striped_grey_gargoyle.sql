CREATE TABLE `leaderboard` (
	`user_id` varchar(255) NOT NULL,
	`projects_completed` int,
	`total_score` int,
	CONSTRAINT `leaderboard_user_id` PRIMARY KEY(`user_id`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`project_id` int AUTO_INCREMENT NOT NULL,
	`project_name` varchar(255),
	`description` text,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `projects_project_id` PRIMARY KEY(`project_id`)
);
--> statement-breakpoint
CREATE TABLE `submissions` (
	`submission_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`project_id` int,
	`score` int,
	`submission_date` timestamp,
	`submission_link` varchar(255),
	`feedback` text,
	CONSTRAINT `submissions_submission_id` PRIMARY KEY(`submission_id`)
);
--> statement-breakpoint
ALTER TABLE `submissions` ADD CONSTRAINT `submissions_project_id_projects_project_id_fk` FOREIGN KEY (`project_id`) REFERENCES `projects`(`project_id`) ON DELETE no action ON UPDATE no action;
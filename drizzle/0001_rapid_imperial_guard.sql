CREATE TABLE `joined_project` (
	`user_id` varchar(255),
	`project_id` int
);
--> statement-breakpoint
ALTER TABLE `submissions` ADD `is_completed` boolean;--> statement-breakpoint
ALTER TABLE `joined_project` ADD CONSTRAINT `joined_project_project_id_projects_project_id_fk` FOREIGN KEY (`project_id`) REFERENCES `projects`(`project_id`) ON DELETE no action ON UPDATE no action;
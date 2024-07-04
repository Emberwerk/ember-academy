import { sql } from "drizzle-orm";
import { int, mysqlTable, serial, timestamp, varchar, text, boolean } from "drizzle-orm/mysql-core";

export const leaderboard = mysqlTable("leaderboard", {
    user_id: varchar('user_id', {length: 255}).primaryKey(), // primary key since there must be only one scores information per user.
    projects_completed: int('projects_completed'), // update this thing here when someone completed 
    total_score: int('total_score') // summed from all submissions score from that specific user
})

export type Leaderboard = typeof leaderboard.$inferSelect
export type NewLeaderboard = typeof leaderboard.$inferInsert

export const projects = mysqlTable("projects", {
    id: int('project_id').primaryKey().autoincrement(),
    project_name: varchar('project_name', { length: 255 }),
    description: text('description'),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow().$onUpdate(() => sql`CURRENT_TIMESTAMP()`)
})

export type Projects = typeof projects.$inferSelect
export type NewProjects = typeof projects.$inferInsert

export const submissions = mysqlTable('submissions', {
    id: serial('submission_id').primaryKey(),
    user_id: varchar('user_id', {length: 255}),
    project_id: int('project_id').references(() => projects.id),
    score: int('score'),
    completed: boolean('is_completed'),
    submission_date: timestamp('submission_date'),
    submission_link: varchar('submission_link', {length: 255}),
    feedback: text('feedback')
}) 

export type Submissions = typeof submissions.$inferSelect
export type NewSubmissions = typeof submissions.$inferInsert

export const joinedProject = mysqlTable("joined_project", {
    user_id: varchar('user_id', { length: 255 }), // user with the project they joined, multiple times means more than 1 projects
    project_id: int('project_id').references(() => projects.id) 
})

export type JoinedProject = typeof joinedProject.$inferSelect
export type NewJoinedProject = typeof joinedProject.$inferInsert

// UPDATE leaderboard ON SERVER SIDE BASED ON SUBMISSIONS, DO NOT LEAK INDIVIDUAL PROJECT SCORES TO EVERYONE
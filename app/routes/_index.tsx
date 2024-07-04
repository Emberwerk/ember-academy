import { getAuth } from "@clerk/remix/ssr.server";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction, json, type MetaFunction } from "@remix-run/node";
import { and, eq } from "drizzle-orm";
import db from "~/.server/db";
import { joinedProject, submissions } from "~/.server/schema";
import Leaderboard from "~/lib/leaderboard";
import Progress from "~/lib/progress";
import ProjectGrid from "~/lib/project-grid";
import { TableRow } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Ember Academy - Learn by Doing" },
    { name: "description", content: "Ember Academy is a code teaching platform diguised as an interactive game, where users can engage in small projects and friendly competition. It's not about who finishes the projects the fastest or completes the most; it's about the learning journey and the quality of the work." },
  ];
};

export const loader: LoaderFunction = async (args) => {
  const {userId} = await getAuth(args)
  if (!userId) {
    return json({ completed_projects_count: -1, joined_projects_count: -1 })
  }

  const joined_projects = await db.select().from(joinedProject).where(eq(joinedProject.user_id, userId)) // get all joined projects for the authed user
  const completed_projects = await db.select().from(submissions).where(and(eq(submissions.user_id, userId), eq(submissions.completed, true)))
  // fetch from database

  const completed_projects_count = completed_projects.length
  const joined_projects_count = joined_projects.length

  console.log(completed_projects.length)
  console.log(joined_projects.length)

  return json({ completed_projects_count, joined_projects_count })
}

export default function Index() {
  // mock leaderboard data, fetch from database in prod
  const data: TableRow[] = [{
    rank: 1,
    user: 'Chanakan5591',
    projects_completed: 5,
    total_score: 1000
  }]
  
  const serverData = useLoaderData<typeof loader>();

  return (
    <main className='flex flex-col gap-8 py-24 px-24 max-w-5xl mx-auto'>
      <section id='progress' className='transition-transform duration-500'>
        <h2 className='text-primary font-semibold text-2xl'>My Progress</h2>
        <Progress completed_projects={serverData.completed_projects_count} total_projects={serverData.joined_projects_count} />
      </section>

      <section id='projects' className='transition-transform duration-500'>
        <h2 className='text-primary font-semibold text-2xl mb-4'>Featured Projects</h2>
        <div id='project-grid' className='grid grid-cols-2 gap-5'>
          <ProjectGrid projectName="Flickering Campfire" projectDescription="Crate a simple CSS Animation of a flickering Campfire" level="beginner" tags={["CSS", "HTML", "Web"]} />
          <ProjectGrid projectName="Resource Counter" projectDescription="Build a JavaScript-powered counter for tracking game resources." level="intermediate" tags={["HTML", "JS"]} />
        </div>
      </section>

      <section id='leaderboard'>
        <h2 className='text-primary font-semibold text-2xl mb-4'>Leaderboard</h2>
        <Leaderboard data={data} />
      </section>
    </main>
  );
}

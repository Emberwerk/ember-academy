import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, LoaderFunctionArgs, redirect } from "@remix-run/node";
import db from "~/.server/db";
import { leaderboard } from "~/.server/schema";

export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
  const { userId } = await getAuth(args);
  if (!userId) return redirect("/");

  db.insert(leaderboard).values({
    user_id: userId,
    projects_completed: 0,
    total_score: 0,
  });
  // create row if not exist in leaderboard to 0
};

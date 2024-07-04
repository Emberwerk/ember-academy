import { connect } from "@tidbcloud/serverless";
import { drizzle } from "drizzle-orm/tidb-serverless";

const client = connect({
    url: process.env.DB_URL
})

export default drizzle(client)
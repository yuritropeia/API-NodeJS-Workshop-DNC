import postgres from "postgres";
import 'dotenv/config';

const sql = postgres(process.env.CONNECTION_STRING);

export default sql;
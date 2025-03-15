import dotenv from "dotenv"
// import { Path } from "mongoose"
import path from "path"

dotenv.config({path: path.join(process.cwd(),".env")})

export default{
    port:process.env.PORT,
    database_url:process.env.DATABASE_URL
}
import * as dotenv from "dotenv"

dotenv.config()

const PORT: string = process.env.PORT || "8000"

export {PORT}

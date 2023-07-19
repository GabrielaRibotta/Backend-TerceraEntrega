import dotenv from 'dotenv'

dotenv.config()

export default {
    mongo_uri: process.env.URL_MONGO,
    port: process.env.PORT,
    salt: process.env.SALT,
    clientIdGH: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET
}
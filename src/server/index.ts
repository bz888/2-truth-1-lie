import express, { Request, Response, Express } from 'express'
// import router from './route'
// import DBConnect from './dbConfigs'
// import { RequestHandler } from 'express-serve-static-core'
import path from 'path'
import { router } from './routes/text'
import dotenv from 'dotenv'

// call express
const server: Express = express() // define our app using express

// configure app to use bodyParser for
// Getting data from body of requests
// server.use(express.urlencoded({ extended: true }) as RequestHandler)
server.use(express.json())

server.use('/api/v1', router)

// connect to database. right now it's just working with mongodb
// but in near future it will be configured for other databases as well
// DBConnect.dbConnection()

// Send index.html on root request
server.use(express.static(path.join(__dirname, '../../public')))
server.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
  // res.send('Hello')
})

// CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// START THE SERVER
// =============================================================================
const PORT: number = Number(process.env.PORT) || 8000 // set our port

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = dotenv.config()
  if (envConfig.error) throw envConfig.error
}

server.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`)
})

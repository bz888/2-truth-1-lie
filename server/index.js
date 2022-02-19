const server = require('./server')

const PORT = process.env.PORT || 8000

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = require('dotenv').config()
  if (envConfig.error) throw envConfig.error
}

server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})

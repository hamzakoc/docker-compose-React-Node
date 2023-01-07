const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: Hello Wind"
    },
    {
      "id":"2",
      "title":"Game Review: All Diamond"
    },
    {
      "id":"3",
      "title":"Show Review: Borderland"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})
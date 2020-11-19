const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000
const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/test'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log("connected to mongo");
})

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`App running on port: with mongo ${port}`)
})
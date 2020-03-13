//Express App
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
console.log(process.env.API_TOKEN)

const app = express()

app.use(morgan('dev'))

app.use(function validateBearerToken(req, res, next) {
    console.log('validate bearer token middleware')
    debugger
    next()
})

const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, `Normal`, `Poison`, `Psychic`, `Rock`, `Steel`, `Water`]

function handleGetTypes(req, res) {
    res.json(validTypes);
}

function handleGetPokemon(req, res) {
    res.send('Hello, Pokemon!')
}

app.get('/types', handleGetTypes)
app.get('/pokemon', handleGetPokemon)

const PORT = 8000

app.listen(PORT,  () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
});
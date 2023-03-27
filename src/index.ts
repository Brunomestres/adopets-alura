import express from 'express'
import './config/db'
const PORT = 3335
const app = express()




app.listen(PORT, () => console.log(`Lintening on port ${PORT}`))
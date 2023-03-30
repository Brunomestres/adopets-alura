import express from 'express'
import './config/db'
import { router } from './routes'
const PORT = 3335
const app = express()


app.use(express.json())
app.use('/v1', router)

app.listen(PORT, () => console.log(`Lintening on port ${PORT}`))
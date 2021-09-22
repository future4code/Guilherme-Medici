import express, {Express} from 'express'
import cors from 'cors'
import {AddressInfo} from "net"
import { countries } from './data'
import { country } from './types'

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is runing in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

app.get('/countries', (req: Request, res: Response) => {
    res.status(200).send(countries)
})


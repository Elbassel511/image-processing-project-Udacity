import express from 'express'
import { promises as fs } from 'fs'
import path from 'path'
const routes = express.Router()

routes.get('/', async (req: express.Request, res: express.Response) => {
    const files: string[] = await fs.readdir(
        path.resolve(__dirname, '../../../assests/full'),
    )
    try {
        res.send({ list: files })
        return
    } catch {
        res.sendStatus(500).send('error in reading files')
    }
})

export default routes

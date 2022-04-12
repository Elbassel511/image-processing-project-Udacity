import { promises as fsPromises } from 'fs'
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import apicache from 'apicache'
import resizeImage from '../../utilites/Image_processing/image-processing'

const routes = express.Router()

const cache = apicache.middleware
const middleware = [cache('5 minutes'), morgan('tiny')]

routes.get(
    '/',
    middleware,
    async (req: express.Request, res: express.Response) => {
        const filename = req.query.filename ? '' + req.query.filename : ''
        const width = Number(req.query.width) ? Number(req.query.width) : null
        const height = Number(req.query.height)
            ? Number(req.query.height)
            : null

        // checking for bad req.
        if (!filename || !width || !height) {
            return res.status(400).send('bad request')
        }

        // make a thumb directory for the output
        fsPromises.mkdir('assests/thumbs', { recursive: true })

        const inputPath = path.resolve(
            __dirname,
            `../../../assests/full/${filename}.jpg`,
        )
        const outputPath = path.resolve(
            __dirname,
            `../../../assests/thumbs/${filename}-${width}x${height}.jpg`,
        )

        // check if the file was already created
        const isFileCreatedBefore: Boolean = await fsPromises
            .stat(outputPath)
            .then(() => true)
            .catch(() => false)

        // send the created file if exist
        if (isFileCreatedBefore) {
            fsPromises
                .readFile(outputPath)
                .then((file: Buffer) =>
                    res.status(200).contentType('jpg').send(file),
                )
            return
        }

        // resize image then save it and send res. with jpg file
        resizeImage({ width, height, inputPath })
            .then((data) => {
                // write ouput file
                fsPromises.writeFile(outputPath, data)
                // respond with a jpg output file and status 200
                return res.status(200).contentType('jpg').send(data)
            })
            .catch((err: Error) => {
                console.log(`Error at sharp processing:${err}`)
                err.message === 'Input file is missing'
                    ? res.status(404).send(err.message)
                    : res.status(500).send(err.message)
            })
    },
)

export default routes

import express from 'express'
import path from 'path'

const routes = express.Router()

routes.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../public/imageList.html'))
})

export default routes
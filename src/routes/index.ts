import express from 'express'
import api from './api/api'
import listOfImages from './imageList/listOfImages'
import imageList from './imageList/imageList'

const routes = express.Router()

routes.use('/api', api)
routes.use('/imageList', imageList)
routes.use('/listOfImages', listOfImages)

export default routes

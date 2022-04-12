import express from 'express'
import routes from './routes/index'
import path from 'path'

const app = express()
const port = 3000
app.use(express.static(path.resolve(__dirname, '../public')))

app.listen(port, () => console.log(`server is running on port : ${port}`))

app.get('/', (req: express.Request, res: express.Response): void => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'))
})
app.get('/api-gui', (req: express.Request, res: express.Response): void => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/api.html'))
})

app.get('/api', routes)
app.get('/imageList', routes)
app.get('/listOfImages', routes)

export default app

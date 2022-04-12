import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('root end point test', () => {
    it('gets root end point', async () => {
        const response = await request.get('/')
        expect(response.type).toBe('text/html')
    })
})
describe('tests for api end points', () => {
    it('gets bad req on missing filename', async () => {
        const response = await request.get('/api?width=100&height=100')
        expect(response.status).toBe(400)
    })
    it('gets error if file doesnot exist', async () => {
        const response = await request.get(
            '/api?filename=not&width=100&height=100',
        )
        expect(response.status).toEqual(404)
    })
    it('test for good req', async () => {
        const response = await request.get(
            '/api?filename=image1&width=1000&height=1000',
        )
        expect(response.status).toEqual(200)
    })
})

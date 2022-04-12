import resizeImage from '../utilites/Image_processing/image-processing'
import path from 'path'
const inputPath = path.resolve(__dirname, `../../../assests/full/image1.jpg`)

const width: number = 1000
const height: number = 1000

it('resize image and send a promise with buffer', async () => {
    expect(resizeImage({ width, height, inputPath })).toBeResolved
})

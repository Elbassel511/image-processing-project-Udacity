import sharp from 'sharp'

interface Query {
    width: number
    height: number
    inputPath: string
}

function resizeImage({ width, height, inputPath }: Query): Promise<Buffer> {
    return sharp(inputPath).resize(width, height).toBuffer()
}

export default resizeImage
export { Query }

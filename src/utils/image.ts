import probe from "probe-image-size"
import { readFileSync } from "fs"
import { join } from "path"

export async function getImageData(imagePath: string) {
	// https://www.npmjs.com/package/probe-image-size
	let imageData
	if (imagePath.startsWith('http')) {
		imageData = await probe(imagePath)
	} else {
		const file = readFileSync(join('public', imagePath))
		imageData = probe.sync(file)
	}

	if (!imageData?.width || !imageData.height) {
		throw new Error('Failed to probe image data')
	}
	return imageData
}

// TODO - import { getImageSize } from 'next/dist/server/image-optimizer'

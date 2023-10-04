/** @type { import('next').NextConfig } */

const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
				hostname: 'source.unsplash.com',
				port: ''
      }
    ]
  }
}

export default config

/** @type { import('next').NextConfig } */

const config = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true
			}
		]
	},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
				hostname: 'source.unsplash.com',
				port: ''
      }
    ]
  },
	output: 'standalone'
}

export default config

/** @type { import('next').NextConfig } */

const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
				hostname: 'source.unsplash.com',
				port: ''
      },
			{
        protocol: 'https',
				hostname: 'lxttujrgpghhxzinwpir.supabase.co',
				port: ''
      },
			{
        protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: ''
      }
    ]
  },
	experimental: {
		serverActions: true
	}
}

export default config

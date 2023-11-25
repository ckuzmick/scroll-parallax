/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
                pathname: '/nflranked-theringer-com-cms/public/media/ringernflranked/players/BrockPurdy-updated-1695670083966-large.png'
            }
        ]
    }
}

module.exports = nextConfig

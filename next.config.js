/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'strapi.3v7i.com',
              port: '',
            //   pathname: '/my-bucket/**',
            },
          ],
    }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

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

export default withPlaiceholder(nextConfig);

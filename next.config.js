/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['avatars.githubusercontent.com', 'avatar.vercel.sh']
    }

}

module.exports = nextConfig

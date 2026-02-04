/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/trash',
                destination: '/service/trash',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

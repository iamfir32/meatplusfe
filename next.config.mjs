/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost',"www.google.com","https://firebasestorage.googleapis.com",'firebasestorage.googleapis.com'],
    },
    devIndicators: {
        appIsrStatus: false,
    },
};

export default nextConfig;

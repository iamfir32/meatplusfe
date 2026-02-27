/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost',"www.google.com","https://firebasestorage.googleapis.com",'firebasestorage.googleapis.com','media.istockphoto.com','api.synck.io.vn', 'https://ik.imagekit.io/','ik.imagekit.io'],
    },
    devIndicators: {
        appIsrStatus: false,
    },
};

export default nextConfig;

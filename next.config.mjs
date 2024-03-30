/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["blue-quickest-opossum-600.mypinata.cloud"],
    // reactStrictMode: true,
    // webpack: (config, { isServer }) => {
    //   if (!isServer) {
    //     config.resolve.fallback = {
    //       fs: false,
    //       net: false,
    //       tls: false,
    //     };
    //   }
    //   return config;
    // },
  },
};

export default nextConfig;

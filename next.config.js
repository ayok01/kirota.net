/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ];
  },
  exportPathMap: async function(){
    const paths = {
      '/': { page: '/about' },
      '/about': { page: '/about' }
    };
    return paths;
  },
};

module.exports = nextConfig;

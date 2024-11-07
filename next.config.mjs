/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@ant-design',
    'rc-pagination',
    'rc-picker',
    'rc-util',
    'rc-tree',
    'rc-tooltip',
    'rc-table',
    'antd',
    'html2canvas',
  ],
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }]; // required to make Konva & react-konva work
    return config;
  },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

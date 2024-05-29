// next.config.js
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const pathMap = {
      ...defaultPathMap,
      '/api/auth/[...nextauth]': { page: '/api/auth/[...nextauth]' },
    };
    delete pathMap['/api/auth/[...nextauth]'];
    return pathMap;
  },
};

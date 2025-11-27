/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),

      // ✅ Fix three-globe broken imports for newer three.js
      'three/examples/jsm/lines/LineGeometry.js':
        require.resolve('three/addons/lines/LineGeometry.js'),
      'three/examples/jsm/lines/LineMaterial.js':
        require.resolve('three/addons/lines/LineMaterial.js'),
      'three/examples/jsm/lines/LineSegmentsGeometry.js':
        require.resolve('three/addons/lines/LineSegmentsGeometry.js'),

      // ✅ Keep your original three alias
      three: require.resolve('three'),
    };

    return config;
  },
};

module.exports = nextConfig;

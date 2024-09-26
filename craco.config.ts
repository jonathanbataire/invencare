import path from "path";
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@features": ["features/"],
      "@redux-hooks": ["app/hooks"],
      "@components": ["components"]
    },
  }
};
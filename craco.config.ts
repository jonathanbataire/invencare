import path from 'path';
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@features': ['features/'],
      '@redux-hooks': ['app/hooks'],
      '@components': ['components/'],
      '@styles': ['styles/'],
      '@icons': ['assests/icons/']
    },
    css :{
      preprocessorOptions : {
        scss: {
          api: 'modern',
        }        
      } 
    }
  }
};
import path from 'path';
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@app': ['app/'],
      '@features': ['features/'],
      '@services': ['services/'],
      '@components': ['components/'],
      '@pages': ['pages/'],
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
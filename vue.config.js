module.exports = {
  devServer: {
    proxy: `${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`
  }
};

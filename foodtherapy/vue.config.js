module.exports = {
    // 选项...
    devServer: {
        proxy: {
            '/pic': {
                target: 'https://jsonplaceholder.typicode.com',
                pathRewrite: {
                    '^/pic': ''
                },
                changeOrigin: true
            }
        }
    }
}
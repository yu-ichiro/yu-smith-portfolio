module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/style/common.scss";',
            }
        }
    }
};

const { aboutHandlers } = require('./About');
const { productHandlers } = require('./Product');

const routes = {
    about: aboutHandlers,
    product: productHandlers,
};
module.exports = routes;

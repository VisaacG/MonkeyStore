const store = require('./store.js')

function getProducts() {
    return new Promise((resolve, reject) => {
      resolve(store.list());
    });
};

module.exports = {
    getProducts
}
const db = require('./model');

async function getAllProducts() {
    const snapshot = await db.collection('products').get();
  
    // snapshot.docs.map((product) => console.log(product.data().category.path));
    return snapshot.docs.map((product) => {
      return {
        id: product.id,
        product: product.data()
      }
    });
}

module.exports = {
    list: getAllProducts
}
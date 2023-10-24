export const getProducts = async () => {
    const productsAll = await fetch('http://localhost:3500/api/v1/productos', {
        method: 'GET'
    });

    const result = await productsAll.json();

    console.log(result);

    return result;
}
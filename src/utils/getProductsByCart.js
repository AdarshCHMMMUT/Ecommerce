export const getProductsByCategory = (products, category) =>{
    return category.toLowerCase() === 'all' ? products : products.filter(product => product.catgory.name
        .toLowerCase() === category.toLowerCase() );
    }

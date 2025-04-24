export const getProductsByCategory = (products, category) =>{

    if( category.toLowerCase() === 'all') return products 
    else {
        products.filter(product => product.catgory.name.toLowerCase() === category.toLowerCase() );
        return products;
    }
    }

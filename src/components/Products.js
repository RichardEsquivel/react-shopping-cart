import React, { useContext } from 'react';

// Components
import Product from './Product';

//Contexts
import ProductContext from '../contexts/ProductContext.js';

const Products = props => {
	//Destructuring products and addItem into their own variables from the ProductContext object
	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="products-container">

			{//Mapping directly over products variable
				products.map(product => (
					<Product
						key={product.id}
						product={product}
						addItem={addItem}
					/>
				))}
		</div>
	);
};

export default Products;

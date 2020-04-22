import React, { useState, useEffect } from 'react';
import { url } from '../config';
import { fetchData } from '../lib'
import './pages.css';
import apple from '../assets/images/galaxy.png';

export const Products = (props: any) => {
  const [products, setProducts] = useState<[{}]>([{}]);

  useEffect(() => {
    fetchData(`${url}/products`, setProducts);
  }, [])
  return (
    <div className={`qa-products-container`}>
      {products.map((product: any) => <div className={`qa-products-wrapper`} key={`${product.id}`}>
          <img className={`qa-products-image`} src={apple} />
        <div className={`qa-products-title`}>{product.title}</div>
        <div className={`qa-products-description`}> {product.description}</div>
        <div className={`qa-products-price`}>  £{product.price}</div>
      </div>
      )}
    </div>
  );
}

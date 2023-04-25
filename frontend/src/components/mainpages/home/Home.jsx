import React from 'react';
import { Banner } from './banner/Banner';
import './home.scss'
import CategoryItem from './category/Category';
import ProductShowHome from './product/ProductShowHome';


export const Home = () => {
  return (
    <div>
        <Banner/>
        <div className="main-content">
          <div className="layout">
            <CategoryItem/>
            <ProductShowHome/>
          </div>
        </div>
    </div>
  );
};


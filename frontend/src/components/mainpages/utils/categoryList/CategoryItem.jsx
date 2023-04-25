import React from 'react'
import {useContext,useState} from 'react'
import { useParams} from 'react-router-dom';

import axios from 'axios';
import { GlobalState } from '../../../../GlobalState';

const CategoryItem = () => {
    const { id } = useParams();
    const state = useContext(GlobalState);
    const category = state.categoriesAPI.categories
    console.log(category);
  return (
    <div className="shop-by-category">
        <div className="categories">
            <div className='category'>
              <h3>{category.name}</h3>
              <img src={category.images}/>
            </div>
        </div>
    </div>
  )
}

export default CategoryItem
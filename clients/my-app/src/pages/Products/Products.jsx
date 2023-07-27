import React from "react";
import "./Products.scss";

const Products = () => {
 
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
            <div className="inputItem" >
              <input
                type="checkbox" id="1" value={1}/>
                <label htmlFor="1">Cats</label>
            </div>
            <div className="inputItem" >
              <input
                type="checkbox" id="2" value={2}/>
                <label htmlFor="2">Dogs</label>
            </div>
            <div className="inputItem" >
              <input
                type="checkbox" id="3" value={3}/>
                <label htmlFor="3">Birds</label>
            </div>
            <div className="inputItem" >
              <input
                type="checkbox" id="4" value={4}/>
                <label htmlFor="4">Fish</label>
            </div>
         
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
            />
            <span>1000</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://i.insider.com/6410da83b6d9f2001891181f?width=700"
          alt=""
        />
      </div>
    </div>
  );
};

export default Products;
import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProducts = ({type}) => {
  const data =[
   {
    id: 1,
    img:"https://www.just-food.com/wp-content/uploads/sites/28/2022/12/Pet-Food-Ollie-USA-Cropped.jpg",
    img2:"https://m.media-amazon.com/images/I/61ucVkkP9jL._AC_UF894,1000_QL80_.jpg",
    title: "Dog Meals",
    isNew:true,
    oldPrice: 19,
    price: 12,

   },

   {
    id: 2,
    img:"https://www.bigw.com.au/medias/sys_master/images/images/hc1/hfb/31092793409566.jpg",
    img2:"https://media.istockphoto.com/id/1203169526/photo/wild-bird-seed.jpg?s=612x612&w=0&k=20&c=qRHWsEzoV3oKv_5BOvVb-uIgQOoVQA3f9xgZ9uw4eCM=",
    title: "Bird Meals",
    isNew:true,
    oldPrice: 19,
    price: 12,

   },

   {
    id: 3,
    img:"https://chaldn.com/_mpimage/jungle-chicken-fish-adult-cat-food-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D121487&q=best&v=1",
    img2:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Cat_and_Cat_Foods.jpg/1200px-Cat_and_Cat_Foods.jpg",
    title: "Cat Meals",
    isNew:true,
    oldPrice: 17,
    price: 13,

   },

   {
    id: 4,
    img:"https://5.imimg.com/data5/DJ/XF/PR/SELLER-46732678/optimum-fish-food.jpg",
    img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuMlLt6J6ZrCsln1bharqbwDBDfgZWrlR-wzqZKfUwmfXfUDakVij19MQp8tydVO76ss&usqp=CAU",
    title: "Fish Meals",
    isNew:true,
    oldPrice: 10,
    price: 7,

   },


  ]

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
         {data.map(item=>(
            <Card item={item} key={item.id}/>
         ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
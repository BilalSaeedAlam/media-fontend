import React from "react";
// Components
import { CustomModal } from "../../shared";
import ProductItem from "../ProductItem";
// Assets
import Product1 from "../../assets/images/image_1.jpeg";
import Product2 from "../../assets/images/image_2.jpeg";
import Product3 from "../../assets/images/image_3.jpeg";
import Product4 from "../../assets/images/image_4.jpeg";
import Product5 from "../../assets/images/image_5.jpeg";
import Product6 from "../../assets/images/image_6.jpeg";

export default function ProductModal({ show, setShow }) {
  const data = [
    { id: 1, name: "SOFT JEAN", price: 20, image: Product1 },
    { id: 2, name: "COTTON JEAN", price: 30, image: Product2 },
    {
      id: 3,
      name: "BLACK MARQUEE PENT",
      price: 40,
      image: Product3,
    },
    { id: 4, name: "CHINA DRESS", price: 60, image: Product4 },
    { id: 5, name: "STUFFED JEAN", price: 70, image: Product5 },
    { id: 6, name: "DRESS PENT SHIRT", price: 80, image: Product6 },
  ];
  return (
    <CustomModal show={show} setShow={setShow} title="" size="lg">
      <div className="product-modal">
        <h4>YOU ARE ON THE LIST!</h4>
        <p className="subheading-p py-md-3 px-1">
          We added you to the list! We will reach out if this item becomes
          available again. We've also collected top picksjust for you:
        </p>
      </div>
      <div className="products-wrapper">
        <div className="products">
          {data &&
            data?.length > 0 &&
            data.map((item) => {
              return (
                <div className="item" key={item?.id}>
                  <ProductItem
                    image={item?.image}
                    price={item?.price}
                    name={item?.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </CustomModal>
  );
}

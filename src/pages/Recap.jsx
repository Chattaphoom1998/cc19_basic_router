import React from "react";

function Recap() {
  //**********code Javascript**************
  //-------------------------------------------------------
  //***object***
  const obj1 = {
    //inside obj call property
    firstName: "Sakai",
    lastName: "Ton",
  };
  //add property to obj1
  obj1.address = "BKK";

  const obj2 = {
    street: "123",
    zipcode: "5678",
  };
  //clone object
  const mergeObj = { ...obj1, ...obj2 };

  //-----------------------------------------------------------

  //***array***
  const arr1 = ["Sakai", "Ton"];
  arr1[2] = "Bkk";
  const arr2 = ["1234", "5678"];
  const mergeArr = [...arr1, ...arr2];
  //----------------------------------------------------------------
  //*** arr+obj
  const product = [
    { id: 1, title: "ASUS", price: "4000" },
    { id: 2, title: "MSI", price: "6000" },
  ];
  console.log(product[1].title);

  const newProduct = { id: 3, title: "lenovo", price: 2000 };
  const mergeProducts = [...product, newProduct];
  console.log(mergeProducts);

  return <div>Easy, Zustand</div>;
}

export default Recap;

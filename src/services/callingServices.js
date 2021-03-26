import axios from "axios";

const getProduct_apiEndPoint =
  "https://zocoly-backend.herokuapp.com/product/get/";

// for getting product name
export const getProduct = async () => {
  const { data } = await axios.get(getProduct_apiEndPoint);
  //console.log(data);
  return data;
};

// for getting items of that product
export const getitems = async (productname) => {
  const { data } = await axios.post(
    `https://zocoly-backend.herokuapp.com/product/iget/${productname}/`
  );
  //   console.log(data);
  return data;
};

// for sorting items
export const sortItems = async (sortType) => {
  // console.log(sortType);
  const { data } = await axios.post(
    `https://zocoly-backend.herokuapp.com/product/sort/${sortType}/`
  );
  // console.log(data);
  return data;
};

// for sorting items according to category
export const CategoryItems = async (catValue) => {
  //console.log(catValue);
  const { data } = await axios.post(
    `https://zocoly-backend.herokuapp.com/product/cat/${catValue}/`
  );
  //console.log(data);
  return data;
};

// for sorting items according to size
export const sizeItems = async (sizeValue) => {
  //console.log(catValue);
  const { data } = await axios.post(
    `https://zocoly-backend.herokuapp.com/product/variant/${sizeValue}/`
  );
  //console.log(data);
  return data;
};

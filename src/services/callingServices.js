import axios from "axios";

const getProduct_apiEndPoint =
  "https://zocoly-backend.herokuapp.com/product/get/";

//const getitems_apiEndPoint = `https://zocoly-backend.herokuapp.com/product/iget/Running_Shoe/`;

export const getProduct = async () => {
  const { data } = await axios.get(getProduct_apiEndPoint);
  //console.log(data);
  return data;
};

export const getitems = async (productname) => {
  const { data } = await axios.post(
    `https://zocoly-backend.herokuapp.com/product/iget/${productname}/`
  );
  //   console.log(data);
  return data;
};

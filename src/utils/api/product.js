export const addProduct = async (productData) => {
  try {
    console.log(productData, "productData");
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/add-product`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );
    return await res.json();
  } catch (error) {
    return { status: false, message: error };
  }
};

export const getProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/find-products`
    );
    return await res.json();
  } catch (error) {
    return { status: false, message: error };
  }
};

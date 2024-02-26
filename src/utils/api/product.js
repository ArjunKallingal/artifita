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

export const getProduct = async (productId) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/find-product?id=${productId}`
    );
    return await res.json();
  } catch (error) {
    return { status: false, message: error };
  }
};

export const editProduct = async (productData) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/edit-product`,
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

export const getCartData = async (userId) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/get-cart?userId=${userId}`
    );
    return await res.json();
  } catch (error) {
    return { status: false, message: error };
  }
};

export const addCart = async (userId, cart) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/add-cart`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userId, cart }),
    });
    return await res.json();
  } catch (error) {
    return { status: false, message: error };
  }
};
export const removeCartData = async (userId, productId) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/remove-cart?userId=${userId}&productId=${productId}`,
      {
        method: "PUT",
      }
    );
    return await res.json();
  } catch (error) {
    return { status: false, message: error };
  }
};
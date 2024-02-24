export const userLogin = async (userName, password) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/sign-in?name=${userName}&password=${password}`
    );
    return await res.json();
  } catch (error) {
    return { status: false, message: error };
  }
};

export const userRegister = async (name, password, email) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    return await res.json();
  } catch (error) {
    return { status: false, message: error };
  }
};

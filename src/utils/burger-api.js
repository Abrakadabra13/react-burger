export const url = "https://norma.nomoreparties.space/api";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
};

export const getIngredients = () => {
  return fetch(`${url}/ingredients`).then((res) => checkResponse(res));
};

export const getOrders = ({ getId }) => {
  return fetch(`${url}/orders`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      ingredients: getId(),
    }),
  })
    .then((res) => checkResponse(res))
};

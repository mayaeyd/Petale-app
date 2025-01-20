export const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : undefined; // Return saved cart state if it exists
  } catch (err) {
    console.error("Could not load cart from local storage", err);
    return undefined;
  }
};

export const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart state to local storage
  } catch (err) {
    console.error("Could not save cart to local storage", err);
  }
};

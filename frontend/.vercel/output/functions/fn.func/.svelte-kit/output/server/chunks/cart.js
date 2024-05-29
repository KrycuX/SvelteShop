import { w as writable } from "./index.js";
const STORAGE_KEY = "cart_items";
function loadCartItems() {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedItems = window.localStorage.getItem(STORAGE_KEY);
    return storedItems ? JSON.parse(storedItems) : [];
  }
  return [];
}
function saveCartItems(items) {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
}
class Cart {
  static {
    this._id = 0;
  }
  constructor() {
    this.Id = Cart._id++;
    this.Positions = writable(loadCartItems());
    this.Positions.subscribe((items) => saveCartItems(items));
  }
  AddProductToCart(positionToAdd) {
    this.Positions.update((items) => {
      const updatedItems = [...items, positionToAdd];
      saveCartItems(updatedItems);
      return updatedItems;
    });
  }
  RemoveProductFromCart(positionId) {
    this.Positions.update((items) => {
      const updatedItems = items.filter((ele, ind) => ele.Id === positionId);
      saveCartItems(updatedItems);
      return updatedItems;
    });
  }
}
export {
  Cart as C
};

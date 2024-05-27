import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
import { C as Cart } from "../../../chunks/cart.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cart = new Cart();
  cart.Positions.subscribe((items) => {
    position = items;
  });
  let position;
  return `<section><div>${each(position, (item) => {
    return `<h1>nazwa: ${escape(item.Product.Name)}</h1> <p>cena: ${escape(item.TotalValue)} ilosc: ${escape(item.Count)}</p>`;
  })}</div></section>`;
});
export {
  Page as default
};

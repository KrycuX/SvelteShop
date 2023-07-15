
import { writable } from 'svelte/store';

const initialState=
{
     /**
     @type {import('../json/basket.json')}
     */
position:[]
}

function createCart() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addItem: ( /** @type {{ id: number; name: any; price: any; }} */ product) =>
      update((state) => {
    console.log(product);


        const index = state.position.findIndex((position) => position.item.id === product.id);
        const id = index +1 ;

        if (index !== -1) {
          state.position[index].quantity += 1;
        } else {

          state.position.push({ id:id, item:{name : product.name , id:product.id, price: product.price} , quantity: 1 });
        }
        
        localStorage.setItem("basket",JSON.stringify(state))
        return state;
      }),
  
    clear: () => set(initialState),
  };
}

export const cart = createCart();
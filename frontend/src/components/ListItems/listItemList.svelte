<script lang="ts">
    import { slide, type SlideParams } from "svelte/transition";
    import type { Product } from "../../models/product";
    import { Position } from "../../models/position";

  export let value:Product;

  export let onClick = (item:Position) => {};
  function fadeSlide(node:Element, options:SlideParams) {
    const slideTrans = slide(node, options);
    return {
      duration: options.duration,
      // @ts-ignore
      css: (t) => `
				${
          // @ts-ignore
          slideTrans.css(t)
        }
				opacity: ${t};
			`,
    };
  }
</script>

<div
  class="itemList"
  transition:fadeSlide={{ duration: 100 }}
  on:input={() => onClick(new Position(1,value))}
>
  <img src={value.Picture} alt="" />
  <div class="infoContainer">{value.Name}</div>
</div>

<style>
  .itemList {
    padding: 0.4em;
    flex: 1;
    min-width: 90%;
    margin: 0 0px;
    min-height: 5em;
    justify-content: left;
    align-items: center;
    display: flex;
    margin: 0.4em;
    box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    transition: ease;
  }
  .infoContainer {
    padding: 1em;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  img {
    justify-content: center;
    align-items: center;
    width: 5%;
  }
  .itemList:hover {
    box-shadow: 0.1em 0.1em 0.1em 0.1em rgb(32, 32, 32);
  }
  div:active {
    opacity: 1;
    animation: fade-bottom;
  }

  @keyframes fade-bottom {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>

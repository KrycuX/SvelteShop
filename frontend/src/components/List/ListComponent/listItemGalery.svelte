<script lang="ts">
  import { slide, type SlideParams } from "svelte/transition";
  import { Position } from "../../../models/position";
  import type { Product } from "../../../models/product";


  export let value:Product;
  export let onClick = (item:Position) => {};
  export let handleDragStart=(item:Product):void => {}
    export let handleDragEnd=(item:Product):void => {}
    export let handleTouchStart=(item:Product):void => {}
    export let handleTouchMove=(item:Product):void => {}
    export let handleTouchEnd=(item:Product):void => {}

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
  draggable=true
  class="itemGalery"
  on:dragstart={()=>handleDragStart(value)}
  on:dragend={()=>handleDragEnd(value)}
		on:touchstart={()=>handleTouchStart(value)}
		on:touchmove={()=>handleTouchMove(value)}
		on:touchend={()=>handleTouchEnd(value)}
  transition:fadeSlide={{ duration: 100 }}
  on:input={() => onClick(new Position(1,value))}
>
  <img src={value.Picture} alt="" />
  <div class="infoContainer">{value.Name}</div>
</div>

<style>
  .itemGalery {
    padding: 0.4em;
    flex: 1;
    flex-basis: 31%;
    margin: 0 0px;
    min-height: 16em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    margin: 0.4em;
    box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    transition: ease;
    cursor: move;
  }
  img {
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .infoContainer {
    padding: 1em;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .itemGalery:hover
   {
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

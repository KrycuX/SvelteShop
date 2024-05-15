<script lang="ts">
  import { slide, type SlideParams } from "svelte/transition";
    import type { Position } from "../../../models/position";


  export let value : Position;
 
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
  class="itemGalery"
  transition:fadeSlide={{ duration: 100 }}>
  <img src={value.Product.Picture} alt="" />
  <div class="infoContainer">{value.Product.Name}</div>
</div>

<style>
 .itemGalery {
    padding: 0.4em;
    flex: 1;
    flex-basis: 31%;
    max-width: 30%;
    margin: 0 0px;
    min-height: 16em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    margin: 0.4em;
    box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    transition: ease;
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
  .itemGalery:hover {
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

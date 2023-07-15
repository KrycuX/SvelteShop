<script>
  import { slide } from "svelte/transition";

  export let value;
  /**
   * @param {{ name: string; id: number; price: string; }[]} item
   */
  export let onClick = (item) => {};
  /**
   * @param {Element} node
   * @param {import("svelte/transition").SlideParams} options
   */
  function fadeSlide(node, options) {
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
  on:click={() => onClick(value)}
>
  <img src={value["thumbnail"]} alt="" />
  <div class="infoContainer">{value["title"]}</div>
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
  .itemBig:hover,
  .itemGalery:hover,
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

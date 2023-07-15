<script>
  import { slide } from "svelte/transition";

  export let value;
  /**
   * @param {{ name: string; id: number; price: string; }[]} item
   */
  export let onClick = (item) => {};
  export let type = "itemGalery";
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
  class={type}
  transition:fadeSlide={{ duration: 100 }}
  on:click={() => onClick(value)}
>
  {value["name"]}
</div>

<style>
  .itemGalery {
    flex: 1;
    flex-basis: calc(30% - 10px);
    min-width: calc(100% * (1 / 4) - 1px);
    margin: 0 0px;
    min-height: 16em;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0.4em;
    box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    transition: ease;
  }
  .itemList {
    flex: 1;
    min-width: 90%;
    margin: 0 0px;
    min-height: 5em;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0.4em;
    box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    transition: ease;
  }
  .itemBig {
    flex: 1;
    width: 100%;
    margin: 0 0px;
    min-height: 20em;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0.4em;
    box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    transition: ease;
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

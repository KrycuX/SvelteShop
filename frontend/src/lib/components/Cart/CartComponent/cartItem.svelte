<script lang="ts">
  import type { Position } from "$lib/models/position";
  import {fadeSlide} from "../../../../actions/fadeSlide"

  export let value : Position;
 
 
</script>

<div
  class="itemGalery"
  transition:fadeSlide={{ duration: 100 }}>
  <img src={value.Product.Picture} alt="" />
  <div class="infoContainer">{value.Product.Name}</div>
</div>

<style>
 .itemGalery {
    padding: 1%;
    flex: 1;
    flex-basis: 40%;
    width: 40%;
    max-width: 45%;
    margin: 0 0px;
    max-height: 15%;
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

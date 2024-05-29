<script lang="ts">
  import type { Position } from "$lib/models/position";
  import {fadeSlide} from "../../../../actions/fadeSlide"
  import img from "$lib/assets/icons/cross.png"
  export let value : Position;
  export let deletePosition = (id:Number) => {};
</script>

<div
  class="itemGalery"
  transition:fadeSlide={{ duration: 100 }}>
  <div class="infoContainer"><p>{value.Product.Name}</p>
    <img class ="pic" src={value.Product.Picture} alt="" />
  </div>
  <img class="deleteButton" on:click={()=>{deletePosition(value.Id)}}  src = {img} alt=""/>
</div>

<style>
 .itemGalery {
    padding: 3%;
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
  .pic {

    width: 50%;
  }
.deleteButton{
    bottom:0;
    width: 50%;
}
  .infoContainer {
    display:block;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
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

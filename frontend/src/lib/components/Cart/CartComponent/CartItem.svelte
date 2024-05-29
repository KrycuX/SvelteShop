<script lang="ts">
  import type { Position } from "$lib/models/position";
  import {fadeSlide} from "../../../../actions/fadeSlide"
  import img from "$lib/assets/icons/cross.png"
  export let value : Position;
  export let deletePosition = (id:Number) => {};
  export let updateCount = (id:Number,count:number) => {};
</script>

<div class="itemGalery" transition:fadeSlide={{ duration: 100 }}>

  <div class="row">
    <div class = "name"> {value.Product.Name} </div>
    <img class ="deleteButton" on:click={()=>{deletePosition(value.Id)}}  src = {img} alt=""/>
  </div>
  <img class ="pic" src={value.Product.Picture} alt="" />
  <div class="row">
  <div>ilość:</div><input bind:value={value.Count}  on:input={() => updateCount(value.Id,value.Count)} type="number" >
  </div>
</div>

<style>
 .itemGalery {
    display: flex;
    padding: 3%;
    flex: 1;
    flex-basis: 40%;
    width: 40%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 40%;
    margin: 0 0px;
    max-height: 15%;
    flex-direction: column;
    margin: 0.4em;
    box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    transition: ease;
  }
  input
  {
    width: 25%;
  }
  .pic 
  {
    width: 70%;
  }

.deleteButton
{
  width: 15%;
}
.row
{
  margin-top: 2%;
  margin-bottom:2% ;
  display: inline-flex;
  justify-content: space-between;
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

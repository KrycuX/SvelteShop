<script lang="ts">
  import type { Product } from "$lib/types/types";
  import type { ListType } from "$lib/enums/enums";
  import {fadeSlide} from "../../../../actions/fadeSlide"
  export let value:Product;
  export let viewType:ListType;
  export let handleDragStart=(item:Product):void => {}
  export let handleDragEnd=(item:Product):void => {}

  let isDragging:boolean= false;
  let element:HTMLElement;
  let dragImage:HTMLElement;

  function createDragImage(){
    dragImage = element.cloneNode(true) as HTMLElement;
    dragImage.style.width = '100px';
    dragImage.style.height = '100px';
    dragImage.style.backgroundColor = 'lightblue';
    dragImage.style.border = '2px dashed blue';
    dragImage.style.position = 'absolute';
    dragImage.style.top = '-9999px';
    dragImage.style.cursor="pointer";
    dragImage.className = 'drag-image '+ dragImage.className;
    document.body.appendChild(dragImage);
  }
  function clearDragImage(){
    const dragImages = document.querySelectorAll('.drag-image');
    dragImages.forEach(dragImage => dragImage.remove());
  }
</script>

<div
  tabindex="0"
  role="button"
  draggable='true'
  class="item {viewType}"
  bind:this={element}
  on:dragstart={(e)=>{ 
    handleDragStart(value); 
    isDragging = true;
    createDragImage();
    e.dataTransfer?.setDragImage(dragImage,50,50)
  }}
  on:dragend={(e)=>{ 
    handleDragEnd(value); 
    isDragging=false;
    clearDragImage();
    }}
  transition:fadeSlide={{ duration: 100 }}
>
<div class="infoContainer">{value.Id}</div>
  <img  draggable='false' src={value.Picture} alt="" />
  <div class="infoContainer">{value.Name}</div>
</div>
<style>
.item{
  padding: 0.4em;
  flex: 1;
  margin: 0 0px;
  box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
  transition: ease;
}
  .item.Galery {
    flex-basis: 31%;
    max-width: 30%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;

  } 
  .item.SmallList {
    min-width: 90%;
    min-height: 5em;
    justify-content: left;
    align-items: left;
    display: flex;

  }
  .item.BigItemList {
    width: 100%; 
    min-height: 20em;
    justify-content: center;
    align-items: center;

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
  .item:hover
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

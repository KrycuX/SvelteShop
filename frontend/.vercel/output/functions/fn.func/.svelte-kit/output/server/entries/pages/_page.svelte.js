import { c as create_ssr_component, e as escape, b as add_attribute, d as each, v as validate_component } from "../../chunks/ssr.js";
import { C as Cart } from "../../chunks/cart.js";
var ListType = /* @__PURE__ */ ((ListType2) => {
  ListType2["Galery"] = "Galery";
  ListType2["SmallList"] = "SmallList";
  ListType2["BigItemList"] = "BigItemList";
  return ListType2;
})(ListType || {});
var CartState = /* @__PURE__ */ ((CartState2) => {
  CartState2["Load"] = "Load";
  CartState2["Hide"] = "Hide";
  CartState2["Show"] = "Show";
  return CartState2;
})(CartState || {});
const css$7 = {
  code: ".list.svelte-yjmdlh{margin:0;display:inline-block;align-items:center;overflow:hidden;padding:0.1rem}.listItem.svelte-yjmdlh{align-items:center;display:inline-flex;height:100%;align-items:center;padding:0 2rem;color:white;font-weight:700;font-size:0.8rem;text-decoration:none;text-transform:uppercase;letter-spacing:0.1em;transition:color 0.2s linear;background-color:transparent;border:0;outline:0}div.svelte-yjmdlh:focus{box-shadow:0.1em 0.1em 0.1em 0.1em gray}.listItem.hover.svelte-yjmdlh,.listItem.svelte-yjmdlh:hover{box-shadow:0.1em 0.1em 0.1em 0.1em gray}",
  map: `{"version":3,"file":"ListViewTypes.svelte","sources":["ListViewTypes.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { ListType } from \\"$lib/enums/enums\\";\\nexport let value;\\nlet class0 = \\"active\\";\\nlet class1 = \\"\\";\\nlet class2 = \\"\\";\\n<\/script>\\r\\n<div class=\\"list\\">\\r\\n        <div \\r\\n        tabindex=\\"0\\"\\r\\n        role=\\"button\\"\\r\\n        class=\\"listItem {value === ListType.Galery? 'hover': ''}\\"\\r\\n        on:click={() => { value = ListType.Galery;}}\\r\\n        on:keydown={()=>{}}> 1 </div>\\r\\n        <div \\r\\n        tabindex=\\"0\\"\\r\\n        role=\\"button\\"\\r\\n        class=\\"listItem {value === ListType.SmallList? 'hover': ''}\\"\\r\\n        on:click={() => { value = ListType.SmallList; }}\\r\\n        on:keydown={()=>{}}> 2 </div>\\r\\n        <div \\r\\n        tabindex=\\"0\\"\\r\\n        role=\\"button\\"\\r\\n        class=\\"listItem {value === ListType.BigItemList? 'hover': ''}\\"\\r\\n        on:click={() => {value = ListType.BigItemList;}}\\r\\n        on:keydown={()=>{}}> 3 </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n \\r\\n .list {\\r\\n        margin: 0;\\r\\n        display: inline-block;\\r\\n        align-items: center;\\r\\n        overflow: hidden;\\r\\n        padding: 0.1rem;\\r\\n    }\\r\\n    .listItem {\\r\\n        align-items: center;\\r\\n        display: inline-flex;\\r\\n        height: 100%;\\r\\n        align-items: center;\\r\\n        padding: 0 2rem;\\r\\n        color: white;\\r\\n        font-weight: 700;\\r\\n        font-size: 0.8rem;\\r\\n        text-decoration: none;\\r\\n        text-transform: uppercase;\\r\\n        letter-spacing: 0.1em;\\r\\n        transition: color 0.2s linear;\\r\\n        background-color: transparent;\\r\\n        border: 0;\\r\\n        outline: 0;\\r\\n    }\\r\\n    div:focus {\\r\\n        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;\\r\\n    }\\r\\n    .listItem.hover,\\r\\n    .listItem:hover {\\r\\n        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6BC,mBAAM,CACC,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,YAAY,CACrB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,MACb,CACA,uBAAU,CACN,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,WAAW,CACpB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,eAAe,CAAE,IAAI,CACrB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,KAAK,CACrB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,MAAM,CAC7B,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CACb,CACA,iBAAG,MAAO,CACN,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,IACxC,CACA,SAAS,oBAAM,CACf,uBAAS,MAAO,CACZ,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,IACxC"}`
};
const ListViewTypes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$7);
  return `<div class="list svelte-yjmdlh"><div tabindex="0" role="button" class="${"listItem " + escape(value === ListType.Galery ? "hover" : "", true) + " svelte-yjmdlh"}">1</div> <div tabindex="0" role="button" class="${"listItem " + escape(value === ListType.SmallList ? "hover" : "", true) + " svelte-yjmdlh"}">2</div> <div tabindex="0" role="button" class="${"listItem " + escape(value === ListType.BigItemList ? "hover" : "", true) + " svelte-yjmdlh"}">3</div> </div>`;
});
const css$6 = {
  code: '.item.svelte-zsx980{padding:0.4em;flex:1;margin:0 0px;box-shadow:0.1em 0.1em 0.1em 0.1em gray;transition:ease}.item.Galery.svelte-zsx980{flex-basis:31%;max-width:30%;justify-content:center;align-items:center;flex-direction:column;display:flex}.item.SmallList.svelte-zsx980{min-width:90%;min-height:5em;justify-content:left;align-items:left;display:flex}.item.BigItemList.svelte-zsx980{width:100%;min-height:20em;justify-content:center;align-items:center}img.svelte-zsx980{justify-content:center;align-items:center;width:50%}.infoContainer.svelte-zsx980{padding:1em;font-family:"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif}.item.svelte-zsx980:hover{box-shadow:0.1em 0.1em 0.1em 0.1em rgb(32, 32, 32)}div.svelte-zsx980:active{opacity:1;animation:svelte-zsx980-fade-bottom}@keyframes svelte-zsx980-fade-bottom{0%{transform:translateY(50px);opacity:0}100%{transform:translateY(0);opacity:1}}',
  map: `{"version":3,"file":"ListItemGalery.svelte","sources":["ListItemGalery.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { fadeSlide } from \\"../../../../actions/fadeSlide\\";\\nexport let value;\\nexport let viewType;\\nexport let handleDragStart = (item) => {\\n};\\nexport let handleDragEnd = (item) => {\\n};\\nexport let handleTouchStart = (item) => {\\n};\\nexport let handleTouchMove = (item) => {\\n};\\nexport let handleTouchEnd = (item) => {\\n};\\nlet isDragging = false;\\nlet element;\\nlet dragImage;\\nfunction createDragImage() {\\n  dragImage = element.cloneNode(true);\\n  dragImage.style.width = \\"100px\\";\\n  dragImage.style.height = \\"100px\\";\\n  dragImage.style.backgroundColor = \\"lightblue\\";\\n  dragImage.style.border = \\"2px dashed blue\\";\\n  dragImage.style.position = \\"absolute\\";\\n  dragImage.style.top = \\"-9999px\\";\\n  dragImage.style.cursor = \\"pointer\\";\\n  dragImage.className = \\"drag-image \\" + dragImage.className;\\n  document.body.appendChild(dragImage);\\n}\\nfunction clearDragImage() {\\n  const dragImages = document.querySelectorAll(\\".drag-image\\");\\n  dragImages.forEach((dragImage2) => dragImage2.remove());\\n}\\n<\/script>\\r\\n\\r\\n<div\\r\\n  tabindex=\\"0\\"\\r\\n  role=\\"button\\"\\r\\n  draggable='true'\\r\\n  class=\\"item {viewType}\\"\\r\\n  bind:this={element}\\r\\n  on:dragstart={(e)=>{ \\r\\n    handleDragStart(value); \\r\\n    isDragging = true;\\r\\n    createDragImage();\\r\\n    e.dataTransfer?.setDragImage(dragImage,50,50)\\r\\n  }}\\r\\n  on:dragend={(e)=>{ \\r\\n    handleDragEnd(value); \\r\\n    isDragging=false;\\r\\n    clearDragImage();\\r\\n    }}\\r\\n\\t\\ton:touchstart={()=>handleTouchStart(value)}\\r\\n\\t\\ton:touchmove={()=>handleTouchMove(value)}\\r\\n\\t\\ton:touchend={()=>handleTouchEnd(value)}\\r\\n  transition:fadeSlide={{ duration: 100 }}\\r\\n>\\r\\n<div class=\\"infoContainer\\">{value.Id}</div>\\r\\n  <img  draggable='false' src={value.Picture} alt=\\"\\" />\\r\\n  <div class=\\"infoContainer\\">{value.Name}</div>\\r\\n</div>\\r\\n<style>\\r\\n.item{\\r\\n  padding: 0.4em;\\r\\n  flex: 1;\\r\\n  margin: 0 0px;\\r\\n  box-shadow: 0.1em 0.1em 0.1em 0.1em gray;\\r\\n  transition: ease;\\r\\n}\\r\\n  .item.Galery {\\r\\n    flex-basis: 31%;\\r\\n    max-width: 30%;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    display: flex;\\r\\n\\r\\n  } \\r\\n  .item.SmallList {\\r\\n    min-width: 90%;\\r\\n    min-height: 5em;\\r\\n    justify-content: left;\\r\\n    align-items: left;\\r\\n    display: flex;\\r\\n\\r\\n  }\\r\\n  .item.BigItemList {\\r\\n    width: 100%; \\r\\n    min-height: 20em;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n\\r\\n  }\\r\\n  img {\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 50%;\\r\\n  }\\r\\n  .infoContainer {\\r\\n    padding: 1em;\\r\\n    font-family: \\"Franklin Gothic Medium\\", \\"Arial Narrow\\", Arial, sans-serif;\\r\\n  }\\r\\n  .item:hover\\r\\n   {\\r\\n    box-shadow: 0.1em 0.1em 0.1em 0.1em rgb(32, 32, 32);\\r\\n  }\\r\\n  div:active {\\r\\n    opacity: 1;\\r\\n    animation: fade-bottom;\\r\\n  }\\r\\n\\r\\n  @keyframes fade-bottom {\\r\\n    0% {\\r\\n      transform: translateY(50px);\\r\\n      opacity: 0;\\r\\n    }\\r\\n    100% {\\r\\n      transform: translateY(0);\\r\\n      opacity: 1;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6DA,mBAAK,CACH,OAAO,CAAE,KAAK,CACd,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,CAAC,CAAC,GAAG,CACb,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,CACxC,UAAU,CAAE,IACd,CACE,KAAK,qBAAQ,CACX,UAAU,CAAE,GAAG,CACf,SAAS,CAAE,GAAG,CACd,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAEX,CACA,KAAK,wBAAW,CACd,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,GAAG,CACf,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAEX,CACA,KAAK,0BAAa,CAChB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAEf,CACA,iBAAI,CACF,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GACT,CACA,4BAAe,CACb,OAAO,CAAE,GAAG,CACZ,WAAW,CAAE,wBAAwB,CAAC,CAAC,cAAc,CAAC,CAAC,KAAK,CAAC,CAAC,UAChE,CACA,mBAAK,MACJ,CACC,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CACpD,CACA,iBAAG,OAAQ,CACT,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,yBACb,CAEA,WAAW,yBAAY,CACrB,EAAG,CACD,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,OAAO,CAAE,CACX,CACA,IAAK,CACH,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CACX,CACF"}`
};
const ListItemGalery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { viewType } = $$props;
  let { handleDragStart = (item) => {
  } } = $$props;
  let { handleDragEnd = (item) => {
  } } = $$props;
  let { handleTouchStart = (item) => {
  } } = $$props;
  let { handleTouchMove = (item) => {
  } } = $$props;
  let { handleTouchEnd = (item) => {
  } } = $$props;
  let element;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.viewType === void 0 && $$bindings.viewType && viewType !== void 0)
    $$bindings.viewType(viewType);
  if ($$props.handleDragStart === void 0 && $$bindings.handleDragStart && handleDragStart !== void 0)
    $$bindings.handleDragStart(handleDragStart);
  if ($$props.handleDragEnd === void 0 && $$bindings.handleDragEnd && handleDragEnd !== void 0)
    $$bindings.handleDragEnd(handleDragEnd);
  if ($$props.handleTouchStart === void 0 && $$bindings.handleTouchStart && handleTouchStart !== void 0)
    $$bindings.handleTouchStart(handleTouchStart);
  if ($$props.handleTouchMove === void 0 && $$bindings.handleTouchMove && handleTouchMove !== void 0)
    $$bindings.handleTouchMove(handleTouchMove);
  if ($$props.handleTouchEnd === void 0 && $$bindings.handleTouchEnd && handleTouchEnd !== void 0)
    $$bindings.handleTouchEnd(handleTouchEnd);
  $$result.css.add(css$6);
  return `<div tabindex="0" role="button" draggable="true" class="${"item " + escape(viewType, true) + " svelte-zsx980"}"${add_attribute("this", element, 0)}><div class="infoContainer svelte-zsx980">${escape(value.Id)}</div> <img draggable="false"${add_attribute("src", value.Picture, 0)} alt="" class="svelte-zsx980"> <div class="infoContainer svelte-zsx980">${escape(value.Name)}</div> </div>`;
});
const css$5 = {
  code: ".list.svelte-yynwqi{flex:1;margin-top:0.4em}.list.Galery.svelte-yynwqi{display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:1;column-gap:1em;row-gap:1em}.list.SmallList.svelte-yynwqi{display:grid;min-width:100%;height:50%;flex-wrap:wrap;align-content:flex-start}.list.BigItemList.svelte-yynwqi{display:block;justify-content:center;align-items:center;width:100%}",
  map: '{"version":3,"file":"ListGalery.svelte","sources":["ListGalery.svelte"],"sourcesContent":["<script lang=\\"ts\\">import ItemComponent from \\"$lib/components/List/ListComponent/ListItemGalery.svelte\\";\\nexport let items;\\nexport let viewType;\\nexport let handleDragStart = (item) => {\\n};\\nexport let handleDragEnd = (item) => {\\n};\\nexport let handleTouchStart = (item) => {\\n};\\nexport let handleTouchMove = (item) => {\\n};\\nexport let handleTouchEnd = (item) => {\\n};\\n<\/script>\\r\\n\\r\\n<div class=\\"list {viewType}\\">\\r\\n    {#each items as item(item)}\\r\\n        <ItemComponent \\r\\n        handleDragStart={handleDragStart} \\r\\n        handleDragEnd={handleDragEnd}\\r\\n        handleTouchStart={handleTouchStart}\\r\\n        handleTouchMove={handleTouchMove}\\r\\n        handleTouchEnd={handleTouchEnd}\\r\\n        value={item} \\r\\n        viewType={viewType} />\\r\\n    {/each}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .list{\\r\\n        flex: 1;\\r\\n        margin-top: 0.4em;\\r\\n    }\\r\\n    .list.Galery {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        flex-grow:1;\\r\\n        column-gap: 1em;\\r\\n        row-gap: 1em;\\r\\n\\r\\n    }\\r\\n    .list.SmallList{\\r\\n        display: grid;\\r\\n        min-width: 100%;\\r\\n        height: 50%;\\r\\n        flex-wrap: wrap;\\r\\n        align-content: flex-start;\\r\\n    }\\r\\n    .list.BigItemList{\\r\\n        display: block;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6BI,mBAAK,CACD,IAAI,CAAE,CAAC,CACP,UAAU,CAAE,KAChB,CACA,KAAK,qBAAQ,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAC,CACX,UAAU,CAAE,GAAG,CACf,OAAO,CAAE,GAEb,CACA,KAAK,wBAAU,CACX,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CACX,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,UACnB,CACA,KAAK,0BAAY,CACb,OAAO,CAAE,KAAK,CACd,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IACX"}'
};
const ListGalery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { viewType } = $$props;
  let { handleDragStart = (item) => {
  } } = $$props;
  let { handleDragEnd = (item) => {
  } } = $$props;
  let { handleTouchStart = (item) => {
  } } = $$props;
  let { handleTouchMove = (item) => {
  } } = $$props;
  let { handleTouchEnd = (item) => {
  } } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.viewType === void 0 && $$bindings.viewType && viewType !== void 0)
    $$bindings.viewType(viewType);
  if ($$props.handleDragStart === void 0 && $$bindings.handleDragStart && handleDragStart !== void 0)
    $$bindings.handleDragStart(handleDragStart);
  if ($$props.handleDragEnd === void 0 && $$bindings.handleDragEnd && handleDragEnd !== void 0)
    $$bindings.handleDragEnd(handleDragEnd);
  if ($$props.handleTouchStart === void 0 && $$bindings.handleTouchStart && handleTouchStart !== void 0)
    $$bindings.handleTouchStart(handleTouchStart);
  if ($$props.handleTouchMove === void 0 && $$bindings.handleTouchMove && handleTouchMove !== void 0)
    $$bindings.handleTouchMove(handleTouchMove);
  if ($$props.handleTouchEnd === void 0 && $$bindings.handleTouchEnd && handleTouchEnd !== void 0)
    $$bindings.handleTouchEnd(handleTouchEnd);
  $$result.css.add(css$5);
  return `<div class="${"list " + escape(viewType, true) + " svelte-yynwqi"}">${each(items, (item) => {
    return `${validate_component(ListItemGalery, "ItemComponent").$$render(
      $$result,
      {
        handleDragStart,
        handleDragEnd,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        value: item,
        viewType
      },
      {},
      {}
    )}`;
  })} </div>`;
});
const css$4 = {
  code: '.itemGalery.svelte-1xi0a8e{padding:1%;flex:1;flex-basis:40%;width:40%;max-width:45%;margin:0 0px;max-height:15%;justify-content:center;align-items:center;flex-direction:column;display:flex;margin:0.4em;box-shadow:0.1em 0.1em 0.1em 0.1em gray;transition:ease}img.svelte-1xi0a8e{justify-content:center;align-items:center;width:50%}.infoContainer.svelte-1xi0a8e{padding:1em;font-family:"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif}.itemGalery.svelte-1xi0a8e:hover{box-shadow:0.1em 0.1em 0.1em 0.1em rgb(32, 32, 32)}div.svelte-1xi0a8e:active{opacity:1;animation:svelte-1xi0a8e-fade-bottom}@keyframes svelte-1xi0a8e-fade-bottom{0%{transform:translateY(50px);opacity:0}100%{transform:translateY(0);opacity:1}}',
  map: '{"version":3,"file":"CartItem.svelte","sources":["CartItem.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { fadeSlide } from \\"../../../../actions/fadeSlide\\";\\nexport let value;\\n<\/script>\\r\\n\\r\\n<div\\r\\n  class=\\"itemGalery\\"\\r\\n  transition:fadeSlide={{ duration: 100 }}>\\r\\n  <img src={value.Product.Picture} alt=\\"\\" />\\r\\n  <div class=\\"infoContainer\\">{value.Product.Name}</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n .itemGalery {\\r\\n    padding: 1%;\\r\\n    flex: 1;\\r\\n    flex-basis: 40%;\\r\\n    width: 40%;\\r\\n    max-width: 45%;\\r\\n    margin: 0 0px;\\r\\n    max-height: 15%;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    display: flex;\\r\\n    margin: 0.4em;\\r\\n    box-shadow: 0.1em 0.1em 0.1em 0.1em gray;\\r\\n    transition: ease;\\r\\n  }\\r\\n  img {\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 50%;\\r\\n  }\\r\\n\\r\\n  .infoContainer {\\r\\n    padding: 1em;\\r\\n    font-family: \\"Franklin Gothic Medium\\", \\"Arial Narrow\\", Arial, sans-serif;\\r\\n  }\\r\\n  .itemGalery:hover {\\r\\n    box-shadow: 0.1em 0.1em 0.1em 0.1em rgb(32, 32, 32);\\r\\n  }\\r\\n  div:active {\\r\\n    opacity: 1;\\r\\n    animation: fade-bottom;\\r\\n  }\\r\\n\\r\\n  @keyframes fade-bottom {\\r\\n    0% {\\r\\n      transform: translateY(50px);\\r\\n      opacity: 0;\\r\\n    }\\r\\n    100% {\\r\\n      transform: translateY(0);\\r\\n      opacity: 1;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAYC,0BAAY,CACT,OAAO,CAAE,EAAE,CACX,IAAI,CAAE,CAAC,CACP,UAAU,CAAE,GAAG,CACf,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,CAAC,CAAC,GAAG,CACb,UAAU,CAAE,GAAG,CACf,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,CACxC,UAAU,CAAE,IACd,CACA,kBAAI,CACF,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GACT,CAEA,6BAAe,CACb,OAAO,CAAE,GAAG,CACZ,WAAW,CAAE,wBAAwB,CAAC,CAAC,cAAc,CAAC,CAAC,KAAK,CAAC,CAAC,UAChE,CACA,0BAAW,MAAO,CAChB,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CACpD,CACA,kBAAG,OAAQ,CACT,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,0BACb,CAEA,WAAW,0BAAY,CACrB,EAAG,CACD,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,OAAO,CAAE,CACX,CACA,IAAK,CACH,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CACX,CACF"}'
};
const CartItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$4);
  return `<div class="itemGalery svelte-1xi0a8e"><img${add_attribute("src", value.Product.Picture, 0)} alt="" class="svelte-1xi0a8e"> <div class="infoContainer svelte-1xi0a8e">${escape(value.Product.Name)}</div> </div>`;
});
const css$3 = {
  code: ".customClassNameBig.svelte-1l2c8fn.svelte-1l2c8fn{position:fixed;display:flex;right:0;margin-top:1%;height:85%;width:1%;max-width:20%}.customClassNameBig.Hide.svelte-1l2c8fn.svelte-1l2c8fn{animation:svelte-1l2c8fn-slideRight 0.1s linear 0s 1 normal forwards}.customClassNameBig.Show.svelte-1l2c8fn.svelte-1l2c8fn{animation:svelte-1l2c8fn-slideLeft 0.1s linear 0s 1 normal forwards}.flyingButton.svelte-1l2c8fn.svelte-1l2c8fn{position:relative;right:0;display:flex;align-items:center;min-width:1rem;background-color:aliceblue;border-top-left-radius:60%;border-bottom-left-radius:60%}.flyingButton.svelte-1l2c8fn>span.svelte-1l2c8fn{position:relative;rotate:-90deg}@keyframes svelte-1l2c8fn-slideLeft{from{width:1%}to{width:20%}}@keyframes svelte-1l2c8fn-slideRight{from{width:20%}to{width:1%}}.itemsContainer.svelte-1l2c8fn.svelte-1l2c8fn{width:100%;height:93%;display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:1;align-content:flex-start;overflow:auto}.summary.svelte-1l2c8fn.svelte-1l2c8fn{position:sticky;background-color:aliceblue;bottom:0}.wrapper.svelte-1l2c8fn.svelte-1l2c8fn{width:100%;height:100%;background-color:aliceblue;box-shadow:0.1em 0.1em 0.1em 0.1em gray;overflow:auto}",
  map: '{"version":3,"file":"CartInMainPage.svelte","sources":["CartInMainPage.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { CartState } from \\"$lib/enums/enums\\";\\nimport ItemComponent from \\"$lib/components/Cart/CartComponent/CartItem.svelte\\";\\nexport let items;\\nexport let visibility = CartState.Load;\\nexport let handleDragDrop = (e) => {\\n};\\nexport let drop_zone;\\nfunction onKeyDown(e) {\\n  switch (e.keyCode) {\\n    case 75:\\n      changeVisibility();\\n      break;\\n  }\\n  console.log(e.keyCode);\\n}\\nfunction changeVisibility() {\\n  if (visibility === CartState.Hide || visibility === CartState.Load)\\n    visibility = CartState.Show;\\n  else\\n    visibility = CartState.Hide;\\n}\\n<\/script>\\r\\n\\r\\n<div class=\\"customClassNameBig {visibility.toString()}\\">\\r\\n    <div   \\r\\n    tabindex=\\"0\\"\\r\\n    role=\\"button\\"\\r\\n    class=\\"flyingButton\\" \\r\\n    on:click= {changeVisibility} \\r\\n    on:keydown = {onKeyDown}>\\r\\n<span>t</span>\\r\\n   </div>\\r\\n   <div class=\\"wrapper \\">\\r\\n    <div \\r\\n    tabindex=\\"0\\"\\r\\n    role=\\"button\\"\\r\\n    class=\\"itemsContainer\\"\\r\\n    on:drop={(e)=>{e.preventDefault();handleDragDrop(e)}}\\r\\n    ondragover=\\"return false\\" \\r\\n    bind:this={drop_zone}>\\r\\n    {#each items as item}\\r\\n        <ItemComponent value={item}  />\\r\\n    {/each} \\r\\n   </div>\\r\\n   <div class=\\"summary\\">\\r\\n    <p>Items count {items.length}</p>\\r\\n   </div>\\r\\n    </div>\\r\\n</div>\\r\\n<style>\\r\\n    .customClassNameBig {\\r\\n        position: fixed;\\r\\n        display: flex;\\r\\n        right: 0;\\r\\n        margin-top: 1%;\\r\\n        height: 85%;\\r\\n        width: 1%;\\r\\n        max-width: 20%;\\r\\n\\r\\n   }\\r\\n   \\r\\n   .customClassNameBig.Hide { \\r\\n    animation: slideRight 0.1s linear 0s 1 normal forwards;\\r\\n}\\r\\n   .customClassNameBig.Show { \\r\\n animation: slideLeft 0.1s linear 0s 1 normal forwards;\\r\\n}\\r\\n.flyingButton{\\r\\n        position:relative;\\r\\n        right: 0;  \\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        min-width: 1rem;\\r\\n        background-color: aliceblue;\\r\\n        border-top-left-radius: 60%;\\r\\n        border-bottom-left-radius: 60%;\\r\\n   }\\r\\n   .flyingButton>span{\\r\\n    position:relative;\\r\\n    rotate: -90deg;\\r\\n   }\\r\\n\\r\\n   @keyframes slideLeft{\\r\\n    from{\\r\\n    width:1%;\\r\\n    }\\r\\n    to{\\r\\n    width:20%;\\r\\n    }\\r\\n   }\\r\\n   @keyframes slideRight{\\r\\n    from{\\r\\n    width:20%;\\r\\n    }\\r\\n    to{\\r\\n    width:1%;\\r\\n    }\\r\\n   }\\r\\n    \\r\\n    .itemsContainer{  \\r\\n        width: 100%;\\r\\n        height: 93%;\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        flex-grow:1;\\r\\n        align-content: flex-start;\\r\\n        overflow: auto;\\r\\n    }\\r\\n    .summary{\\r\\n        position: sticky;\\r\\n        background-color: aliceblue;\\r\\n        bottom: 0;\\r\\n    }\\r\\n    .wrapper{\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        background-color: aliceblue;\\r\\n        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;\\r\\n        overflow: auto;\\r\\n    }\\r\\n\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkDI,iDAAoB,CAChB,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,CAAC,CACR,UAAU,CAAE,EAAE,CACd,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,EAAE,CACT,SAAS,CAAE,GAEhB,CAEA,mBAAmB,mCAAM,CACxB,SAAS,CAAE,yBAAU,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,CAAC,QAClD,CACG,mBAAmB,mCAAM,CAC3B,SAAS,CAAE,wBAAS,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,CAAC,QAC9C,CACA,2CAAa,CACL,SAAS,QAAQ,CACjB,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,SAAS,CAC3B,sBAAsB,CAAE,GAAG,CAC3B,yBAAyB,CAAE,GAChC,CACA,4BAAa,CAAC,mBAAI,CACjB,SAAS,QAAQ,CACjB,MAAM,CAAE,MACT,CAEA,WAAW,wBAAS,CACnB,IAAI,CACJ,MAAM,EACN,CACA,EAAE,CACF,MAAM,GACN,CACD,CACA,WAAW,yBAAU,CACpB,IAAI,CACJ,MAAM,GACN,CACA,EAAE,CACF,MAAM,EACN,CACD,CAEC,6CAAe,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAC,CACX,aAAa,CAAE,UAAU,CACzB,QAAQ,CAAE,IACd,CACA,sCAAQ,CACJ,QAAQ,CAAE,MAAM,CAChB,gBAAgB,CAAE,SAAS,CAC3B,MAAM,CAAE,CACZ,CACA,sCAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,SAAS,CAC3B,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,CACxC,QAAQ,CAAE,IACd"}'
};
const CartInMainPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { visibility = CartState.Load } = $$props;
  let { handleDragDrop = (e) => {
  } } = $$props;
  let { drop_zone } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.visibility === void 0 && $$bindings.visibility && visibility !== void 0)
    $$bindings.visibility(visibility);
  if ($$props.handleDragDrop === void 0 && $$bindings.handleDragDrop && handleDragDrop !== void 0)
    $$bindings.handleDragDrop(handleDragDrop);
  if ($$props.drop_zone === void 0 && $$bindings.drop_zone && drop_zone !== void 0)
    $$bindings.drop_zone(drop_zone);
  $$result.css.add(css$3);
  return `<div class="${"customClassNameBig " + escape(visibility.toString(), true) + " svelte-1l2c8fn"}"><div tabindex="0" role="button" class="flyingButton svelte-1l2c8fn" data-svelte-h="svelte-1n8fykr"><span class="svelte-1l2c8fn">t</span></div> <div class="wrapper  svelte-1l2c8fn"><div tabindex="0" role="button" class="itemsContainer svelte-1l2c8fn" ondragover="return false"${add_attribute("this", drop_zone, 0)}>${each(items, (item) => {
    return `${validate_component(CartItem, "ItemComponent").$$render($$result, { value: item }, {}, {})}`;
  })}</div> <div class="summary svelte-1l2c8fn"><p>Items count ${escape(items.length)}</p></div></div> </div>`;
});
const css$2 = {
  code: ".item.svelte-1d867li{padding:0.5%}.list.svelte-1d867li{position:absolute;background-color:white;margin:0;padding:0;display:inline-block;top:100%;left:0;right:0;border:10px;list-style-type:none;border-radius:0 0 10px 10px}.item.svelte-1d867li:hover{background-color:lightgray}.item.svelte-1d867li:last-child:hover{border-radius:0 0 10px 10px}",
  map: `{"version":3,"file":"HintList.svelte","sources":["HintList.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { slide } from \\"svelte/transition\\";\\nimport { quintOut, quintIn } from \\"svelte/easing\\";\\nexport let onClick = (inputValue) => {\\n};\\nexport let searchValue;\\nexport let products;\\n$:\\n  filtered = products.filter((item) => {\\n    if (searchValue === void 0 || searchValue === \\"\\")\\n      return true;\\n    let itemName = item.Name.toLowerCase();\\n    return itemName.includes(searchValue.toLowerCase());\\n  });\\n<\/script>\\r\\n\\r\\n<div class=\\"list\\" \\r\\nin:slide={{ delay: 20, duration: 300, easing: quintOut, axis: 'y' }} \\r\\nout:slide={{delay: 20, duration: 300, easing: quintIn, axis: 'y'}}>\\r\\n    {#if filtered !== undefined && filtered.length > 0}\\r\\n        {#each filtered as product}\\r\\n        <div class=\\"item\\"\\r\\n        tabindex=\\"0\\"\\r\\n        role=\\"button\\"\\r\\n        in:slide={{ delay: 20, duration: 300, easing: quintOut, axis: 'y' }}\\r\\n        out:slide={{delay: 0, duration: 100, easing: quintIn, axis: 'y'}}\\r\\n        on:click={()=>{onClick(product.Name)}}\\r\\n        on:keydown={(e)=>{}}\\r\\n        >\\r\\n        {product.Name}</div>\\r\\n        {/each}\\r\\n        {:else}\\r\\n        <div class=\\"item\\"\\r\\n        in:slide={{ delay: 20, duration: 300, easing: quintOut, axis: 'y' }}\\r\\n        out:slide={{delay: 0, duration: 100, easing: quintIn, axis: 'y'}}>\\r\\n        Brak produktów</div>\\r\\n    {/if}\\r\\n\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n.item\\r\\n{\\r\\n    padding: 0.5%;\\r\\n}\\r\\n    .list{\\r\\n        position: absolute;\\r\\n        background-color: white;\\r\\n        margin: 0; \\r\\n        padding:0;\\r\\n        display: inline-block;\\r\\n        top: 100%;\\r\\n        left: 0;\\r\\n        right: 0;\\r\\n        border: 10px;\\r\\n        list-style-type: none;\\r\\n        border-radius: 0 0 10px 10px;\\r\\n    }\\r\\n    .item:hover{\\r\\n        background-color: lightgray;\\r\\n      \\r\\n    }\\r\\n    .item:last-child:hover{\\r\\n        border-radius: 0 0 10px 10px;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAwCA,oBACA,CACI,OAAO,CAAE,IACb,CACI,oBAAK,CACD,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,CAAC,CACT,QAAQ,CAAC,CACT,OAAO,CAAE,YAAY,CACrB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,IAAI,CACrB,aAAa,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAC5B,CACA,oBAAK,MAAM,CACP,gBAAgB,CAAE,SAEtB,CACA,oBAAK,WAAW,MAAM,CAClB,aAAa,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAC5B"}`
};
const HintList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filtered;
  let { onClick = (inputValue) => {
  } } = $$props;
  let { searchValue } = $$props;
  let { products } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.searchValue === void 0 && $$bindings.searchValue && searchValue !== void 0)
    $$bindings.searchValue(searchValue);
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  $$result.css.add(css$2);
  filtered = products.filter((item) => {
    if (searchValue === void 0 || searchValue === "")
      return true;
    let itemName = item.Name.toLowerCase();
    return itemName.includes(searchValue.toLowerCase());
  });
  return `<div class="list svelte-1d867li">${filtered !== void 0 && filtered.length > 0 ? `${each(filtered, (product) => {
    return `<div class="item svelte-1d867li" tabindex="0" role="button">${escape(product.Name)}</div>`;
  })}` : `<div class="item svelte-1d867li" data-svelte-h="svelte-1h5acff">Brak produktów</div>`} </div>`;
});
const css$1 = {
  code: ".wrapper.svelte-1c4z66d{width:75%;position:relative}.searchBar.svelte-1c4z66d{min-height:2em;margin:0;padding-right:0;padding-left:0;font-size:1.2rem;border:0;width:100%}",
  map: '{"version":3,"file":"Searchbar.svelte","sources":["Searchbar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import HintList from \\"./HintList/HintList.svelte\\";\\nexport let searchValue;\\nexport let products;\\nlet focused = false;\\nfunction onClick(inputValue) {\\n  if (inputValue !== void 0)\\n    searchValue = inputValue;\\n}\\n<\/script>\\r\\n<div class = \\"wrapper\\">\\r\\n        <input\\r\\n        class=\\"searchBar\\"\\r\\n        type=\\"text\\"\\r\\n        placeholder=\\"Search for items...\\"\\r\\n        bind:value={searchValue}\\r\\n        on:input\\r\\n        on:focus={(e)=>{focused = !focused }  }\\r\\n        on:focusout= {(e)=>focused = !focused}\\r\\n        />\\r\\n        {#if searchValue !== undefined && searchValue !== \\"\\" && focused}\\r\\n        <HintList searchValue={searchValue} products={products} onClick={onClick} />\\r\\n        {/if}\\r\\n</div>\\r\\n<style>\\r\\n    .wrapper{\\r\\n        width: 75%;\\r\\n        position: relative;\\r\\n    }\\r\\n     .searchBar {\\r\\n        min-height: 2em;\\r\\n        margin: 0;\\r\\n        padding-right:0;\\r\\n        padding-left:0;\\r\\n        font-size: 1.2rem;\\r\\n        border: 0;\\r\\n        width: 100%;\\r\\n    }\\r\\n  \\r\\n</style>"],"names":[],"mappings":"AAwBI,uBAAQ,CACJ,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QACd,CACC,yBAAW,CACR,UAAU,CAAE,GAAG,CACf,MAAM,CAAE,CAAC,CACT,cAAc,CAAC,CACf,aAAa,CAAC,CACd,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IACX"}'
};
const Searchbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchValue } = $$props;
  let { products } = $$props;
  let focused = false;
  function onClick(inputValue) {
    if (inputValue !== void 0)
      searchValue = inputValue;
  }
  if ($$props.searchValue === void 0 && $$bindings.searchValue && searchValue !== void 0)
    $$bindings.searchValue(searchValue);
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  $$result.css.add(css$1);
  return `<div class="wrapper svelte-1c4z66d"><input class="searchBar svelte-1c4z66d" type="text" placeholder="Search for items..."${add_attribute("value", searchValue, 0)}> ${searchValue !== void 0 && searchValue !== "" && focused ? `${validate_component(HintList, "HintList").$$render($$result, { searchValue, products, onClick }, {}, {})}` : ``} </div>`;
});
class Position {
  static {
    this._Id = 0;
  }
  get TotalValue() {
    return this.Product.Price * this.Count;
  }
  constructor(Count, Product) {
    this.Id = Position._Id++;
    this.Count = 0;
    this.Product = Product;
  }
}
const css = {
  code: "section.svelte-p68uxq{display:flex}.content.svelte-p68uxq{width:100%;padding:1rem}.content.Hide.svelte-p68uxq{animation:svelte-p68uxq-slideRight 0.1s linear 0s 1 normal forwards}.content.Show.svelte-p68uxq{animation:svelte-p68uxq-slideLeft 0.1s linear 0s 1 normal forwards}@keyframes svelte-p68uxq-slideRight{from{padding-right:20%}to{padding-right:0%}}@keyframes svelte-p68uxq-slideLeft{from{padding-right:0%}to{padding-right:20%}}.menuBar.svelte-p68uxq{width:100%;display:inline-flex;flex-flow:row wrap;column-gap:5%;animation:svelte-p68uxq-SearchReverte 0.3s ease-in 0s 1 normal forwards}.menuBar.scrolled.svelte-p68uxq{margin-top:0.1%;position:fixed;top:0;width:75%;animation:svelte-p68uxq-SearchScrolled 0.3s linear 0s 1 normal forwards}@keyframes svelte-p68uxq-SearchScrolled{from{top:1;width:100%}to{top:0;width:75%}}@keyframes svelte-p68uxq-SearchReverte{from{top:0;width:75%}to{top:1;width:100%}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import ListViewTypes from \\"$lib/components/ListViewTypes/ListViewTypes.svelte\\";\\nimport ListGalery from \\"$lib/components/List/ListGalery.svelte\\";\\nimport CartComponent from \\"$lib/components/Cart/CartInMainPage.svelte\\";\\nimport SearchBar from \\"$lib/components/SearchBar/Searchbar.svelte\\";\\nimport { onMount } from \\"svelte\\";\\nimport { Cart } from \\"$lib/models/cart\\";\\nimport { ListType } from \\"$lib/enums\\";\\nimport { Position } from \\"$lib/models/position\\";\\nimport { CartState } from \\"$lib/enums/enums\\";\\nexport let data;\\nlet cart = new Cart();\\nlet position = [];\\nlet searchValue;\\nlet toggleView = ListType.Galery;\\nlet sideBar_show = CartState.Load;\\nlet drop_zone_1;\\nlet droppedProduct;\\nlet dropped_in;\\nlet activeEvent = \\"\\";\\nlet originalX = \\"\\";\\nlet originalY = \\"\\";\\ncart.Positions.subscribe((items) => {\\n  position = items;\\n});\\n$:\\n  itemsFiltered = data.products.items.filter((item) => {\\n    if (searchValue === void 0 || searchValue === \\"\\")\\n      return true;\\n    let itemName = item.Name.toLowerCase();\\n    return itemName.includes(searchValue.toLowerCase());\\n  });\\nlet searchbarVisible = true;\\nconst handleScroll = () => {\\n  const searchbar = document.getElementById(\\"menuBar\\");\\n  const searchbarHeight = searchbar ? searchbar.offsetTop : 0;\\n  searchbarVisible = window.scrollY <= searchbarHeight;\\n};\\nonMount(() => {\\n  window.addEventListener(\\"scroll\\", handleScroll);\\n  return () => {\\n    window.removeEventListener(\\"scroll\\", handleScroll);\\n  };\\n});\\nfunction handleDragEnd(e) {\\n  if (dropped_in == false) {\\n  }\\n  dropped_in = false;\\n}\\nfunction handleDragStart(item) {\\n  droppedProduct = item;\\n}\\nfunction handleDragDrop(e) {\\n  if (droppedProduct !== void 0) {\\n    cart.AddProductToCart(new Position(1, droppedProduct));\\n  }\\n  droppedProduct = void 0;\\n}\\nfunction handleTouchStart(e) {\\n  console.log(\\"start\\");\\n  originalX = e.target.offsetLeft - 10 + \\"px\\";\\n  originalY = e.target.offsetTop - 10 + \\"px\\";\\n  activeEvent = \\"start\\";\\n}\\nfunction handleTouchMove(e) {\\n  console.log(\\"start\\");\\n  let touchLocation = e.targetTouches[0];\\n  let pageX = Math.floor(touchLocation.pageX - 50) + \\"px\\";\\n  let pageY = Math.floor(touchLocation.pageY - 50) + \\"px\\";\\n  status = \\"Touch x \\" + pageX + \\" Touch y \\" + pageY;\\n  e.target.style.position = \\"absolute\\";\\n  e.target.style.left = pageX;\\n  e.target.style.top = pageY;\\n  activeEvent = \\"move\\";\\n}\\nfunction handleTouchEnd(e) {\\n  e.preventDefault();\\n  if (activeEvent === \\"move\\") {\\n    let pageX = parseInt(e.target.style.left) - 50;\\n    let pageY = parseInt(e.target.style.top) - 50;\\n    if (detectTouchEnd(drop_zone_1.offsetLeft, drop_zone_1.offsetTop, pageX, pageY, drop_zone_1.offsetWidth, drop_zone_1.offsetHeight)) {\\n      position = position.concat(e.target.id);\\n      e.target.style.position = \\"initial\\";\\n      dropped_in = true;\\n      status = \\"You dropped \\" + e.target.getAttribute(\\"id\\") + \\" into drop zone\\";\\n    } else {\\n      e.target.style.left = originalX;\\n      e.target.style.top = originalY;\\n      status = \\"You let the \\" + e.target.getAttribute(\\"id\\") + \\" go.\\";\\n    }\\n  }\\n}\\nfunction detectTouchEnd(x1, y1, x2, y2, w, h) {\\n  if (x2 - x1 > w)\\n    return false;\\n  if (y2 - y1 > h)\\n    return false;\\n  return true;\\n}\\n<\/script>\\r\\n<section > \\r\\n    <div class=\\"content {sideBar_show.toString()}\\">\\r\\n        <div id = \\"menuBar\\" class=\\"menuBar {searchbarVisible?'':'scrolled'}\\">\\r\\n            <SearchBar searchValue = {searchValue} products={data.products.items}/>\\r\\n            <ListViewTypes bind:value={toggleView} />\\r\\n        </div> \\r\\n            <ListGalery handleDragStart={handleDragStart} \\r\\n            handleDragEnd={handleDragEnd}\\r\\n            handleTouchStart={handleTouchStart}\\r\\n            handleTouchMove={handleTouchMove}\\r\\n            handleTouchEnd={handleTouchEnd}\\r\\n            items={itemsFiltered} \\r\\n            viewType={toggleView}\\r\\n            />     \\r\\n    </div>\\r\\n    <CartComponent handleDragDrop={handleDragDrop} items = {position}  bind:drop_zone={drop_zone_1} bind:visibility={sideBar_show}/>\\t\\r\\n</section>\\r\\n<style>\\r\\n   section{   \\r\\n    display: flex;\\r\\n   }\\r\\n\\r\\n   .content{   \\r\\n    width: 100%; \\r\\n    padding: 1rem;\\r\\n\\r\\n   }  \\r\\n .content.Hide{\\r\\n    animation: slideRight 0.1s linear 0s 1 normal forwards;\\r\\n   }\\r\\n   .content.Show{\\r\\n   animation: slideLeft 0.1s linear 0s 1 normal forwards;\\r\\n   }\\r\\n    @keyframes slideRight{ \\r\\n    from\\r\\n    {\\r\\n        padding-right:20%;\\r\\n    }\\r\\n    to\\r\\n    {       \\r\\n    padding-right:0%;\\r\\n    }\\r\\n   } \\r\\n   @keyframes slideLeft{\\r\\n    from{\\r\\n    padding-right:0%;\\r\\n    }\\r\\n    to{\\r\\n    padding-right:20%;\\r\\n    }\\r\\n   }\\r\\n  \\r\\n    .menuBar{  \\r\\n        width: 100%; \\r\\n        display:inline-flex;\\r\\n        flex-flow: row wrap;\\r\\n        column-gap: 5%; \\r\\n        animation: SearchReverte 0.3s ease-in 0s 1 normal forwards;     \\r\\n    }\\r\\n    .menuBar.scrolled{\\r\\n        margin-top:0.1%;\\r\\n        position: fixed;\\r\\n        top:0;\\r\\n        width: 75%; \\r\\n        animation: SearchScrolled 0.3s linear 0s 1 normal forwards;    \\r\\n    }\\r\\n\\r\\n    @keyframes SearchScrolled{ \\r\\n    from\\r\\n\\r\\n    {   top:1;\\r\\n        width:100%;\\r\\n    }\\r\\n    to\\r\\n    {   top:0;    \\r\\n        width:75%;\\r\\n    }\\r\\n   } \\r\\n\\r\\n   @keyframes SearchReverte{\\r\\n    from{\\r\\n        top:0;\\r\\n        width:75%;\\r\\n    }\\r\\n    to{\\r\\n        top:1;\\r\\n        width:100%;\\r\\n    }\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqHG,qBAAO,CACN,OAAO,CAAE,IACV,CAEA,sBAAQ,CACP,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAEV,CACF,QAAQ,mBAAK,CACV,SAAS,CAAE,wBAAU,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,CAAC,QAC/C,CACA,QAAQ,mBAAK,CACb,SAAS,CAAE,uBAAS,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,CAAC,QAC7C,CACC,WAAW,wBAAU,CACrB,IACA,CACI,cAAc,GAClB,CACA,EACA,CACA,cAAc,EACd,CACD,CACA,WAAW,uBAAS,CACnB,IAAI,CACJ,cAAc,EACd,CACA,EAAE,CACF,cAAc,GACd,CACD,CAEC,sBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,QAAQ,WAAW,CACnB,SAAS,CAAE,GAAG,CAAC,IAAI,CACnB,UAAU,CAAE,EAAE,CACd,SAAS,CAAE,2BAAa,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,CAAC,QACtD,CACA,QAAQ,uBAAS,CACb,WAAW,IAAI,CACf,QAAQ,CAAE,KAAK,CACf,IAAI,CAAC,CACL,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,4BAAc,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,CAAC,QACtD,CAEA,WAAW,4BAAc,CACzB,IAEA,CAAI,IAAI,CAAC,CACL,MAAM,IACV,CACA,EACA,CAAI,IAAI,CAAC,CACL,MAAM,GACV,CACD,CAEA,WAAW,2BAAa,CACvB,IAAI,CACA,IAAI,CAAC,CACL,MAAM,GACV,CACA,EAAE,CACE,IAAI,CAAC,CACL,MAAM,IACV,CACD"}`
};
function detectTouchEnd(x1, y1, x2, y2, w, h) {
  if (x2 - x1 > w)
    return false;
  if (y2 - y1 > h)
    return false;
  return true;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let itemsFiltered;
  let { data } = $$props;
  let cart = new Cart();
  let position = [];
  let searchValue;
  let toggleView = ListType.Galery;
  let sideBar_show = CartState.Load;
  let drop_zone_1;
  let droppedProduct;
  let activeEvent = "";
  let originalX = "";
  let originalY = "";
  cart.Positions.subscribe((items) => {
    position = items;
  });
  function handleDragEnd(e) {
  }
  function handleDragStart(item) {
    droppedProduct = item;
  }
  function handleDragDrop(e) {
    if (droppedProduct !== void 0) {
      cart.AddProductToCart(new Position(1, droppedProduct));
    }
    droppedProduct = void 0;
  }
  function handleTouchStart(e) {
    console.log("start");
    originalX = e.target.offsetLeft - 10 + "px";
    originalY = e.target.offsetTop - 10 + "px";
    activeEvent = "start";
  }
  function handleTouchMove(e) {
    console.log("start");
    let touchLocation = e.targetTouches[0];
    let pageX = Math.floor(touchLocation.pageX - 50) + "px";
    let pageY = Math.floor(touchLocation.pageY - 50) + "px";
    status = "Touch x " + pageX + " Touch y " + pageY;
    e.target.style.position = "absolute";
    e.target.style.left = pageX;
    e.target.style.top = pageY;
    activeEvent = "move";
  }
  function handleTouchEnd(e) {
    e.preventDefault();
    if (activeEvent === "move") {
      let pageX = parseInt(e.target.style.left) - 50;
      let pageY = parseInt(e.target.style.top) - 50;
      if (detectTouchEnd(drop_zone_1.offsetLeft, drop_zone_1.offsetTop, pageX, pageY, drop_zone_1.offsetWidth, drop_zone_1.offsetHeight)) {
        position = position.concat(e.target.id);
        e.target.style.position = "initial";
        status = "You dropped " + e.target.getAttribute("id") + " into drop zone";
      } else {
        e.target.style.left = originalX;
        e.target.style.top = originalY;
        status = "You let the " + e.target.getAttribute("id") + " go.";
      }
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    itemsFiltered = data.products.items.filter((item) => {
      return true;
    });
    $$rendered = `<section class="svelte-p68uxq"><div class="${"content " + escape(sideBar_show.toString(), true) + " svelte-p68uxq"}"><div id="menuBar" class="${"menuBar " + escape("", true) + " svelte-p68uxq"}">${validate_component(Searchbar, "SearchBar").$$render(
      $$result,
      {
        searchValue,
        products: data.products.items
      },
      {},
      {}
    )} ${validate_component(ListViewTypes, "ListViewTypes").$$render(
      $$result,
      { value: toggleView },
      {
        value: ($$value) => {
          toggleView = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(ListGalery, "ListGalery").$$render(
      $$result,
      {
        handleDragStart,
        handleDragEnd,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        items: itemsFiltered,
        viewType: toggleView
      },
      {},
      {}
    )}</div> ${validate_component(CartInMainPage, "CartComponent").$$render(
      $$result,
      {
        handleDragDrop,
        items: position,
        drop_zone: drop_zone_1,
        visibility: sideBar_show
      },
      {
        drop_zone: ($$value) => {
          drop_zone_1 = $$value;
          $$settled = false;
        },
        visibility: ($$value) => {
          sideBar_show = $$value;
          $$settled = false;
        }
      },
      {}
    )} </section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

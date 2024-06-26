import type { PostfixUnaryExpression } from "typescript";
import type { Position } from "./position"
import { writable, type Writable } from "svelte/store"

const STORAGE_KEY = 'cart_items';

function loadCartItems(): Position[] {
    if(typeof window !== 'undefined' && window.localStorage){
        const storedItems = window.localStorage.getItem(STORAGE_KEY);
        return storedItems ? JSON.parse(storedItems) : [];
    }
    return [];
}

function saveCartItems(items: Position[]) {
    if(typeof window !== 'undefined' && window.localStorage){
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
}

export class Cart
{
    static _id:number = 0
    public readonly Id: number
    public Positions:Writable<Position[]>;
    constructor(){
        this.Id = Cart._id++;
        this.Positions = writable<Position[]>(loadCartItems());
        this.Positions.subscribe(items => saveCartItems(items));
    }

    AddProductToCart(positionToAdd:Position):void {
        this.Positions.update(items=>{
            let index:number = items.findIndex(x => x.Product.Id === positionToAdd.Product.Id);
            let updatedItems:Position[];
            if(index !== undefined && index >= 0)
            {
                items[index].Count += positionToAdd.Count;
                updatedItems =[...items];
            }   
             else  
                updatedItems = [...items,positionToAdd];

            saveCartItems(updatedItems);
            return updatedItems
        });
    }
    RemoveProductFromCart(positionId:Number):void {
            this.Positions.update(items=>{
            const updatedItems= items.filter((ele,ind)=>ele.Id !== positionId);
            saveCartItems(updatedItems);
            return updatedItems;
        });
    }
    UpdatePosition(positionId:Number,count:number):void
    {
        this.Positions.update(items=>{
            let index:number = items.findIndex(x => x.Product.Id === positionId);
            let updatedItems:Position[];
            if(index !== undefined && index >= 0)
                items[index].Count = count;              
            
            updatedItems =[...items];
            saveCartItems(updatedItems);
            return updatedItems;
    });
    }
}
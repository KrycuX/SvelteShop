import type { Position } from "./position"

export class Cart
{
    static _id:number = 0
    public readonly Id: number
    public Positions :Position[]
    constructor(){
        this.Id = Cart._id++;
        this.Positions = [];
    }

    AddProductToCart(positionToAdd:Position):void {
        this.Positions.push(positionToAdd);
    }
    RemoveProductFromCart(positionId:number):void {
        this.Positions = this.Positions.filter((ele,ind)=>ele.Id === positionId);
    }
}
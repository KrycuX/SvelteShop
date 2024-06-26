import type { Product } from "$lib/types/types";


export class Position 
{
    static _Id:number=0;
    public Id:number;
    public Count: number;
    public Product: Product;
    public get TotalValue()
    {
        return this.Product.Price * this.Count;
    }

    constructor(Count: number,Product: Product)
    {
    this.Id = Position._Id++;
    this.Count = Count;
    this.Product = Product;
    }
}
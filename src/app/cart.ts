import { ProductModel } from "./productmodel";

export interface Cart {
    product:ProductModel;
    itemCount:number;
}

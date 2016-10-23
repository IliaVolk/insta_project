import {Tag} from "../tag/Tag";
export class Store{
  constructor(
    private name:string,
    private description:string,
    private url:string,
    private imageUrl:string,
    private tags:Tag[]){}
}

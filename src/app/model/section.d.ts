import { Block } from "./block";
import { Photo } from "./photo";

export type Section = {
    id: string;
    name: string;
    css: string;
    blocks: Block[];
    title:string;
    text: string;
    photos:Photo[];
}
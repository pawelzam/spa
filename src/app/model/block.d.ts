import { Photo } from "./photo";

export type Block = {
    title: string,
    content: string,
    photos: Photo[],
    css: string
}
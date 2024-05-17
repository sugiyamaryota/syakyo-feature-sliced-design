import { IBookPreview } from "../book/types";

export interface IResultsSearch {
    readonly total: string
    readonly books: IBookPreview[]
}
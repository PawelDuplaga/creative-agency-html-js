import SplitType from "split-type";
import Observer from "../classes/Observer";

export default class TextReveal extends Observer {
    
    constructor({ element }) {
        this.element = element;
        const splitted = new SplitType(element, { types: 'words' })
        this.splitWords = new SplitType(splitted.words, { types: 'words' })
    }
}
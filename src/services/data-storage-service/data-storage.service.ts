import { Word } from "../../models";
import { dataWords } from "./data-words";
export class DataStorageService  {

  static getListOfWords(): Array<Word> {
    return dataWords;
  };

  static save(key: string, value: any): void {
    localStorage.setItem(key, value)
  }

  static remove(key: string): void {
    localStorage.removeItem(key);
  }
}

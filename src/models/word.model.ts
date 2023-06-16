export interface Word {
  id: number;
  text: string;
  meaning: string;
  description: string;
  imageUrl?: string;
  addedDate: string;
  addedTimes: number;
  star: boolean;
}
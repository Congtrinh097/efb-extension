export class LocalStorageService  {
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, value)
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}

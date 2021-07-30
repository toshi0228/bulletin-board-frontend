const storage = window.localStorage;

class Storage {
  private readonly tokenName: string = "token";
  private readonly userName: string = "userName";

  get token(): string {
    return storage.getItem(this.tokenName) as string;
  }

  set token(newToken: string) {
    storage.setItem(this.tokenName, newToken);
  }

  get name(): string {
    return storage.getItem(this.userName) as string;
  }

  set name(newName: string) {
    storage.setItem(this.userName, newName);
  }
}

export default new Storage();

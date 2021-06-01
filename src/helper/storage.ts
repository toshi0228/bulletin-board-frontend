const storage = window.localStorage;

class Storage {
  private readonly tokenName: string = "token";

  get token(): string {
    return storage.getItem(this.tokenName) as string;
  }

  set token(newToken: string) {
    storage.setItem(this.tokenName, newToken);
  }
}

export default new Storage();

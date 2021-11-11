import jwt_decode from "jwt-decode";

const storage = window.localStorage;

class Storage {
  private readonly tokenName: string = "token";
  private readonly userName: string = "userName";

  get uid(): string {
    const token = storage.getItem(this.tokenName) as string;
    return jwt_decode<{ userId: string }>(token).userId; // jwtのtokenからuidを取得
  }

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

  clear() {
    storage.clear();
    console.log("クリアされました");
  }
}

export default new Storage();

export interface BulletinBoardQuery {
  userId?: number;
  title: string;
  contents: string;
}

// 掲示板データのリストデータ
export interface GetBulletinBoardResponse {
  id: number;
  userId: number; // サーバー側でJWTから取得する
  title: string;
  contents: string;
  user: { name: string };
  likes: { id: number; name: string }[];
}

// 編集する時の掲示板データ
export interface GetBulletinBoardByIdResponse {
  id: number;
  userId: number; // サーバー側でJWTから取得する
  title: string;
  contents: string;
}

// 編集する時の掲示板データ
export interface BulletinBoardEditQuery {
  id: number;
  userId?: number; // サーバー側でJWTから取得する
  title: string;
  contents: string;
}

// fetchしてくる掲示板情報
export interface BulletinBoardType {
  id: number;
  contents: string;
  title: string;
  userId: number;
  user: {
    name: string;
  };
  likes: { id: number; name: string }[];
}

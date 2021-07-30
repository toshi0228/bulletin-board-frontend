export interface BulletinBoardQuery {
  userId?: number;
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
}

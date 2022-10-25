export type StreamerType = {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
};

export interface StreamerProps {
  number: number;
  userId: string;
  displayName: string;
  picture: string;
  score: number;
}

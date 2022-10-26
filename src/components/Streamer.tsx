import { StreamerProps } from '../types/types';
import { Container, ItemNum, Points, ProfilePic } from '../styles/styles';
//created type declaration file for streamerListType

export const Streamer = ({
  number,
  displayName,
  picture,
  score,
}: StreamerProps) => {
  return (
    <Container>
      <ItemNum>{number + 1}</ItemNum>
      <div>
        <ProfilePic picture={picture} />
      </div>
      <div>{displayName}</div>
      <Points> {score}pt</Points>
    </Container>
  );
};

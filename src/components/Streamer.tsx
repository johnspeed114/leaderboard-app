import { StreamerProps } from '../types/types';
import { Container, ItemNum, Points, ProfilePic } from '../styles/styles';
//create type declaration file for streamerListType

export const Streamer = ({
  number,
  displayName,
  picture,
  score,
}: StreamerProps) => {
  return (
    <Container key={number}>
      <ItemNum>{number + 1}</ItemNum>
      <div>
        <ProfilePic picture={picture} />
      </div>
      <div>{displayName}</div>
      <Points> {score}pt</Points>
    </Container>
  );
};

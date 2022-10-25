import styled from 'styled-components';

interface ProfileProps {
  picture: string;
}

export const LeaderBoard = styled.div`
  @font-face {
    font-family: 'PingFang';
    src: url('./PingFang.tff') format('ttf');
  }
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  height: 48px;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  font-family: 'PingFangTC', 'Helvetica Neue';
`;
export const ItemNum = styled.div`
  width: 24px;
  text-align: center;
`;

export const Points = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-align: right;
`;

export const ProfilePic = styled.div<ProfileProps>`
  background: url(${(props) => props.picture});
  background-size: 100%;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: 2px solid rgb(255, 255, 255);
  background-repeat: repeat-y;
`;

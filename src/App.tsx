import { useEffect, useState } from 'react';
import { Streamer } from './components/Streamer';
import { StreamerType } from './types/types';
import { LeaderBoard } from './styles/styles';

//https://webcdn.17app.co/campaign/pretest/data.json

function App() {
  const [streamerList, setStreamersList] = useState<StreamerType[]>([]);
  useEffect(() => {
    const getData = async () => {
      await fetch('https://webcdn.17app.co/campaign/pretest/data.json')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('Something is off');
        })
        .then((resJson) => {
          setStreamersList(resJson);
        })
        .catch((error) => {
          console.log(error);
        });
      //error catch handle
    };
    getData();
  }, []);
  useEffect(() => {
    //Points randomizer with which streamer being added randomized
    const randomizer = () => {
      let newArr = [...streamerList];
      const eleSelect = Math.floor(Math.random() * (streamerList.length - 1));
      const status = Math.floor(Math.random() * 2);
      switch (status) {
        case 0:
          newArr[eleSelect].score =
            //Had to put 500 since I wasn't specified with what max number to randomly generate
            newArr[eleSelect].score + Math.floor(Math.random() * 500);
          newArr = newArr.sort((a, b) => b.score - a.score);
          setStreamersList(newArr);
          break;

        case 1:
          newArr[eleSelect].score =
            //Had to put 500 since I wasn't specified with what min number to randomly generate
            newArr[eleSelect].score - Math.floor(Math.random() * 500);
          newArr = newArr.sort((a, b) => b.score - a.score);
          setStreamersList(newArr);
          break;
        default:
          console.log('wrong status');
      }
    };
    const interval = setInterval(() => {
      randomizer();
    }, 100);

    return () => clearInterval(interval);
  }, [streamerList.length, streamerList]);
  return (
    <LeaderBoard>
      {streamerList.map((ele, index) => (
        <Streamer
          number={index}
          userId={ele.userID}
          displayName={ele.displayName}
          picture={ele.picture}
          score={ele.score}
          key={index}
        />
      ))}
    </LeaderBoard>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Streamer } from './components/Streamer';
import { StreamerType } from './types/types';
import { LeaderBoard } from './styles/styles';
//TODO: implement the react new 'USE' for fetchcache the json
//here is the json link
//https://webcdn.17app.co/campaign/pretest/data.json

function App() {
  const [streamerList, setStreamersList] = useState<StreamerType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        'https://webcdn.17app.co/campaign/pretest/data.json'
      );
      const data = await res.json();
      const item = data;
      setStreamersList(item);
      //error catch handle
    };
    getData();
  }, []);
  //for now lets just add the fetching and later move it into a new folder
  useEffect(() => {
    const randomizer = () => {
      let newArr = [...streamerList];
      const eleSelect = Math.floor(Math.random() * (streamerList.length - 1));
      const status = Math.floor(Math.random() * 2);
      switch (status) {
        case 0:
          newArr[eleSelect].score =
            newArr[eleSelect].score + Math.floor(Math.random() * 500);
          newArr = newArr.sort((a, b) => b.score - a.score);
          setStreamersList(newArr);
          break;

        case 1:
          newArr[eleSelect].score =
            newArr[eleSelect].score - Math.floor(Math.random() * 500);
          newArr = newArr.sort((a, b) => b.score - a.score);
          setStreamersList(newArr);
          break;
        default:
          console.log('wtf?');
      }
    };
    //need a randomizer which element in the array
    const interval = setInterval(() => {
      randomizer();
      //add all the other randomize && we do the set add /sub the points here
      //TODO: there is a gap between adding, it seems like it should be none should nonexistent
    }, 100);

    return () => clearInterval(interval);
  }, [streamerList.length, streamerList]);
  return (
    // TODO: unique key prop is have issues here for some reason
    <LeaderBoard>
      {streamerList.map((ele, index) => (
        <Streamer
          number={index}
          userId={ele.userID}
          displayName={ele.displayName}
          picture={ele.picture}
          score={ele.score}
        />
      ))}
    </LeaderBoard>
  );
}

export default App;

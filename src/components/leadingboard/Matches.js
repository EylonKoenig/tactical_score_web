import React, {useState ,useEffect} from "react";
import { useHistory } from 'react-router-dom';
import api from "../../server-api/api";

const Matches = () => {
    const history = useHistory();
    const [matches, setMatches] = useState([]);
    useEffect(() => {
        const getMatches = async () => {
            const matchesData = await api.getAllMatches() ;
            setMatches(matchesData.reverse());
        };
        getMatches();
    }, []);
    const handleGameClick = (gameID) => {
        history.push(`match/${gameID}`)
    };
    const convertDate = (date) => {
            let d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [day, month,year].join('/');
    };
    const setPlayerNames = (players) => {
      let playersName = [];
      players.forEach(player => playersName.push(player.label));
      return playersName.join(" ,");

    };

    return (
        <table className="table table-hover" style={{display:'block'}}>
            <thead>
            <tr style={{cursor:'auto'}}>
                <th scope="col">Date</th>
                <th scope="col">Score</th>
                <th scope="col">Maps</th>
                <th scope="col">Players Win</th>
                <th scope="col">Players Lost</th>
                <th scope="col">Picture</th>

            </tr>
            </thead>
            <tbody>
            {matches &&
                matches.reverse().map((game,i) => (
                    <tr key={i} onClick={() => handleGameClick(game["_id"])}>
                        <td>{convertDate(game["date"])}</td>
                        <td>{game["score"]}</td>
                        <td>{`${game.firstMap}/${game.secondMap}`}</td>
                        <td>{setPlayerNames(game.playersWon)}</td>
                        <td>{setPlayerNames(game.playersLost)}</td>
                        <td><img src="https://img.icons8.com/color/48/000000/image.png" style={{height:'40px', width:'40px'}} alt={'button'}/></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
};


export default Matches;
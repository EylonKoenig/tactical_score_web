import React, {useEffect, useState} from "react";
import api from "../../server-api/api";


const PlayersLeaderboard   = () => {
    const [players, setPlayers] = useState([]);
    const [bestPlayers, setBestPlayers] = useState(false);
    useEffect(() => {
        const getPlayers = async () => {
            let playersData = await api.getAllPlayers();
            function compare( a, b ) {
                let t1 = a.wonGames / (a.wonGames + a.lostGames);
                let t2 = b.wonGames / (b.wonGames + b.lostGames);
                if ( t1 < t2 ){
                    return 1;
                }
                if ( t1 > t2 ){
                    return -1;
                }
                return 0;
            }
            playersData =   playersData.sort( compare );
            setPlayers(playersData);
        };
        const getBestPlayers = async () => {

            setBestPlayers(await api.getBestPlayers());
        };
        getPlayers();
        getBestPlayers();
    }, []);
    console.log(bestPlayers);
    return (
        <div style={{display:'flex'}}>
            <table className="table table-hover" style={{display:'block'}}>
                <thead>
                <tr style={{cursor:'auto'}}>
                    <th scope="col">RK</th>
                    <th scope="col">Player</th>
                    <th scope="col">W/L Ratio</th>
                    <th scope="col">Won Games</th>
                    <th scope="col">Lost Games</th>
                    <th scope="col">K/D Ratio</th>
                    <th scope="col">Kill</th>
                    <th scope="col">Death</th>
                </tr>
                </thead>
                <tbody>
                {players &&
                players.map((player,i) => (
                    <tr>
                            <th scope="row">{i+1}</th>
                            <td>{player.name}</td>
                            <td>{player.winLoseRatio}</td>
                            <td>{player.wonGames}</td>
                            <td>{player.lostGames}</td>
                            <td>{player.kdRatio}</td>
                            <td>{player.kill}</td>
                            <td>{player.death}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
            <div>
                {bestPlayers &&
                <div className='top-players'>
                    <div>MOST GAMES WON: <span style={{fontWeight:"lighter"}}>{bestPlayers["most-games-won"].name}</span></div>
                    <div>MOST KILLS: <span style={{fontWeight:"lighter"}}>{bestPlayers["most-kils"].name}</span> </div>
                    <div>BEST K/D RATIO: <span style={{fontWeight:"lighter"}}>{bestPlayers["best-kd"].name}</span> </div>
                    <div>MOST GAME PLAYED: <span style={{fontWeight:"lighter"}}>{bestPlayers["most-game-play"].name}</span> </div>
                </div>}
            </div>
        </div>
    )
};


export default PlayersLeaderboard;
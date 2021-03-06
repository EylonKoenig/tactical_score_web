import React, {useEffect, useState} from "react";
import api from "../../server-api/api";


const PlayersLeaderboard   = () => {
    const [players, setPlayers] = useState([]);
    const [bestPlayers, setBestPlayers] = useState(false);
    useEffect(() => {
        const getPlayers = async () => {
            let playersData = await api.getAllPlayers();

            playersData = setFirstPlayerEven(playersData);
            setPlayers(playersData);

            let firstPlaceImg = document.getElementById('tr0').childNodes[0];
            let secPlaceImg = document.getElementById('tr1').childNodes[0];
            let thrPlaceImg = document.getElementById('tr2').childNodes[0];
            firstPlaceImg.innerHTML = "<img id='trophy' src=\"/images/iconfinder_Trophy-gold_85556.png\">"
            secPlaceImg.innerHTML = "<img id='trophy' src=\"/images/iconfinder_Metal-silver-blue_85535.png\">"
            thrPlaceImg.innerHTML = "<img id='trophy' src=\"/images/iconfinder_Metal-bronze-blue_85529.png\">"

        };
        const getBestPlayers = async () => {

            setBestPlayers(await api.getBestPlayers());
        };
        getPlayers();
        getBestPlayers();
    }, []);

    const setFirstPlayerEven = (players) => {
        let checkPlace = player => player.wonGames - player.lostGames;
        for(let i = 0; i<players.length;i++){
            console.log(checkPlace(players[i]));
            if(checkPlace(players[0]) !== checkPlace(players[i])) return players;
            if(players[0].winLoseRatio < players[i].winLoseRatio)
                [players[0], players[i]] = [players[i], players[0]];
        }
        return players;
    };


    return (
        <div className={'table-cover'}>
            <table className="table table-hover header-fixed" style={{display:'block'}}>
                <thead>
                <tr  style={{cursor:'auto'}}>
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
                    <tr id={`tr${i}`} key={i}>
                            <th scope="row">{i+1}</th>
                        <td><b>{player.name}</b></td>
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
            <div style={{margin: '0 auto'}}>
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
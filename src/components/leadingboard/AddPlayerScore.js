import React, {useEffect, useState} from "react";
import PlayerScore from "./playerScore/PlayerScoreComp";
import api from "../../server-api/api";
import { useHistory } from "react-router-dom";


const AddPlayerScore = (props) => {
    const {gameId,teamWon,teamLose} = props.location.state;
    let history = useHistory();
    const [images, setImages] = useState([]);
    useEffect(() => {
        const getImages = async () => {
            const images = await api.getImages(gameId);
            setImages(images);
        };
        getImages();
    }, []);

    const onChange = e =>{
        // const playerName = e.target.name;
    };
    const onSubmit  = async (e)  => {
        e.preventDefault();
        let allinputs = document.querySelectorAll('input[type="text"]');
        let data = new Map();
        for (let i = 0; i < allinputs.length; i++) {
            const playerStat = (allinputs[i].value).split('/');
            const playerKill = playerStat[0] ? parseInt(playerStat[0]) : 0;
            const playerDeath = playerStat[1] ? parseInt(playerStat[1]) : 0;
            const name = allinputs[i].name;
            if(!(data.has(`player${name}`))){
                data.set(`player${name}`,{kill:playerKill,death:playerDeath});
            } else {
                const totalKill = data.get(`player${name}`).kill+playerKill;
                const totalDeath = data.get(`player${name}`).death+playerDeath;
                data.set(`player${name}`,{kill:totalKill,death:totalDeath});
            }
        }
        const convertData =  JSON.stringify(Array.from(data.entries()));
        await api.sendPlayerScore(gameId,{playersData:convertData});
        history.push({
            pathname: '/matches',
        })

    };
    return (
            <div style={{display:'flex', flexDirection:"column", width:"%90"}}>
                <form onSubmit={(e) => onSubmit(e)}>
                {images &&
                images.map((side,i )=>
                    <PlayerScore key={i} teamWon={teamWon} teamLose={teamLose} onChange={onChange} image={images[i]} />
                )}
                    <div>
                        <input type="submit" className="btn btn-primary my-1" value="Submit"/>
                    </div>
                </form>
            </div>
    )
};


export default AddPlayerScore;
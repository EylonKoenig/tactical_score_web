import React, {useEffect, useState} from "react";
import api from "../../server-api/api";
import Select from "react-select";


const initialState = {
    players:[],

};


const TeamMaking = () => {
    const [players, setPlayers] = useState([]);
    const [submit, setSubmit] = useState(false);
    const [firstTeam, setFirstTeam] = useState(false);
    const [secondTeam, setSecondTeam] = useState(false);
    const [playersSelected, setPlayersSelected] = useState(null);


    useEffect(() => {
        const fetchPlayers = async () => {
            const result = await api.getAllPlayers();
            let playersData = [];
            result.forEach(player => {
                playersData.push({ value: player.name, label: player.name,rank:player.rank })
            });

            setPlayers(playersData.sort(compare));
        };
        fetchPlayers();
    }, []);
    const handleWinningChange = selectedOption => {
        setPlayersSelected(selectedOption);

    };
    const setTeams = () => {
        setPlayersSelected(playersSelected.sort(compare));
        const totalValuePlayers = playersSelected.reduce((a,b) => + a + + b.rank, 0);





        setSubmit(!submit);
    };

    const compare = ( a, b ) => {
        if ( a.rank < b.rank ){
            return -1;
        }
        if ( a.rank > b.rank ){
            return 1;
        }
        return 0;
    };

    return (
        <div className={'players-score'}>
            {!submit ?
                <div className={'player-score'} style={{display:'block'}}>
                    <div className="form-group" style={{height:'400px'}}>
                        <Select
                            value={playersSelected}
                            name='playersWon'
                            isMulti
                            onChange={handleWinningChange}
                            options={ players}
                        />
                        <small className="form-text">
                            Please select the players
                        </small>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-primary my-1" value="Submit" onClick={setTeams}/>
                    </div>
                </div>
            :   <div>




                </div>
            }
        </div>
    )
};


export default TeamMaking;
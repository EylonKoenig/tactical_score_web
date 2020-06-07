import React from "react";

const PlayerScore = (props) => {
    const {teamWon,teamLose,onChange,image} = props;
    const playersWon = [];
    const playersLose = [];
    for (let i = 0; i < teamWon.length; i++) {
        playersWon.push(
            <div key={i} className={'inputScore'}>
                <label htmlFor={teamWon[i].label} style={{marginRight:'5px'}}>{teamWon[i].label +" score   "}</label>
                <input type={"text"}
                       name={teamWon[i].label}
                       placeholder='**/**'
                       onChange={onChange}
                       pattern={'[0-9]{1,3}/[0-9]{1,3}'}
                />
            </div>);
        playersLose.push(
            <div key={i} className={'inputScore'}>
                <label htmlFor={teamLose[i].label} style={{marginRight:'5px'}}>{teamLose[i].label +" score   "}</label>
                <input type={"text"}
                       name={teamLose[i].label}
                       placeholder='**/**'
                       onChange={onChange}
                       pattern={'[0-9]{1,3}/[0-9]{1,3}'}
                />
            </div>);
    }
    return (
            <div className={'players-score'}>
                <img src={`https://tactical.herokuapp.com/images/${image}`} style={{height:'400px', marginBottom:'10px',marginRight:'10px'}} alt={'score'}/>
                <div className={'player-score'} >
                    <div style={{display:'flex', flexDirection:"column"}}>
                        {playersWon}
                    </div>
                    <div style={{display:'flex', flexDirection:"column"}}>
                        {playersLose}
                    </div>
                </div>
            </div>
    )
};


export default PlayerScore;
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Select from 'react-select';

import api from '../../server-api/api';


const initialState = {
    firstMap:"",
    date:"",
    secondMap:"",
    score:"",
    playersWon:[],
    playersLost:[],

};


const AddMatch = () => {
    let history = useHistory();
    const [players, setPlayers] = useState({ hits: [] });
    const [formData, setFormData] = useState(initialState);
    const [file, setFiles] = useState(null);
    useEffect(() => {
        const fetchPlayers = async () => {
            const result = await api.getAllPlayers();
            let playersData = [];
            result.forEach(player => {
               playersData.push({ value: player.name, label: player.name })
            });
            setPlayers(playersData);
        };
        fetchPlayers();
    }, []);

    const [selectedWinningTeam, setSelectedWinningTeam] = useState(null);
    const [selectedLosingTeam, setSelectedLosingTeam] = useState(null);
    const [isUpload, setIsUpload] = useState(false);
    const [gameId, setGameId] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleWinningChange = selectedOption => {
        setSelectedWinningTeam(selectedOption);
        setFormData({...formData,playersWon: selectedOption})

    };
    const handleLosingChange = selectedOption => {
        setSelectedLosingTeam(selectedOption);
        setFormData({...formData,playersLost: selectedOption})
    };


    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e) =>{
        e.preventDefault();
        setIsUpload(true);
        const res =await api.sendGameData(formData);
        setGameId(res.data._id);
    };
    const handleFilesChange = e => {
        setFiles(e.target.files);
    };

    const handleImageSubmit = async  (e) =>  {
        e.preventDefault();
        const data = new FormData();
        if(!imageValidtion()[0]) {
            alert(imageValidtion()[1]);
            return
        }
        setLoading(true);
        for (let i = 0; i < file.length; i++) {
            data.append(`photos`, file[i])
        }
        data.append("gameId",gameId);
        await api.uploadImages(data);
        history.push({
            pathname: '/add_player_score',
            state: { gameId:gameId, teamWon:formData.playersWon, teamLose:formData.playersLost}
        })
    };
     const imageValidtion = function(){
         if(file.length > 6 ) {
             return [false,"maximum images to upload is 6"]
         }
         for (let i = 0; i < file.length; i++) {
             if(file[i].size > 10000000) return [false,"image size is to large"];
         }
         return [true]
     };

    return (
        <div>
            {!isUpload ?
            <div style={{display:'flex', flexDirection:"column",alignItems:"center"}}>

                <form className="form" onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                        <div className="form-group">
                            <small className="form-text">
                                Game Date
                            </small>
                            <input type="date" placeholder="Date" name="date" onChange={onChange}/>
                        </div>
                        <div className="form-group" style={{display:'flex'}}>
                        <input list="browsers" placeholder='select first map' name='firstMap' onChange={onChange}/>
                            <datalist id="browsers">
                                <option value="AVALANCHE"/>
                                <option value="BLAZE-OF-GLORY"/>
                                <option value="BLISTER"/>
                                <option value="CIA"/>
                                <option value="CONUNDRUM"/>
                                <option value="CROSSFIRE"/>
                                <option value="DRAGON"/>
                                <option value="DROUGHT"/>
                                <option value="ESKERO"/>
                                <option value="FORGE"/>
                                <option value="OPERACIÓN FROZEN SCAR"/>
                                <option value="GETAWAY"/>
                                <option value="GLASGOW KISS"/>
                                <option value="ICY BREEZE"/>
                                <option value="NOVEMBER RAIN"/>
                                <option value="OILRIG "/>
                                <option value="OMEGA "/>
                                <option value="RAPID WATERS "/>
                                <option value="REBIRTH "/>
                                <option value="SCOPE "/>
                                <option value="SPYNET "/>
                                <option value="TERROR MANSION "/>
                                <option value="THANASSOS "/>
                                <option value="THUNDER BALL "/>
                                <option value="YARMOUTH TRAINSTATION "/>
                                <option value="TROOPER "/>
                                <option value="UNBREAKABLE "/>
                                <option value="VERDON "/>
                                <option value="RESURREWINTER RANSOMCTION "/>
                                <option value="Other"/>
                            </datalist>
                        <small className="form-text">
                        </small>
                        <input list="browsers" placeholder='select second map' name='secondMap' onChange={onChange}/>
                        <datalist id="browsers">
                            <option value="AVALANCHE"/>
                            <option value="BLAZE-OF-GLORY"/>
                            <option value="BLISTER"/>
                            <option value="CIA"/>
                            <option value="CONUNDRUM"/>
                            <option value="CROSSFIRE"/>
                            <option value="DRAGON"/>
                            <option value="DROUGHT"/>
                            <option value="ESKERO"/>
                            <option value="FORGE"/>
                            <option value="OPERACIÓN FROZEN SCAR"/>
                            <option value="GETAWAY"/>
                            <option value="GLASGOW KISS"/>
                            <option value="ICY BREEZE"/>
                            <option value="NOVEMBER RAIN"/>
                            <option value="OILRIG "/>
                            <option value="OMEGA "/>
                            <option value="RAPID WATERS "/>
                            <option value="REBIRTH "/>
                            <option value="SCOPE "/>
                            <option value="SPYNET "/>
                            <option value="TERROR MANSION "/>
                            <option value="THANASSOS "/>
                            <option value="THUNDER BALL "/>
                            <option value="YARMOUTH TRAINSTATION "/>
                            <option value="TROOPER "/>
                            <option value="UNBREAKABLE "/>
                            <option value="VERDON "/>
                            <option value="RESURREWINTER RANSOMCTION "/>
                            <option value="Other"/>
                        </datalist>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Score" name="score" onChange={onChange}/>
                        <small className="form-text">
                            enter score with - between
                        </small>
                    </div>
                    <div className="form-group">
                        <Select
                            value={selectedWinningTeam}
                            name='playersWon'
                            isMulti
                            onChange={handleWinningChange}
                            options={ players}
                        />
                        <small className="form-text">
                            Please enter the <b>wining team players</b>
                        </small>
                    </div>
                    <div className="form-group">
                        <Select
                            value={selectedLosingTeam   }
                            onChange={handleLosingChange}
                            name='playersLost   '
                            options={players}
                            isMulti
                        />
                        <small className="form-text">
                            Please enter the <b>losing team players</b>
                        </small>
                    </div>
                    <div className="form-group">
                    </div>
                    <input type="submit" className="btn btn-primary my-1" value="Submit"/>
                </form>

            </div>
                : <div>{!loading ? <div>
                <form  encType="multipart/form-data" onSubmit={(e) => handleImageSubmit(e)} >
                <label htmlFor="files">Select files:</label>
                <input id={'fileToUpload'}
                type="file"
                name="photos"
                accept="image/*"
                multiple
                required
                onChange={handleFilesChange}/>
                <small className="form-text">
                Please add all results photo
                </small>
                <input type="submit" className="btn btn-primary my-1" value="Submit"/>
                </form>
                </div>
             : <div className="loader">Loading...</div>
                }
                </div>
            }
        </div>
    )
};

export default AddMatch;
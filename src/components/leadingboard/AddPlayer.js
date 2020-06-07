import React,{useState} from "react";

import api from '../../server-api/api';

const AddPlayer = () => {
    const [name, setName] = useState("");
    const [playerUpload,setPlayerUpload] = useState(false);
    const [alert,setAlert] = useState("");
    const onSubmit = async (e) =>{
        e.preventDefault();
        const res = await api.addUser({name:name});
        document.getElementById("PlayerForm").reset();
        if(res){
            setAlert("Player successfully uploaded");
            const timer = setTimeout(() => {
                setAlert(false);
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            setAlert("Name must be unique");
            const timer = setTimeout(() => {
                setAlert(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    };
    return (
        <div style={{display:'flex', flexDirection:"column",alignItems:"center"}}>
            {alert &&
            <div>
                <p>{alert}</p>
            </div>
            }

            <form id="PlayerForm" onSubmit={onSubmit}>
                <div className={'inputScore'}>
                    <label htmlFor={"addPlayer"} style={{marginRight:'5px'}}>{" Player Name:     "}</label>
                    <input type={"text"}
                           name={"addPlayer"}
                           onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" className="btn btn-primary my-1" value="Submit"/>
                </div>
            </form>
        </div>
    )
};


export default AddPlayer;
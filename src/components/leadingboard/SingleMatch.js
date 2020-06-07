import React, {useEffect, useState} from "react";
import api from "../../server-api/api";

const SingleMatch = (props) => {
    const {matchID} = props;
    const [images, setImages] = useState([]);
    useEffect(() => {
        const getMatches = async () => {
            const imagesData =await api.getImages(matchID);
            setImages(imagesData);
        };
        getMatches();
    }, []);
    return (
        <div style={{display:'flex', flexDirection:"column",alignItems:"center"}}>
            {images &&
                images.map((image,i) =><img key={i} src={`http://localhost:5000/images/${images[i]}`} style={{height:'400px', marginBottom:'10px'}} alt={'score-match'}/>)
            }
        </div>
    )
};


export default SingleMatch;
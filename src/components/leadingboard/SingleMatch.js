import React, {useEffect, useState} from "react";
import api from "../../server-api/api";

const SingleMatch = (props) => {
    const {matchID} = props;
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getMatches = async () => {
            const imagesData =await api.getImages(matchID);
            setImages(imagesData);
            setLoading(false);
        };
        getMatches();
    }, []);
    return (
        <div style={{display:'flex', flexDirection:"column",alignItems:"center"}}>
            {loading ? <div className="loader">Loading...</div> :
                <div>
`                {images.length>0 ?
                    images.map((image,i) =><img key={i} src={`https://tactical.herokuapp.com/images/${images[i]}`} style={{height:'400px', marginBottom:'10px'}} alt={'score-match'}/>)
                    :<div>
                        This match don't have any images
                    </div>
                }
`                </div>
            }
        </div>
    )
};


export default SingleMatch;
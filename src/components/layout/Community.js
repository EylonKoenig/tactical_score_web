import React from 'react';

const Community = () => {

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div id={'comunirecu'}>
                    <img src={'http://tacticalops.sytes.net/imagen/teamspeak.png'} alt={'teamspeak'}/>
                    <a href="http://www.teamspeak.com/?page=downloads" className="new" >TEAMSPEAK</a>
                    <div style={{color:"white"}}>
                        שרת טים ספיק 51.68.188.225
                    </div>
                </div>
                <div id={'comunirecu'}>
                    <a href="http://www.teamspeak.com/?page=downloads" className="new" >שרתי משחק</a>
                    <div style={{color:"white"}}>
                        שרת פאבליק #1 212.80.207.179:7777
                        <br/>
                        שרת פיקאפ #1 212.80.207.179:8888
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Community;

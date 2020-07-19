import React from 'react';

const Community = () => {

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div id={'comunirecu'}>
                    <img src={'http://tacticalops.sytes.net/imagen/teamspeak.png'} alt={'teamspeak'}/>
                    <section style={{textDecoration:"underline"}}>TeamSpeak Download</section>
                    <a href="/" className="new" >https://teamspeak.com/en/downloads/</a>
                    <br/>
                    <br/>
                    <a href="http://www.teamspeak.com/?page=downloads" className="new" style={{textDecoration:"underline"}}>TeamSpeak Server</a>
                    <div style={{color:"white"}}>
                        51.68.188.225
                        <br/>
                        <a href="ts3server://51.68.188.225">Click to connect</a>
                    </div>
                </div>
                <div id={'comunirecu'}>
                    <section style={{textDecoration:"underline"}}>Tactical Ops Download</section>
                    <a href="/" className="new" >https://f2h.io/d18x4h7scsb6</a>
                    <br/>
                    <br/>
                    <section style={{textDecoration:"underline"}}>Tactical Ops Servers</section>
                    <div style={{color:"white"}}>

                         212.80.207.179:7777  Public Server
                        <br/>
                         212.80.207.179:8888  Pickup Server
                    </div>
                </div>
                <div id={'social'}>
                    <a  target="_blank" href="https://www.facebook.com/groups/TO.Israel/" className="new" ><img src="/images/logo.png" alt="Kiwi standing on oval" /></a>
                    <a  target="_blank" href="https://chat.whatsapp.com/BNBLsiI2LPY0sCzJOMNF3d" className="new" > <img src="/images/icons8-whatsapp-50.png" alt="whatsapp" /></a>




                </div>
            </div>

        </section>
    );
};

export default Community;

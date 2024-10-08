import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import Button from './Button';
import axios from 'axios';
import './DiscordDetails.css';
import {IoIosContact} from "react-icons/io";
import { SyncLoader } from 'react-spinners';

const DiscordDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    let [loading] = useState(true);

    // const handleLoadingState = () => {
    //     setLoading(!loading);
    // }

    useEffect(()=> {
        const message = document.querySelectorAll("#message")[0];
        const username = document.querySelectorAll('#username')[0];
        const avatar = document.querySelectorAll('#avatar')[0];
        axios.get(`https://searchdiscordid.herokuapp.com/user/${params.DiscordID}`)
            .then((res)=>{
                username.innerHTML = `<b>${res.data.user.username}<span style="color:rgb(183,185,188)">#${res.data.user.tag}</span></b>`;
                avatar.innerHTML = `<img src="https://cdn.discordapp.com/avatars/${res.data.user.id}/${res.data.user.avatar}.png" alt="Avatar de ${res.data.user.username}" class="info-avatar"/>`;
            }).catch((error)=>{
                console.log(error.name);
                if(error.name === "Error"){
                    message.innerHTML = `Ocorreu algum erro que não podemos explicar após requisitar a API.`;
                }
            });
    }, [params.DiscordID]);
    
    return (
        <div className="container">
            <div className="info-details-container">
                <div id="avatar" className="info-avatar"></div>
                <div className="loading">
                {loading && 
                <>
                    <SyncLoader color={"#fff"} size={15}/>
                    <h3>Carregando...</h3>
                    <span id="message">Aguarde um momento...</span>
                </>
                }
                </div>
                {!loading && 
                    <>
                        <IoIosContact className="icon-user"/>
                        <p id="username" className="info-details-username"></p>
                    </>
                }
            </div>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Back</Button>
            </div>
        </div>
    );
}

export default DiscordDetails;
import React, {useState} from 'react';
import Button from './Button';
import { useHistory } from 'react-router-dom';
import './Input.css';
import DiscordLogo from './discord_logo.png';

const Input = ({handleIDSearch}) => {
    const [inputData, setInputData] = useState('');
    const history = useHistory();
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const IsNumber = (n) => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    const handleIDRedir = () => {
        if(inputData !== ''){
            if(IsNumber(inputData) !== true){
                alert('Enter only numeric values');
            }else{
                if(inputData.length === 18){
                    history.push(`/user/${inputData}`);
                }else{
                    alert('Invalid User ID');
                }
            }
        }else{
            alert('No user ID was passed in the form');
        }
    }

    return (
        <div className="search-task-container">
                <img src={DiscordLogo} alt="Discord Logo" className="discord-logo"/>
            <br></br>
            <label className="search-label">User ID: </label>
            <input
                className="search-input"
                value={inputData} 
                onChange={handleInputChange}
                type="text"
            />
            <div className="search-button-container">
                <Button onClick={handleIDRedir}>Search</Button>
            </div>
        </div>
    )
}

export default Input;
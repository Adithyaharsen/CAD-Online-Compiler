import './namepage.scss';
import photo1 from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
import { React, useState } from 'react';

export const NamePage = () => {
    const navigate = useNavigate();
    const [Name, setName] = useState('');
    function sub(){
        const enteredName = Name;
        const Back = `/${enteredName}/homepage`;
        navigate(Back);
    }

    return (
      <div className="namepage">
        <div></div>
        <div className='midrow'>
            <div></div>
            <div className='midmid'>
                <div></div>
                <div>
                    <fieldset className='start'>
                        <div className='logo'><img src={photo1} alt="logo" /></div><br /><br />
                        <div><label>Enter Your Name : </label><input type='text' id="country" style={{ width: '100px', height: '25px' }} value={Name} onChange={(e) => setName(e.target.value)}/></div><br /><br />
                        <div><button type="button" class="btn btn-info" onClick={sub}>Submit</button></div>
                    </fieldset>
                </div>
                <div></div>
            </div>
            <div></div>
        </div>
        <div></div>
      </div>
    );
};
import './homepage.scss';
import photo1 from '../images/card1.png';
import photo2 from '../images/programming.png';
import photo3 from '../images/practice.png';
import photo4 from '../images/online.png';
import { React } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const HomePage = () => {

    const { Name } = useParams();
    const Back1 = `/${Name}/programs`;
    const Back2 = `/${Name}/programs`;
    const Back3 = `/${Name}/programs`;


    return (
      <div className="homepage">
        <div className='summa'></div>
        <div className='cards'><button className='card'></button></div>
        <div className='summa'></div>
        <div className='invokes'>
            <div className='firstrow'>
                <div className='summa'></div>
                <div className='container'>
                    <div><Link to={Back1}><button className='programming'></button></Link></div>
                    <div><h3>Compilers</h3></div>
                </div>
                <div className='summa'></div>
                <div className='container'><Link to={Back2}><button className='practice'></button></Link><br/><h3>Practice Questions</h3></div>
                <div className='summa'></div>
            </div>
            <div className='secondrow'>
                <div className='summa'></div>
                <div className='container'><Link to={Back3}><button className='online'></button></Link><br/><h3>Online Tournament</h3></div>
                <div className='summa'></div>
            </div>
        </div>
      </div>
    );
};
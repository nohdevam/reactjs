import React, { useState, useEffect } from 'react';
import MyButton from '../MyButton/MyButton';
import {Redirect} from 'react-router-dom';


const ColorGenerator = (props) => {

    
    // const {couleur} = useParams();
    
    const [ myColor, setMyColor ] = useState([]);
    const couleurRandom = () => {
        return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
    };

    const grille = myColor.map((item) => {
        return <div style={{ width: '200px', height: '200px', fontSize: 38, backgroundColor: item }} />;
    });

    
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <MyButton titre="Generer une div" myHandler={() => setMyColor([ ...myColor, couleurRandom() ])} />
            
            {myColor.length > 12 ? <Redirect to="/" /> : grille }
        </div>
    );
};

export default ColorGenerator;
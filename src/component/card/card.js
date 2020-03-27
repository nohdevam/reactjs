import React from 'react';
import styles from './card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ titre, contenu, id, estSeul }) => {
    return (
        
            <div className={styles.card}>
                <div>{titre}</div>
                <br />
                <div>{contenu}</div>
                <br />
                <br />
                <br />
                {estSeul ? null : <Link to={`/content/${id}`}>PLus de détails</Link>}

            </div>
    );
};

export default Card;
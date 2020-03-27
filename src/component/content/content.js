import React from 'react';
import styles from './content.module.css';
import Card from '../card/card';
import {useParams} from 'react-router-dom';

const Content = ({ data }) => {
    const {idCard} = useParams();

    const cardFromIdCard = (idCard) => {
        const item = data.find((item) => item.idItem === idCard);
        return <Card titre={item.titre} contenu={item.contenu} id={item.idItem} estSeul />
    }

    return (
        <div className={styles.content}>
            {idCard? ( cardFromIdCard (idCard)) : (
            data.map((item) => {
                return <Card titre={item.titre} contenu={item.contenu} id={item.idItem} />;
            })
    )}
        </div>
    );
};

export default Content;
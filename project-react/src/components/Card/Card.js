import styles from './Card.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {

    const cardId = props.cardId;
    const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);

    const dispatch = useDispatch();

    const toggleFavorite = (e) => {
        e.preventDefault();
        setFavoriteValue(!favoriteValue);
        dispatch(toggleCardFavorite(cardId));
    };

    const unLiked = (e) => {
        e.preventDefault();
        dispatch(removeCard(cardId))
     }

    return (
        <li className={styles.card}>{props.title}
            <button className={styles.star} onClick={toggleFavorite}><i className={"fa fa-star"}></i></button>
            <button className={styles.trash} onClick={unLiked}><i className={"fa fa-trash"}></i></button>
        </li>
        
    );
};

export default Card;
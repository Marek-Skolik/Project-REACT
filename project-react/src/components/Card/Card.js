import styles from './Card.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {

    const cardId = props.cardId;
    const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);

    const dispatch = useDispatch();

    const toggleFavorite = (e) => {
        e.preventDefault();
        setFavoriteValue(!favoriteValue);
        dispatch(toggleCardFavorite(cardId));
    };

    return (
        <li className={styles.card}>{props.title}
            <button onClick={toggleFavorite}><i className={"fa fa-star"}></i></button>
        </li>
        
    );
};

export default Card;
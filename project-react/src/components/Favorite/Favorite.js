import styles from './Favorite.module.scss';
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import Card from '../Card/Card';
import { getFavoriteCard } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';

const Favorite = () => {

const favoriteCards = useSelector(getFavoriteCard);

return (
        <Container>
          <PageTitle>FAVORITE</PageTitle>
              <div className={styles.favorite}>
                  <div className={styles.column}>
                    <ul className={styles.cards}>
                    {favoriteCards.map((favoriteCard) => (
                      <Card
                        key={favoriteCard.id}
                        cardId={favoriteCard.id}
                        title={favoriteCard.title}
                        isFavorite={favoriteCard.isFavorite}
                      />
                      ))}
                    </ul>
                  </div>
              </div>
        </Container>
      )
    }


export default Favorite;
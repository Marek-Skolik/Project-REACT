import Hero from '../components/Hero/Hero';
import SearchForm from '../components/SearchForm/SearchForm';
import Container from '../components/Container/Container';
import Lists from '../components/Lists/Lists';


const Home = () => {
    return (
        <Container>
            <Hero />
            <SearchForm />
            <Lists />
        </Container>
    );
};

export default Home;
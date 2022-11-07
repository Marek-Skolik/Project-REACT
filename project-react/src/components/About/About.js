import styles from './About.module.scss'
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";

const About = () => {
  return (
    <Container>
        <div className={styles.about}>
            <PageTitle>ABOUT</PageTitle>
        </div>
    </Container>
  );
};

export default About;
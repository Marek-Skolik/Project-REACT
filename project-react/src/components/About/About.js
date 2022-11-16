import styles from './About.module.scss'
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";

const About = () => {
  return (
    <Container>
        <div className={styles.about}>
            <PageTitle>ABOUT</PageTitle>
            <div className={styles.contents}>
              <p>Lorem ipsum</p>
            </div>
        </div>
    </Container>
  );
};

export default About;
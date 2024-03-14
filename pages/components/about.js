/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/About.module.css"

const About = () => {
  return (
    <section className={`section ${styles['section-about']} container`} id="about">
      <header className={`${styles['section-about__hero']} element-center`}>
        <h2 className="title--lg text-center">
          Vc tem uma <strong className="color-primary">idéia</strong>, nós <strong className="color-primary">sabemos</strong> como <strong className="color-primary">fazer</strong>
        </h2>
      </header>
      
      <img src="./hero-bri-lab.svg" className={`${styles['section-about__img-hero']}`} alt="Desenho de uma garota sentada usando um smartphone" />

      <article className={`${styles['section-about__article']}`}>
        <h2 className="title--sm">sobre a bri</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      </article>
    </section>
  )
};

export default About;

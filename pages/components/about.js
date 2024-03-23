/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <section
      className={`section ${styles["section-about"]} container`}
      id="about"
    >
      <header className={`${styles["section-about__hero"]} element-center`}>
        <h2 className="title--lg text-center">
          Vc tem uma <strong className="color-primary">idéia</strong>, nós{" "}
          <strong className="color-primary">sabemos</strong> como{" "}
          <strong className="color-primary">fazer</strong>
        </h2>
      </header>

      <img
        src="./hero-bri-lab.svg"
        className={`${styles["section-about__img-hero"]}`}
        alt="Desenho de uma garota sentada usando um smartphone"
      />

      <article className={`${styles["section-about__article"]}`}>
        <h2 className="title--sm">sobre a bri</h2>
        <p>
          Somos uma <strong className="color-primary">software house? </strong>
          &#129300; <br />
          Pode até ser, mas prerimos dizer que somos um laboratório de
          <strong className="color-primary"> produtos digitais</strong>.
        </p>
        <br />
        <p>
          Na Bri, estamos interessados em tornar a sua ideia real. Nós
          entendemos bem o que é ter um pensamento constante na cabeça e uma
          vontade incessante de fazer aquilo acontecer. Para isso, estamos
          prontos para ouvir a sua ideia de produto digital, seja ele um
          <strong className="color-primary"> software</strong> ou a nova versão
          do <strong className="color-primary">site</strong> da sua empresa.
          Todos os projetos são iniciados com um bom papo seguido de um processo
          bem definido.
        </p>
      </article>
    </section>
  );
};

export default About;

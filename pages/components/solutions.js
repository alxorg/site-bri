import React, { useEffect, useState } from "react";
import styles from "../../styles/Solutions.module.css";

const Solutions = () => {
  const [scale, setScale] = React.useState(1.18)
  const ref = React.useRef(null)

  const handlerScroll = () => {
    const scaleFactor = scale - (window.scrollY/7000)
    const result = scaleFactor > 1 ? scaleFactor : 1;
    setScale(result)
    console.log(ref.current.offsetTop)
  }

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`section ${styles["section-solutions"]} element-center`}
      id="solutions"
    >
      <div
        className={`${styles["section-solutions__effect"]}`}
        style={{ transform: `scale(${scale}, 1)` }}
      />
      <header className={`${styles["section-solutions__header"]}`}>
        <h2 className="text-center">nossas soluções</h2>
      </header>

      <article className={`${styles["section-solutions__solution"]}`}>
        <h2 className="title--sm color-secondary">Sistema web</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </article>

      <article className={`${styles["section-solutions__solution"]}`}>
        <h2 className="title--sm color-secondary">SaaS</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </article>

      <article className={`${styles["section-solutions__solution"]}`}>
        <h2 className="title--sm color-secondary">Site institucional </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </article>

      <article className={`${styles["section-solutions__solution"]}`}>
        <h2 className="title--sm color-secondary">Loja virtual</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </article>

      <article className={`${styles["section-solutions__solution"]}`}>
        <h2 className="title--sm color-secondary">Pagina de lançamento</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </article>
    </section>
  );
};

export default Solutions;

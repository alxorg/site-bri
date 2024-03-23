import React, { useEffect, useState } from "react";
import styles from "../../styles/Solutions.module.css";

const Solutions = () => {
  const [scale, setScale] = React.useState(1.18);
  const ref = React.useRef(null);

  const handlerScroll = () => {
    const scaleFactor = scale - window.scrollY / 7000;
    const result = scaleFactor > 1 ? scaleFactor : 1;
    setScale(result);
    console.log(ref.current.offsetTop);
  };

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
        <h2 className="title--sm color-secondary">
          Aplicativos web personalizados
        </h2>
        <p>
          Criamos aplicativos web sob medida para atender às necessidades
          exclusivas do seu negócio. Seja a empresa consolidada no mercado ou a
          startup inovadora, todos podem oferecer os seus serviços na internet
          de forma moderna.
        </p>
      </article>

      <article className={`${styles["section-solutions__solution"]}`}>
        <h2 className="title--sm color-secondary">Desenvolvimento de SaaS</h2>
        <p>
          "SaaS vai além de um sistema, trata-se de solucionar problemas. Por
          isso, oferecemos o serviço completo, pensando desde a experiência do
          usuário, desenvolvimento do software até a infraestrutura que você
          precisa para colocar o seu projeto online.
        </p>
      </article>

      <article className={`${styles["section-solutions__solution"]}`}>
        <h2 className="title--sm color-secondary">Site institucional </h2>
        <p>
          "Se você concorda que todas as empresas são mais potentes estando na
          internet, então você concorda que ter um site não é coisa do passado.
          A ideia é olharmos para o seu site como um cartão de visitas digital,
          com atenção na usabilidade, design e SEO.
        </p>
      </article>

      <article className={`${styles["section-solutions__solution"]}`}>
        <h2 className="title--sm color-secondary">
          Desenvolvimento de Loja virtual
        </h2>
        <p>
          O desenvolvimento de loja virtual customizado traz proximidade ao
          usuário. Aqui nós olharemos para a melhor estratégia no design da sua
          loja virtual e oferecemos uma forma para você não se preocupar com a
          atualização do seu estoque online.
        </p>
      </article>

      <article className={`${styles["section-solutions__solution"]}`}>
        <h2 className="title--sm color-secondary">Pagina de lançamento</h2>
        <p>
          Construa com a Bri a sua página de lançamento daquela sua ideia
          incrível! Destaque-se com uma página de lançamento que comunica de
          forma clara o que é o seu produto, sua ideia ou o seu serviço.
        </p>
      </article>
    </section>
  );
};

export default Solutions;

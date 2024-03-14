import React from "react";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={`${styles["section--contact"]}`} id="contact">
      <h1 className="title--sm text-center color-secondary">
        Queremos saber sobre a sua ideia
      </h1>

      <form className={`${styles["contact-form"]}`}>
        <fieldset className={`${styles['fieled-col-2']}`}>
          <label for="nome">nome</label>
          <input type="text" name="nome" id="nome" />
        </fieldset>

        <fieldset className={`${styles['fieled-col-2']}`}>
          <label for="email">e-mail</label>
          <input type="text" name="email" id="email" />
        </fieldset>

        <fieldset>
          <label for="assunto">assunto</label>
          <input type="text" name="assunto" id="assunto" />
        </fieldset>

        <fieldset>
          <label for="mensagem">mensagem</label>
          <textarea name="mensagem" id="mensagem" />
        </fieldset>

        <div className={styles["contact-form__action"]}>
          <button className="btn">Enviar</button>
        </div>
      </form>
      <div className={styles["circle-effect"]} />
    </section>
  );
};

export default Contact;

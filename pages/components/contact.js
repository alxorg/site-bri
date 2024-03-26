import React from "react";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const [state, setState] = React.useState({});

  const handlerChange = ({ target: { value, name } }) =>
    setState({ ...state, [name]: value });

  const sendEmail = async (ev) => {
    ev.preventDefault();
    console.log(state)
    const result = await fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify(state),
    }).then((json) => console.log(json));
    console.log(result, "<<<< here");
  };

  return (
    <section className={`${styles["section--contact"]}`} id="__">
      <h1 className="title--sm text-center color-secondary">
        Queremos saber sobre a sua ideia
      </h1>

      <form className={`${styles["contact-form"]}`}>
        <fieldset className={`${styles["fieled-col-2"]}`}>
          <label for="nome">nome</label>
          <input type="text" name="nome" id="nome" onChange={handlerChange} />
        </fieldset>

        <fieldset className={`${styles["fieled-col-2"]}`}>
          <label for="email">e-mail</label>
          <input type="text" name="email" id="email" onChange={handlerChange} />
        </fieldset>

        <fieldset>
          <label for="assunto">assunto</label>
          <input type="text" name="assunto" id="assunto" onChange={handlerChange} />
        </fieldset>

        <fieldset>
          <label for="mensagem">mensagem</label>
          <textarea name="mensagem" id="mensagem" onChange={handlerChange} />
        </fieldset>

        <div className={styles["contact-form__action"]}>
          <button className="btn" onClick={sendEmail}>
            Enviar
          </button>
        </div>
      </form>
      <div className={styles["circle-effect"]} />
    </section>
  );
};

export default Contact;

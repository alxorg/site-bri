import React from "react";
import styles from "../../styles/Contact.module.css";
import Image from "next/image";

const Contact = () => {
  const [state, setState] = React.useState({});
  const [loading, setLoading] = React.useState(false)
  const [sent, setSent] = React.useState(false)

  const handlerChange = ({ target: { value, name } }) =>
    setState({ ...state, [name]: value });

  const sendEmail = async (ev) => {
    ev.preventDefault();
    setLoading(true)
    const BASE_URL_API = process.env.NEXT_PUBLIC_API;
    fetch(`${BASE_URL_API}/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(state),
    }).then(({ status }) => {
      if (status === 200) {
        setTimeout(() => {
          setLoading(false);
          setSent(true);
        }, 2000);
      }
    });
  };
  if (sent) {
    return (
      <section className={`${styles["section--contact"]}`} id="__">
        <img
          src="./email-sent.svg"
          alt="Imagem ilustrativa de um garoto arremessando um avião de papel"
          className={`${styles["section--contact__image-email-sent"]}`}
        />
      </section>
    );
  }
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
          <input
            type="text"
            name="assunto"
            id="assunto"
            onChange={handlerChange}
          />
        </fieldset>

        <fieldset>
          <label for="mensagem">mensagem</label>
          <textarea name="mensagem" id="mensagem" onChange={handlerChange} />
        </fieldset>

        <div className={styles["contact-form__action"]}>
          {loading ? (
            <p className="color-secondary">só um instante...</p>
          ) : (
            <button className="btn" onClick={sendEmail}>
              Bora conversar
            </button>
          )}
        </div>
      </form>
      <div className={styles["circle-effect"]} />
    </section>
  );
};

export default Contact;

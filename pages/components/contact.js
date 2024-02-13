const Contact = () => {
  return (
    <section className="section" id="contact">
      <h1 className="title--sm text-center">Queremos saber sobre a sua ideia</h1>
      <form className="form container">
        <fieldset>
          <label for="nome">nome</label>
          <input type="text" name="nome" id="nome" />
        </fieldset>

        <fieldset>
          <label for="email">e-mail</label>
          <input type="text" name="email" id="email" />
        </fieldset>

        <fieldset>
          <label for="assunto">assunto</label>
          <input type="text" name="assunto" id="assunto" />
        </fieldset>

        <fieldset>
          <label for="mensagem">mensagem</label>
          <input type="text" name="mensagem" id="mensagem" />
        </fieldset>

        <div className="flex justify-end">
          <button className="btn">Enviar</button>
        </div>
      </form>
    </section>
  )
};

export default Contact;

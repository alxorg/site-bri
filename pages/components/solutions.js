import styles from "../../styles/Solutions.module.css"

const Solutions = () => {
  return (
    <section className={styles['section-solutions']} id="solutions">
      
      <header className={`${styles['section-solutions__header']} container`}>
        <h2 className="text-center">Nossas soluções</h2>
      </header>

      <article className={`${styles['section-solutions__solution']} container`}>
        <h2>Sistema web</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </article>

      <article className={`${styles['section-solutions__solution']} container`}>
        <h2>SaaS</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </article>

      <article className={`${styles['section-solutions__solution']} container`}>
        <h2>Site institucional </h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </article>

      <article className={`${styles['section-solutions__solution']} container`}>
        <h2>Loja virtual</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </article>

      <article className={`${styles['section-solutions__solution']} container`}>
        <h2>Pagina de lançamento</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </article>
    </section>
  )
};

export default Solutions;
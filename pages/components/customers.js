import styles from "../../styles/Customers.module.css"
const Customers = () => {
  return (
    <section className={`section ${styles['section-customers']} container`} id="customers">
      <header className={`${styles['section-customers__header']}`}>
        <h2 className="title--sm text-center">Quem conhece sabe</h2>
      </header>
    
      <div className={`${styles['section-customers__brands']} flex justify-space-around`}>
        <img src="./logotipo-rio-galeao-cliente-bri.png" />
        <img src="./logotipo-perticionee-cliente-bri.png" />
        <img src="./logotipo-ikone-automacoes-cliente-bri.png" />
      </div>
    </section>
  )
};

export default Customers;

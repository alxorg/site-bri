import styles from "../../styles/Customers.module.css"
const Customers = () => {
  return (
    <section className={`${styles['section-customers']} container`} id="customers">
      <h2 className="title--sm text-center">Quem conhece sabe</h2>
      <div className={`${styles['section-customers__brands']} flex justify-space-between`}>
        <img src="./logotipo-rio-galeao-cliente-bri.png" />
        <img src="./logotipo-ikone-automacoes-cliente-bri.png" />
        <img src="./logotipo-perticionee-cliente-bri.png" />
      </div>
    </section>
  )
};

export default Customers;

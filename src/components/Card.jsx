import styles from './card.module.css'

const Card = (props) => (
  <div class={styles.card}>
      {props.children}
  </div>
)

export default Card

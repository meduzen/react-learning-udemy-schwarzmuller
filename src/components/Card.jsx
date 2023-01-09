import styles from './card.module.css'

const Card = props => (
  <div className={styles.card}>
      {props.children}
  </div>
)

export default Card

import styles from './GrowingCircle.module.css';

const circle = props => {
  const userStyle = {
    backgroundColor: props.color
  }

  return (
    <div className={styles.Circle} style={userStyle}></div>
  )
}

export default circle;
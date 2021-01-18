import styles from './Controls.module.css';

const controls = props => {
  const customStyle = {
    backgroundColor: props.color
  }
  return (
    <div
      key={"hallo"} 
      className={styles.Controls} 
      style={customStyle}
      onClick={props.clicked}
    >
    </div>
  )
}

export default controls;
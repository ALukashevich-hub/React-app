import styles from './Characteristic.module.css';

const Characteristic = (props) => {
    return (
      <div className={styles.container}>
        <span className={styles.heading}>{props.char.heading}</span>
        <div className={styles.modContainer}>
          <span className={styles.sign}>{props.char.sign}</span>
          <div className={styles.modifier}>{props.char.modifier}</div>
        </div>
        <div className={styles.value}>{props.char.value}</div>
      </div>
    );
  }
  
export default Characteristic;
import styles from './Characteristic.module.css';

const Characteristic = (props) => {
    return (
      <div className={styles.container}>
        <span className={styles.heading}>{props.char.heading}</span>
        <div className={styles.modContainer}>
          <span className={styles.sign}>{props.char.sign}</span>
          <span className={styles.modifier}>{props.char.modifier}</span>
        </div>
        <span className={styles.value}>{props.char.value}</span>
      </div>
    );
  }
  
export default Characteristic;
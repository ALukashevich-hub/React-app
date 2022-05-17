import styles from './Initiative.module.css';

const test2 = {
    proficiency: 2,
    speed: 30,
    initiative: 2,
    armor: 10,
  };

const Initiative = () => {
    return (
      <div className={styles.container}>
        <span className={styles.heading}>INITIATIVE</span>
        <div className={styles.modContainer}>
          <span className={styles.sign}>+</span>
          <span className={styles.modifier}>{test2.initiative}</span>
        </div>
        <span className={styles.footer}>BONUS</span>
      </div>
    );
  }
  
  export default Initiative;
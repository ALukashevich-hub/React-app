import styles from './Proficiency.module.css';

const test2 = {
    proficiency: 2,
    speed: 30,
    initiative: 2,
    armor: 10,
  };

const Proficiency = () => {
    return (
      <div className={styles.container}>
        <span className={styles.heading}>PROFICIENCY</span>
        <div className={styles.modContainer}>
          <span className={styles.sign}>+</span>
          <span className={styles.modifier}>{test2.proficiency}</span>
        </div>
        <span className={styles.footer}>BONUS</span>
      </div>
    );
  }
  
  export default Proficiency;
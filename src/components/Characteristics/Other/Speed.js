import styles from './Speed.module.css';

const test2 = {
    proficiency: 2,
    speed: 30,
    initiative: 2,
    armor: 10,
  };

const Speed = () => {
    return (
      <div className={styles.container}>
        <span className={styles.heading}>WALKING</span>
        <div className={styles.modContainer}>
          <span className={styles.modifier}>{test2.speed}</span>
          <span className={styles.sign}>ft.</span>
        </div>
        <span className={styles.footer}>SPEED</span>
      </div>
    );
  }
  
  export default Speed;
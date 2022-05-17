import styles from './Armor.module.css';

const test2 = {
    proficiency: 2,
    speed: 30,
    initiative: 2,
    armor: 10,
  };

const Armor = () => {
    return (
      <div className={styles.container}>
        <span className={styles.heading}>ARMOR</span>
        <span className={styles.modifier}>{test2.armor}</span>
        <span className={styles.footer}>CLASS</span>
      </div>
    );
  }
  
  export default Armor;
import styles from './Other.module.css';
import Proficiency from './Proficiency';
import Initiative from './Initiative';
import Speed from './Speed';
import Armor from './Armor';

const Other = () => {
  return (
    <div className={styles.right}>
      <Proficiency></Proficiency>
      <Initiative></Initiative>
      <Speed></Speed>
      <Armor></Armor>
    </div>
  );
}

export default Other;
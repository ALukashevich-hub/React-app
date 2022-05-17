import styles from './SubSections.module.css';
import Left from './Left/Left';
import Middle from './Middle/Middle';
import Right from './Right/Right';

function SubSections() {
  return (
    <section className={styles.subSections}>
      <Left></Left>
      <Middle></Middle>
      <Right></Right>
    </section>   
  );
}

export default SubSections;

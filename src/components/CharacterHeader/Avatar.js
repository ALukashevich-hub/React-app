import styles from './Avatar.module.css';
import template from './template.png'

const background = {backgroundImage: `url(${template})`}
const Avatar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div style={background} className={styles.avatar}></div>
        <div className={styles.info}>
          <span className={styles.nickname}>Andrey Lukashevich</span>
          <span className={styles.dev}>Belarus Front-End Developer</span>
          <span className={styles.lvl}>Level 25</span>
        </div>
      </div>
    </div>
  );
}
export default Avatar;
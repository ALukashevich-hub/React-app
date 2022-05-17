import styles from './Characteristics.module.css';
import Characteristic from '../Characteristic/Characteristic';
import Other from './Other/Other';
const test = [{
  heading: "STR",
  sign: "-",
  modifier: "1",
  value: 9,
},
{
  heading: "DEX",
  sign: "+",
  modifier: "3",
  value: 16,
},
{
  heading: "CON",
  sign: "+",
  modifier: "1",
  value: 12,
},
{
  heading: "INT",
  sign: "+",
  modifier: "3",
  value: 17,
},
{
  heading: "WIS",
  sign: "+",
  modifier: "3",
  value: 16,
},
{
  heading: "CHA",
  sign: "+",
  modifier: "1",
  value: 12,
},
];
const listCharacteristic = test.map((char, key) => {
  return (
  <Characteristic char = {char} key={key.toString()}></Characteristic>
  );
});
const Characteristics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {listCharacteristic}
      </div>
      <Other></Other>
    </div>
  );
}

export default Characteristics;
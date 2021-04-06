import styles from './Thumbnail.module.css';

const Thumbnail = ({ id, firstColor, secondColor, onClick }) => {
  const clickHandler = () => {
    onClick(id);
  };

  return (
    <button
      className={styles.thumbnail}
      style={{
        background: `linear-gradient(${firstColor}, ${secondColor})`,
      }}
      onClick={clickHandler}
    ></button>
  );
};

export default Thumbnail;

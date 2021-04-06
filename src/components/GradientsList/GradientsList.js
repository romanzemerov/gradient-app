import Thumbnail from '../Thumbnail/Thumbnail';
import styles from './GradientsList.module.css';

const GradientsList = ({ list, clickThumbnailsHandler }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {list.map(({ id, points }) => (
          <li key={id} className={styles.listItem}>
            <Thumbnail
              id={id}
              firstColor={points[0].color}
              secondColor={points[1].color}
              onClick={clickThumbnailsHandler}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradientsList;

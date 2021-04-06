import { useState } from 'react';
import { ColorInput } from '../ColorInput/ColorInput';
import GradientsList from '../GradientsList/GradientsList';
import { nanoid } from 'nanoid';
import styles from './App.module.css';

const App = ({ gradientsList }) => {
  const [activeGradient, setActiveGradient] = useState(gradientsList[0]);

  const changeInputHandler = (changedId, changedValue) => {
    setActiveGradient(({ points }) => {
      const changedPointId = points.findIndex(({ id }) => id === changedId);
      const newChangedPoint = {
        ...points[changedPointId],
        color: changedValue,
      };
      const newGradient = [
        ...points.slice(0, changedPointId),
        newChangedPoint,
        ...points.slice(changedPointId + 1),
      ];

      return { id: nanoid(), points: newGradient };
    });
  };

  const clickThumbnailsHandler = (clickedId) => {
    const newActiveGradient = gradientsList.find(({ id }) => id === clickedId);
    setActiveGradient(newActiveGradient);
  };

  return (
    <div
      className={styles.app}
      style={{
        background: `linear-gradient(${activeGradient.points[0].color}, ${activeGradient.points[1].color})`,
      }}
    >
      <div className={styles.colorInputs}>
        <h1
          className={styles.header}
          style={{
            backgroundImage: `linear-gradient(to right, ${activeGradient.points[0].color}, ${activeGradient.points[1].color})`,
          }}
        >
          Choose your gradient
        </h1>
        <div className={styles.inner}>
          {activeGradient.points.map(({ id, color }) => (
            <ColorInput
              key={id}
              id={id}
              color={color}
              changeInputHandler={changeInputHandler}
            />
          ))}
        </div>
      </div>

      <GradientsList
        list={gradientsList}
        clickThumbnailsHandler={clickThumbnailsHandler}
      />
    </div>
  );
};

export default App;

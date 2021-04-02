import { ColorInput } from './ColorInput';
import { useState } from 'react';
import styles from './App.module.css';
import { nanoid } from 'nanoid';

const POINTS = [
  { id: nanoid(), color: '#FFCF71' },
  { id: nanoid(), color: '#2376DD' },
];

const App = () => {
  const [activeGradient, setActiveGradient] = useState(POINTS);

  const changeInputHandler = (changedId, changedValue) => {
    setActiveGradient((prevGradient) => {
      const changedPointId = prevGradient.findIndex(
        ({ id }) => id === changedId,
      );
      const newChangedPoint = {
        ...prevGradient[changedPointId],
        color: changedValue,
      };
      const newGradient = [
        ...prevGradient.slice(0, changedPointId),
        newChangedPoint,
        ...prevGradient.slice(changedPointId + 1),
      ];

      return newGradient;
    });
  };

  return (
    <div
      className={styles.app}
      style={{
        background: `linear-gradient(${activeGradient[0].color}, ${activeGradient[1].color})`,
      }}
    >
      <div className={styles.colorInputs}>
        <h1
          className={styles.header}
          style={{
            backgroundImage: `linear-gradient(to right, ${activeGradient[0].color}, ${activeGradient[1].color})`,
          }}
        >
          Choose your gradient
        </h1>
        <div className={styles.inner}>
          {activeGradient.map(({ id, color }) => (
            <ColorInput
              key={id}
              id={id}
              color={color}
              changeInputHandler={changeInputHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

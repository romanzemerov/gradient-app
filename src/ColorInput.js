import { HexColorPicker } from 'react-colorful';
import { useState, useRef, useCallback } from 'react';
import useClickOutside from './useClickOutside';
import styles from './ColorInput.module.css';

export const ColorInput = ({ id, color, changeInputHandler }) => {
  const popover = useRef();
  const [isColorPickerShowing, toggleColorPicker] = useState(false);

  const closeColorPicker = useCallback(() => toggleColorPicker(false), []);
  useClickOutside(popover, closeColorPicker);

  const handleChange = (e) => {
    if (e.target) {
      changeInputHandler(id, e.target.value);
    } else {
      changeInputHandler(id, e);
    }
  };

  const handleClick = () => {
    toggleColorPicker((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={handleClick}
        className={styles.thumbnail}
        style={{ backgroundColor: `${color}` }}
      ></button>
      {isColorPickerShowing && (
        <div className={styles.popover} ref={popover}>
          <HexColorPicker width={400} color={color} onChange={handleChange} />
        </div>
      )}
      <input
        className={styles.input}
        type="text"
        value={color}
        onChange={handleChange}
      ></input>
    </div>
  );
};

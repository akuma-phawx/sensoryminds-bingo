import { useState } from 'react';
import './button.styles.scss';
const Button = ({ text }) => {
  const [isDisabled] = useState(false);
  return (
    <div className="button-container">
      <button
        type="button"
        className={isDisabled ? 'nes-btn is-disabled' : 'nes-btn is-success'}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

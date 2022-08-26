import './text-input.styles.scss';
const TextInput = ({ updateValue, playerName, playerId }) => {
  return (
    <div className="input-container">
      <label htmlFor={playerId}>Player {playerId}:</label>
      <input
        id={playerName}
        type="text"
        placeholder="Enter Name.."
        value={playerName}
        onChange={(event) => updateValue(event.target.value)}
        className="nes-input"
      />
    </div>
  );
};

export default TextInput;

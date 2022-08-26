import TextInput from '../../components/text-input/text-input.component';
import Button from '../../components/button/button.component';
import './home.styles.scss';
import { generations } from '../../data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [gen, updateGen] = useState(0);
  const [version, updateVersion] = useState(0);
  const [player1, updatePlayer1] = useState('Default 1');
  const [player2, updatePlayer2] = useState('Default 2');

  return (
    <div className="home-container ">
      <h1>Welcome to Bingo Pkmn Version</h1>

      <div className="inputs-container">
        <TextInput
          playerName={player1}
          playerId={1}
          updateValue={updatePlayer1}
        />

        <TextInput
          playerName={player2}
          playerId={2}
          updateValue={updatePlayer2}
        />
      </div>
      <div>
        <div className="selectors-container">
          <div key="1" className="selector-block">
            <label htmlFor="gen_select">{'Generations'}</label>
            <div className="nes-select">
              <select
                required
                id="gen_select"
                value={gen}
                onChange={(event) => {
                  updateVersion(0);
                  updateGen(parseInt(event.target.value));
                }}
              >
                {generations.map((option, i) => {
                  return <option value={i}>{option.title}</option>;
                })}
              </select>
            </div>
          </div>
          <div key="2" className="selector-block">
            <label htmlFor="version_select">{'Versions'}</label>
            <div className="nes-select">
              <select
                required
                id="version_select"
                value={version}
                onChange={(event) =>
                  updateVersion(parseInt(event.target.value))
                }
              >
                {generations[gen].gameVersions.map((option, i) => {
                  return <option value={i}>{option.title}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <Link to={'/game'} state={{ player1, player2, gen, version }}>
        <Button text="Start Game" />
      </Link>
      <div className="linkContainer">
        <a href="https://github.com/akuma-phawx/sensoryminds-bingo">
          <i class="nes-octocat animate is-small" />
        </a>
      </div>
    </div>
  );
};

export default Home;

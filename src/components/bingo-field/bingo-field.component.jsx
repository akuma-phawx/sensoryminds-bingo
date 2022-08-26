import BingoBlock from '../bingo-block/bingo-block.component';
import './bingo-field.styles.scss';
import Button from '../button/button.component';
import { useLocation, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { generations } from '../../data';
import _ from 'lodash';

const BingoField = () => {
  const contestants = [];
  let navigate = useNavigate();
  const { player1, player2, gen, version } = useLocation().state;

  // Grid Settings
  const gridBlocks = 9;
  const gridTemplateColumns = '1fr '.repeat(3);
  const middleBlock = 4;

  // Shuffled Challenges
  const shuffledChallenges = _.shuffle(generations[gen].challenges);

  // Load the blocks in the div
  const setBoard = () => {
    const blockContent = [];

    for (let i = 0; i < gridBlocks; i++) {
      const isMiddleBlock = i === middleBlock;

      blockContent.push(
        <BingoBlock
          key={i}
          id={i}
          challenge={isMiddleBlock ? 'FREE' : shuffledChallenges[i]}
          isMiddleBlock={isMiddleBlock}
          onClickHandler={updateContestants}
        />
      );
      contestants.push(isMiddleBlock ? 3 : 0);
    }
    return blockContent;
  };

  // Update Contestants Array onClick
  const updateContestants = (index, newContestant) => {
    contestants[index] = newContestant;
  };

  // When 'Check for Winner' button is clicked
  const buttonHandler = () => {
    if (checkForWinner(1)) {
      alert(`Bingo from ${player1}! You will be redirected back home..`);
      navigate('/');
    } else if (checkForWinner(2)) {
      alert(`Bingo from ${player2}! You will be redirected back home..`);
      navigate('/');
    }
  };

  // Checks if winner exists
  const checkForWinner = (player) => {
    let hasWon = false;
    for (let i = 0; i <= 2; i++) {
      const offsetHorizontal = i * 3;
      const offsetVertical = i;

      //horizontal winner
      if (
        (contestants[0 + offsetHorizontal] === player ||
          contestants[0 + offsetHorizontal] === 3) &&
        (contestants[1 + offsetHorizontal] === player ||
          contestants[1 + offsetHorizontal] === 3) &&
        (contestants[2 + offsetHorizontal] === player ||
          contestants[2 + offsetHorizontal] === 3)
      ) {
        console.log(
          `Player ${player} has won on horizontal line number ${i + 1}`
        );
        hasWon = true;
        break;
      }
      //vertical winner
      else if (
        (contestants[0 + offsetVertical] === player ||
          contestants[0 + offsetVertical] === 3) &&
        (contestants[3 + offsetVertical] === player ||
          contestants[3 + offsetVertical] === 3) &&
        (contestants[6 + offsetVertical] === player ||
          contestants[6 + offsetVertical] === 3)
      ) {
        console.log(
          `Player ${player} has won on vertical line number ${i + 1}`
        );
        hasWon = true;
        break;
      }
    }
    if (!hasWon) {
      if (
        (contestants[0] === player || contestants[0] === 3) &&
        (contestants[4] === player || contestants[4] === 3) &&
        (contestants[8] === player || contestants[8] === 3)
      ) {
        console.log(`Player ${player} has won on vertical line number 1`);
        hasWon = true;
      } else if (
        (contestants[2] === player || contestants[0] === 3) &&
        (contestants[4] === player || contestants[4] === 3) &&
        (contestants[6] === player || contestants[6] === 3)
      ) {
        console.log(`Player ${player} has won on vertical line number 2`);
        hasWon = true;
      }
    }
    return hasWon;
  };
  return (
    <Fragment>
      <div className="introduction">
        <h1>
          <span className="player1">{player1}</span> vs{' '}
          <span className="player2">{player2}</span>
        </h1>
        <p>Game: {generations[gen].title}</p>
        <p>Version: {generations[gen].gameVersions[version].title}</p>
      </div>
      <div
        className="bingo-field"
        style={{ gridTemplateColumns: gridTemplateColumns }}
      >
        {setBoard()}
      </div>
      <div className="winnerButtonContainer" onClick={buttonHandler}>
        <Button text="Check for Winner" />
      </div>
    </Fragment>
  );
};

export default BingoField;

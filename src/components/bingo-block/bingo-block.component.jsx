import { useState } from 'react';
import './bingo-block.styles.scss';
const BingoBlock = ({ challenge, isMiddleBlock, id, onClickHandler }) => {
  const [blockContestant, updateBlockContestant] = useState('none');
  const [blockStyle, updateBlockStyle] = useState('');

  const contestBlock = () => {
    switch (blockContestant) {
      case 'none':
        updateBlockContestant('p1');
        updateBlockStyle('bingo-p1');
        onClickHandler(id, 1);
        break;
      case 'p1':
        updateBlockContestant('p2');
        updateBlockStyle('bingo-p2');
        onClickHandler(id, 2);
        break;
      case 'p2':
        updateBlockContestant('p1 p2');
        updateBlockStyle('bingo-both');
        onClickHandler(id, 3);
        break;
      case 'p1 p2':
        updateBlockContestant('none');
        updateBlockStyle('');
        onClickHandler(id, 0);
        break;
      default:
        break;
    }
  };

  return (
    <div
      id={id}
      className={`bingo-block ${
        isMiddleBlock ? 'bingo-both nohover' : ''
      } ${blockStyle}`}
      onClick={contestBlock}
    >
      {' '}
      {challenge}{' '}
    </div>
  );
};

export default BingoBlock;

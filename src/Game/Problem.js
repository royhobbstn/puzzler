import { inventory } from '../data/inventory.ts';
import * as React from 'react';
import EditorMain from './EditorMain.js';
import EditorSecondary from './EditorSecondary.js';
import { useParams } from 'react-router-dom';
import TabCards from './TabCards';
import { useDispatch, useSelector } from 'react-redux';

import { setValue, setValue2, setRevealButtonPressed, setIsRunning } from '../redux/gameStore.ts';

function Problem() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.game.value);
  const value2 = useSelector(state => state.game.value2);
  const revealButtonPressed = useSelector(state => state.game.revealButtonPressed);
  const totalSeconds = useSelector(state => state.game.totalSeconds);

  const { id } = useParams();
  const data = inventory[id];

  React.useEffect(() => {
    if (!data) {
      return;
    }

    // if nothing in main editor, place minimal in there.
    if (!value) {
      const transform = [];
      data.solution.forEach(line => {
        if (line.stage === 0) {
          transform.push(line.text);
        }
      });
      dispatch(setValue(transform.join('\n')));
    }

    const lastStage = Math.max(...data.solution.map(row => row.stage));

    // each stage is 30 seconds, + 30sec to read problem at beginning, + 30 seconds before final solution reveal
    const lastStageSeconds = lastStage * 30 + 60;

    if (!revealButtonPressed && totalSeconds > lastStageSeconds) {
      dispatch(setRevealButtonPressed(true));
      dispatch(setIsRunning(false));
    }

    let durationIndex = 0;
    for (let i = 0; i <= lastStage; i++) {
      let addExtra = 0;
      if (i === lastStage) {
        addExtra = 30;
      }
      if (totalSeconds >= 30 + addExtra + i * 30) {
        durationIndex = i;
      }
    }

    if (revealButtonPressed) {
      durationIndex = Infinity;
    }

    const transform = data.solution
      .map(line => {
        if (line.stage <= durationIndex) {
          return line.text;
        }
        return '  //';
      })
      .join('\n');

    if (JSON.stringify(value2) !== JSON.stringify(transform)) {
      dispatch(setValue2(transform));
    }
  }, [data, revealButtonPressed, totalSeconds, value, value2, dispatch]);

  if (!data) {
    return <p>Problem Not Found</p>;
  }

  return (
    <React.Fragment>
      <div style={{ padding: '1vh 1vw' }}>
        <div style={{ height: 'calc(35vh - 40px)', padding: '1vh 0 1vh 0vw' }}>
          <TabCards />
        </div>
        <div className="editor-area columns">
          <div className="editor-area column">
            <EditorMain />
          </div>
          <div className="column">
            <EditorSecondary />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Problem;

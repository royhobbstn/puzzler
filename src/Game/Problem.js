import { inventory } from '../data/inventory.js';
import * as React from 'react';
import EditorMain from './EditorMain.js';
import EditorSecondary from './EditorSecondary.js';
import { useParams } from 'react-router-dom';
import TabCards from './TabCards';
import { connect } from 'react-redux';

import { setValue, setValue2, setRevealButtonPressed, setIsRunning } from '../redux/gameStore.js';

function Problem({
  value,
  setValue,
  value2,
  setValue2,
  revealButtonPressed,
  setRevealButtonPressed,
  totalSeconds,
  setIsRunning,
}) {
  const { id } = useParams();
  const data = inventory[id];

  React.useEffect(() => {
    if (!data) {
      return;
    }

    // if nothing in main editor, place minimal in there.
    if (!value) {
      const transform = [];
      data.solution.solutionLines.forEach(line => {
        if (line.stage === 0) {
          transform.push(line.text);
        }
      });
      setValue(transform.join('\n'));
    }

    if (
      !revealButtonPressed &&
      totalSeconds > data.solution.stages[data.solution.stages.length - 1]
    ) {
      setRevealButtonPressed(true);
      setIsRunning(false);
    }

    let durationIndex = 0;
    for (let [index, duration] of data.solution.stages.entries()) {
      if (totalSeconds >= duration) {
        durationIndex = index;
      }
    }

    if (revealButtonPressed) {
      durationIndex = Infinity;
    }

    const transform = data.solution.solutionLines
      .map(line => {
        if (line.stage <= durationIndex) {
          return line.text;
        }
        return '  //';
      })
      .join('\n');

    if (JSON.stringify(value2) !== JSON.stringify(transform)) {
      setValue2(transform);
    }
  }, [
    data,
    revealButtonPressed,
    setRevealButtonPressed,
    setValue,
    setValue2,
    totalSeconds,
    value,
    value2,
    setIsRunning,
  ]);

  if (!data) {
    return <p>Problem Not Found</p>;
  }

  return (
    <React.Fragment>
      <div style={{ padding: '1vh 1vw' }}>
        <div style={{ height: 'calc(35vh - 40px)', padding: '1vh 0 1vh 0vw' }}>
          <TabCards data={data} id={id} />
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

const mapStateToProps = state => {
  return {
    value: state.game.value,
    value2: state.game.value2,
    revealButtonPressed: state.game.revealButtonPressed,
    totalSeconds: state.game.totalSeconds,
  };
};

const mapDispatchToProps = {
  setValue,
  setValue2,
  setRevealButtonPressed,
  setIsRunning,
};

export default connect(mapStateToProps, mapDispatchToProps)(Problem);

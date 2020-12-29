import { inventory } from './data/inventory.js';
import * as React from 'react';
import EditorMain from './EditorMain.js';
import EditorSecondary from './EditorSecondary.js';
import { useStopwatch } from 'react-timer-hook';
import { useParams } from 'react-router-dom';
import { convertToSeconds } from './util.js';
import TabCards from './TabCards.js';
import { connect } from 'react-redux';

import { setValue, setValue2, setTotalSeconds, setRevealButtonPressed } from './store.js';

function Problem({
  propRefs,
  value,
  setValue,
  value2,
  setValue2,
  revealButtonPressed,
  setRevealButtonPressed,
  setTotalSeconds,
  totalSeconds,
}) {
  const { seconds, minutes, hours, start, pause, reset } = useStopwatch({
    autoStart: true,
    offsetTimestamp: new Date().setSeconds(
      new Date().getSeconds() + Number(sessionStorage.getItem('savedSeconds') || 0),
    ),
  });
  const { id } = useParams();
  const data = inventory[id];

  // todo, these first 3... do we need them?
  propRefs.current.data = data;
  propRefs.current.id = id;
  propRefs.current.totalSeconds = totalSeconds;
  propRefs.current.pause = pause;
  propRefs.current.start = start;
  propRefs.current.reset = reset;

  sessionStorage.setItem('savedSeconds', totalSeconds);

  React.useEffect(() => {
    setTotalSeconds(convertToSeconds(hours, minutes, seconds));
  }, [seconds, minutes, hours, setTotalSeconds]);

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
      pause();
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
    pause,
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
            <EditorMain propRefs={propRefs} />
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
    value: state.value,
    value2: state.value2,
    revealButtonPressed: state.revealButtonPressed,
    totalSeconds: state.totalSeconds,
  };
};

const mapDispatchToProps = {
  setValue,
  setValue2,
  setTotalSeconds,
  setRevealButtonPressed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Problem);

import * as React from 'react';
import { Card } from 'semantic-ui-react';
import CategoryCard from './CategoryCard';
import ControlCard from './ControlCard';
import { MIN_DIFFICULTY, MIN_TIME, MAX_DIFFICULTY, MAX_TIME } from './constants.js';
import { sampleResults } from './aggregateData';
import { aggregateData } from './aggregateData.js';

const defaultCategoryData = aggregateData.categories.map(d => {
  return { name: d, isSelected: true };
});

export default function Filters({ setResults }) {
  const [categories, setCategories] = React.useState(defaultCategoryData);
  const [minDifficulty, setMinDifficulty] = React.useState(MIN_DIFFICULTY);
  const [maxDifficulty, setMaxDifficulty] = React.useState(MAX_DIFFICULTY);
  const [dsChecked, setDsChecked] = React.useState(true);
  const [algChecked, setAlgChecked] = React.useState(true);
  const [minTime, setMinTime] = React.useState(MIN_TIME);
  const [maxTime, setMaxTime] = React.useState(MAX_TIME);

  const onDifficultySliderChange = React.useCallback((minValue, maxValue) => {
    setMinDifficulty(minValue);
    setMaxDifficulty(maxValue);
  }, []);

  const onTimeSliderChange = React.useCallback((minValue, maxValue) => {
    setMinTime(minValue);
    setMaxTime(maxValue);
  }, []);

  const pressReset = () => {
    setCategories(defaultCategoryData);
    setMinDifficulty(MIN_DIFFICULTY);
    setMaxDifficulty(MAX_DIFFICULTY);
    setMinTime(MIN_TIME);
    setMaxTime(MAX_TIME);
    setDsChecked(true);
    setAlgChecked(true);
  };

  React.useEffect(() => {
    setResults(sampleResults);
  }, [setResults]);

  return (
    <div
      className="ui card"
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'hidden',
        overflowX: 'hidden',
      }}
    >
      <Card.Content>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            height: 'calc(48vh - 40px)',
            width: '23vw',
          }}
        >
          <CategoryCard categories={categories} setCategories={setCategories} />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '24vw',
            height: 'calc(48vh - 40px)',
            width: '36vw',
          }}
        >
          <ControlCard
            minDifficulty={minDifficulty}
            maxDifficulty={maxDifficulty}
            dsChecked={dsChecked}
            setDsChecked={setDsChecked}
            algChecked={algChecked}
            setAlgChecked={setAlgChecked}
            minTime={minTime}
            maxTime={maxTime}
            onDifficultySliderChange={onDifficultySliderChange}
            onTimeSliderChange={onTimeSliderChange}
            pressReset={pressReset}
          />
        </div>
      </Card.Content>
    </div>
  );
}

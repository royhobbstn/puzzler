import * as React from 'react';
import { Card, Checkbox } from 'semantic-ui-react';
import SliderView from 'semantic-ui-react-slider';

export default function ControlCard({ categories, setResults }) {
  //   const [difficultyRange, setDifficultyRange] = React.useState([0, 10]);
  //   const [timeRange, setTimeRange] = React.useState([0, 60]);
  const [minDifficulty, setMinDifficulty] = React.useState(0);
  const [maxDifficulty, setMaxDifficulty] = React.useState(10);
  const [dsChecked, setDsChecked] = React.useState(true);
  const [algChecked, setAlgChecked] = React.useState(true);
  const [minTime, setMinTime] = React.useState(0);
  const [maxTime, setMaxTime] = React.useState(30);

  const onDifficultySliderChange = React.useCallback((minValue, maxValue) => {
    setMinDifficulty(minValue);
    setMaxDifficulty(maxValue);
  }, []);

  const onTimeSliderChange = React.useCallback((minValue, maxValue) => {
    setMinTime(minValue);
    setMaxTime(maxValue);
  }, []);

  return (
    <Card style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <Card.Content header="Options" />

      {/* <SliderView
        onSliderValuesChange={onDifficultySliderChange}
        sliderMinValue={0}
        sliderMaxValue={10}
      /> */}

      {/* <SliderView
        onSliderValuesChange={onTimeSliderChange}
        sliderMinValue={0}
        sliderMaxValue={30}
      /> */}
    </Card>
  );
}

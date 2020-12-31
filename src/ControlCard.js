import * as React from 'react';
import { Card, Checkbox, Button } from 'semantic-ui-react';
import SliderView from 'semantic-ui-react-slider';

import { MIN_DIFFICULTY, MIN_TIME, MAX_DIFFICULTY, MAX_TIME } from './constants.js';

export default function ControlCard({
  minDifficulty,
  maxDifficulty,
  dsChecked,
  setDsChecked,
  algChecked,
  setAlgChecked,
  minTime,
  maxTime,
  onDifficultySliderChange,
  onTimeSliderChange,
  pressReset,
}) {
  return (
    <Card style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <Card.Content header="Options" />
      <Card.Content style={{ width: '100%', height: '100%', padding: '1em 2em .5em 2em' }}>
        <div style={{ display: 'block', width: '100%', height: '33%' }}>
          <p style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>Difficulty</p>
          <SliderView
            className="slider-view"
            selectedMinValue={minDifficulty}
            selectedMaxValue={maxDifficulty}
            onSliderValuesChange={onDifficultySliderChange}
            sliderMinValue={MIN_DIFFICULTY}
            sliderMaxValue={MAX_DIFFICULTY}
          />
        </div>
        <div style={{ display: 'block', width: '100%', height: '33%' }}>
          <p style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
            Time Estimate (minutes)
          </p>
          <SliderView
            className="slider-view"
            selectedMinValue={minTime}
            selectedMaxValue={maxTime}
            onSliderValuesChange={onTimeSliderChange}
            sliderMinValue={MIN_TIME}
            sliderMaxValue={MAX_TIME}
          />
        </div>

        <div style={{ display: 'block', width: '100%', height: '19%' }}>
          <Checkbox
            style={{ display: 'block', padding: '5px 0', float: 'left' }}
            label="Data Structures"
            onChange={() => {
              setDsChecked(!dsChecked);
            }}
            checked={dsChecked}
          />

          <Checkbox
            style={{ display: 'block', padding: '5px 10px', float: 'right' }}
            label="Algorithms"
            onChange={() => {
              setAlgChecked(!algChecked);
            }}
            checked={algChecked}
          />
        </div>

        <div style={{ clear: 'both', display: 'block', width: '100%', height: '15%' }}>
          <Button style={{ float: 'right' }} onClick={pressReset}>
            Reset
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

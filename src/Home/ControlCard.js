import * as React from 'react';
import { Card, Checkbox } from 'semantic-ui-react';
import SliderView from 'semantic-ui-react-slider';
import { useDispatch, useSelector } from 'react-redux';
import { MIN_EFFORT, MAX_EFFORT } from '../data/inventory';
import {
  setDsChecked,
  setAlgChecked,
  setEffortSlider,
  setBegChecked,
  setIntChecked,
  setAdvChecked,
  selectDsChecked,
  selectAlgChecked,
  selectMinEffort,
  selectMaxEffort,
  selectBegChecked,
  selectIntChecked,
  selectAdvChecked,
} from '../redux/filterStore';

function ControlCard() {
  const dispatch = useDispatch();
  const dsChecked = useSelector(selectDsChecked);
  const algChecked = useSelector(selectAlgChecked);
  const minEffort = useSelector(selectMinEffort);
  const maxEffort = useSelector(selectMaxEffort);
  const begChecked = useSelector(selectBegChecked);
  const intChecked = useSelector(selectIntChecked);
  const advChecked = useSelector(selectAdvChecked);

  const onEffortSliderChange = (minValue, maxValue) => {
    dispatch(setEffortSlider([minValue, maxValue]));
  };

  return (
    <Card style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <Card.Content header="Options" />
      <Card.Content style={{ width: '100%', height: '100%', padding: '1em 2em .5em 2em' }}>
        <div style={{ display: 'block', width: '100%', height: '50%' }}>
          <div style={{ display: 'block', width: '50%', float: 'left' }}>
            <Checkbox
              style={{ display: 'block', padding: '5px 0' }}
              label="Beginner"
              onChange={() => {
                dispatch(setBegChecked(!begChecked));
              }}
              checked={begChecked}
            />

            <Checkbox
              style={{ display: 'block', padding: '5px 0' }}
              label="Intermediate"
              onChange={() => {
                dispatch(setIntChecked(!intChecked));
              }}
              checked={intChecked}
            />

            <Checkbox
              style={{ display: 'block', padding: '5px 0' }}
              label="Advanced"
              onChange={() => {
                dispatch(setAdvChecked(!advChecked));
              }}
              checked={advChecked}
            />
          </div>
          <div style={{ display: 'block', width: '50%', float: 'right' }}>
            <Checkbox
              style={{ display: 'block', padding: '5px 0' }}
              label="Data Structures"
              onChange={() => {
                dispatch(setDsChecked(!dsChecked));
              }}
              checked={dsChecked}
            />

            <Checkbox
              style={{ display: 'block', padding: '5px 0' }}
              label="Algorithms"
              onChange={() => {
                dispatch(setAlgChecked(!algChecked));
              }}
              checked={algChecked}
            />
          </div>
        </div>
        <div style={{ display: 'block', width: '100%', height: '50%' }}>
          <p style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
            Estimated Effort (lines)
          </p>
          <SliderView
            className="slider-view"
            selectedMinValue={minEffort}
            selectedMaxValue={maxEffort}
            onSliderValuesChange={onEffortSliderChange}
            sliderMinValue={MIN_EFFORT}
            sliderMaxValue={MAX_EFFORT}
          />
        </div>
      </Card.Content>
    </Card>
  );
}

export default ControlCard;

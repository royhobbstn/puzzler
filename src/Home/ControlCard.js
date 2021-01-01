import * as React from 'react';
import { Card, Checkbox } from 'semantic-ui-react';
import SliderView from 'semantic-ui-react-slider';
import { connect } from 'react-redux';
import { MIN_EFFORT, MAX_EFFORT } from '../data/inventory';
import {
  pressReset,
  setDsChecked,
  setAlgChecked,
  setEffortSlider,
  setBegChecked,
  setIntChecked,
  setAdvChecked,
} from '../redux/filterStore';

function ControlCard({
  dsChecked,
  setDsChecked,
  algChecked,
  setAlgChecked,
  minEffort,
  maxEffort,
  setEffortSlider,
  begChecked,
  setBegChecked,
  intChecked,
  setIntChecked,
  advChecked,
  setAdvChecked,
  pressReset,
}) {
  const onEffortSliderChange = (minValue, maxValue) => {
    setEffortSlider([minValue, maxValue]);
  };

  return (
    <Card style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <Card.Content header="Options" />
      <Card.Content style={{ width: '100%', height: '100%', padding: '1em 1em .5em 1em' }}>
        <div style={{ display: 'block', width: '100%', height: '50%' }}>
          <div style={{ display: 'block', width: '50%', float: 'left' }}>
            <Checkbox
              style={{ display: 'block', padding: '5px 0' }}
              label="Beginner"
              onChange={() => {
                setBegChecked(!begChecked);
              }}
              checked={begChecked}
            />

            <Checkbox
              style={{ display: 'block', padding: '5px 0' }}
              label="Intermediate"
              onChange={() => {
                setIntChecked(!intChecked);
              }}
              checked={intChecked}
            />

            <Checkbox
              style={{ display: 'block', padding: '5px 0' }}
              label="Advanced"
              onChange={() => {
                setAdvChecked(!advChecked);
              }}
              checked={advChecked}
            />
          </div>
          <div style={{ display: 'block', width: '50%', float: 'right' }}>
            <Checkbox
              style={{ display: 'block', padding: '5px 0' }}
              label="Data Structures"
              onChange={() => {
                setDsChecked(!dsChecked);
              }}
              checked={dsChecked}
            />

            <Checkbox
              style={{ display: 'block', padding: '5px 0' }}
              label="Algorithms"
              onChange={() => {
                setAlgChecked(!algChecked);
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

const mapStateToProps = (state, props) => {
  return {
    dsChecked: state.filter.dsChecked,
    algChecked: state.filter.algChecked,
    minEffort: state.filter.minEffort,
    maxEffort: state.filter.maxEffort,
    begChecked: state.filter.begChecked,
    intChecked: state.filter.intChecked,
    advChecked: state.filter.advChecked,
  };
};

const mapDispatchToProps = {
  pressReset,
  setDsChecked,
  setAlgChecked,
  setEffortSlider,
  setBegChecked,
  setIntChecked,
  setAdvChecked,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlCard);

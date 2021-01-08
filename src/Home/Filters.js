import * as React from 'react';
import { Card } from 'semantic-ui-react';
import CategoryCard from './CategoryCard';
import ControlCard from './ControlCard';
import { inventory } from '../data/inventory';
import { useDispatch, useSelector } from 'react-redux';
import { BEGINNER, INTERMEDIATE, ADVANCED } from '../data/constants.js';
import {
  setResults,
  selectCategories,
  selectDsChecked,
  selectAlgChecked,
  selectMinEffort,
  selectMaxEffort,
  selectBegChecked,
  selectIntChecked,
  selectAdvChecked,
} from '../redux/filterStore';

function Filters() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const dsChecked = useSelector(selectDsChecked);
  const algChecked = useSelector(selectAlgChecked);
  const minEffort = useSelector(selectMinEffort);
  const maxEffort = useSelector(selectMaxEffort);
  const begChecked = useSelector(selectBegChecked);
  const intChecked = useSelector(selectIntChecked);
  const advChecked = useSelector(selectAdvChecked);

  const runFilters = React.useCallback(() => {
    const chosenCategories = categories.filter(d => d.isSelected).map(d => d.name);

    const filtered = Object.keys(inventory)
      .map(d => Number(d))
      .filter(key => {
        const item = inventory[String(key)];
        // check vs categories
        if (!chosenCategories.includes(item.category)) {
          return false;
        }
        // check vs Beginner Intermediate Advanced
        if (item.difficulty === BEGINNER && !begChecked) {
          return false;
        }
        if (item.difficulty === INTERMEDIATE && !intChecked) {
          return false;
        }
        if (item.difficulty === ADVANCED && !advChecked) {
          return false;
        }
        // check vs effort
        if (item.effort < minEffort || item.effort > maxEffort) {
          return false;
        }
        // check vs DataStructure vs Algorithm
        if (item.type === 'data-structure' && !dsChecked) {
          return false;
        }
        if (item.type === 'algorithm' && !algChecked) {
          return false;
        }
        return true;
      });
    dispatch(setResults(filtered));
  }, [
    algChecked,
    categories,
    dsChecked,
    maxEffort,
    minEffort,
    begChecked,
    intChecked,
    advChecked,
    dispatch,
  ]);

  React.useEffect(() => {
    runFilters();
  }, [runFilters]);

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
            width: '18vw',
          }}
        >
          <CategoryCard categories={categories} />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '19vw',
            height: 'calc(48vh - 40px)',
            width: '36vw',
          }}
        >
          <ControlCard />
        </div>
      </Card.Content>
    </div>
  );
}

export default Filters;

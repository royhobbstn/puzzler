import * as React from 'react';
import { Card } from 'semantic-ui-react';
import CategoryCard from './CategoryCard';
import ControlCard from './ControlCard';
import { inventory } from '../data/inventory';
import { useDispatch, useSelector } from 'react-redux';
import { BEGINNER, INTERMEDIATE, ADVANCED, EXPERT } from '../data/constants.js';
import { setResults } from '../redux/filterStore';

function Filters() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.filter.categories);
  const dsChecked = useSelector(state => state.filter.dsChecked);
  const algChecked = useSelector(state => state.filter.algChecked);
  const minEffort = useSelector(state => state.filter.minEffort);
  const maxEffort = useSelector(state => state.filter.maxEffort);
  const begChecked = useSelector(state => state.filter.begChecked);
  const intChecked = useSelector(state => state.filter.intChecked);
  const advChecked = useSelector(state => state.filter.advChecked);
  const expChecked = useSelector(state => state.filter.expChecked);

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
        if (item.difficulty === EXPERT && !expChecked) {
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
    expChecked,
    dispatch,
  ]);

  React.useEffect(() => {
    runFilters();
  }, [runFilters]);

  return (
    <div
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
            height: 'calc(47vh - 40px)',
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
            height: 'calc(47vh - 40px)',
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

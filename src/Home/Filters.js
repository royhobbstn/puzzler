import * as React from 'react';
import { Card } from 'semantic-ui-react';
import CategoryCard from './CategoryCard';
import ControlCard from './ControlCard';
import { inventory } from '../data/inventory';
import { connect } from 'react-redux';
import { BEGINNER, INTERMEDIATE, ADVANCED } from '../data/constants.js';
import { setResults, setCategories } from '../redux/filterStore';

function Filters({
  setResults,
  setCategories,
  categories,
  dsChecked,
  algChecked,
  minEffort,
  maxEffort,
  begChecked,
  intChecked,
  advChecked,
}) {
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
    setResults(filtered);
  }, [
    algChecked,
    categories,
    dsChecked,
    maxEffort,
    minEffort,
    setResults,
    begChecked,
    intChecked,
    advChecked,
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
            width: '21vw',
          }}
        >
          <CategoryCard categories={categories} setCategories={setCategories} />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '22vw',
            height: 'calc(48vh - 40px)',
            width: '33vw',
          }}
        >
          <ControlCard />
        </div>
      </Card.Content>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.filter.categories,
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
  setResults,
  setCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
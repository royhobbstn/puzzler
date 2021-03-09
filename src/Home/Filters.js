import * as React from 'react';
import { Card } from 'semantic-ui-react';
import ControlCard from './ControlCard';
import { inventory } from '../data/inventory';
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from '../redux/filterStore';

function Filters() {
  const dispatch = useDispatch();
  const tags = useSelector(state => state.filter.tags);

  const runFilters = React.useCallback(() => {
    const chosenTags = tags.filter(d => d.isSelected).map(d => d.name);
    const filtered = Object.keys(inventory)
      .map(d => Number(d))
      .filter(key => {
        const item = inventory[String(key)];
        // check vs tags
        // defaulting to must have any of the selected tags
        for (let chosenTag of chosenTags) {
          if (item.tags.includes(chosenTag)) {
            return true;
          }
        }

        return true;
      });
    dispatch(setResults(filtered));
  }, [tags, dispatch]);

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
            width: '54vw',
          }}
        >
          <ControlCard />
        </div>
      </Card.Content>
    </div>
  );
}

export default Filters;

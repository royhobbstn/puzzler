import * as React from 'react';
import { Card } from 'semantic-ui-react';
import ControlCard from './ControlCard';
import { inventory } from '../data/inventory';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { setResults } from '../redux/filterStore';
import { levelTags, typeTags, categoryTags } from '../data/constants';
import { Tag } from '../redux/filterStore';

function Filters() {
  const dispatch = useDispatch();
  const tags: Tag[] = useSelector((state: RootStateOrAny) => state.filter.tags);

  const runFilters = React.useCallback(() => {
    const chosenTags = tags.filter(d => d.isSelected).map(d => d.name);
    const levelTagsChosen: string[] = [];
    const typeTagsChosen: string[] = [];
    const categoryTagsChosen: string[] = [];
    for (let chosenTag of chosenTags) {
      if (levelTags.includes(chosenTag)) {
        levelTagsChosen.push(chosenTag);
      }
      if (typeTags.includes(chosenTag)) {
        typeTagsChosen.push(chosenTag);
      }
      if (categoryTags.includes(chosenTag)) {
        categoryTagsChosen.push(chosenTag);
      }
    }

    const filtered = Object.keys(inventory)
      .map(d => Number(d))
      .filter(key => {
        const item = inventory[String(key)];

        // filter out by level
        if (levelTagsChosen.length) {
          const levelTagsInProblem: string[] = [];
          for (let tag of item.tags) {
            if (levelTags.includes(tag)) {
              levelTagsInProblem.push(tag);
            }
          }
          if (!levelTagsChosen.some(tagName => levelTagsInProblem.includes(tagName))) {
            return false;
          }
        }

        // filter out by type
        if (typeTagsChosen.length) {
          const typeTagsInProblem: string[] = [];
          for (let tag of item.tags) {
            if (typeTags.includes(tag)) {
              typeTagsInProblem.push(tag);
            }
          }
          if (!typeTagsChosen.some(tagName => typeTagsInProblem.includes(tagName))) {
            return false;
          }
        }

        // filter out by category
        if (categoryTagsChosen.length) {
          const categoryTagsInProblem: string[] = [];
          for (let tag of item.tags) {
            if (categoryTags.includes(tag)) {
              categoryTagsInProblem.push(tag);
            }
          }
          if (!categoryTagsChosen.some(tagName => categoryTagsInProblem.includes(tagName))) {
            return false;
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
            width: '55vw',
          }}
        >
          <ControlCard />
        </div>
      </Card.Content>
    </div>
  );
}

export default Filters;

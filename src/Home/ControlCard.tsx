import * as React from 'react';
import { Card, Label, Popup, Divider, Button } from 'semantic-ui-react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { setTags } from '../redux/filterStore';
import { levelTags, typeTags } from '../data/constants';
import { Tag } from '../redux/filterStore';

function ControlCard() {
  const dispatch = useDispatch();
  const tags: Tag[] = useSelector((state: RootStateOrAny) => state.filter.tags);

  const isTagChecked = (name: string): boolean => {
    const tag = tags.find(t => t.name === name);
    if (!tag) {
      return false;
    }
    return tag.isSelected;
  };

  const selectAll = () => {
    dispatch(
      setTags(
        tags.map(d => {
          return { name: d.name, isSelected: true };
        }),
      ),
    );
  };

  const clearAll = () => {
    dispatch(
      setTags(
        tags.map(d => {
          return { name: d.name, isSelected: false };
        }),
      ),
    );
  };

  const allAreSelected = tags.every(d => d.isSelected === true);
  const noneAreSelected = tags.every(d => d.isSelected === false);

  const toggleTag = (tag: string) => {
    dispatch(
      setTags(
        tags.map(d => {
          if (d.name === tag) {
            return { name: d.name, isSelected: !d.isSelected };
          }
          return d;
        }),
      ),
    );
  };

  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <Card.Content header="Filters" />
      <Divider style={{ padding: '0', margin: '0' }} />
      <div style={{ overflowY: 'scroll' }}>
        <div style={{ padding: '1em', height: '63px' }}>
          <Popup
            content="Clear All"
            trigger={
              <Button style={{ float: 'left' }} disabled={noneAreSelected} onClick={clearAll}>
                Clear All
              </Button>
            }
          />
          <Popup
            content="Select All"
            trigger={
              <Button style={{ float: 'right' }} disabled={allAreSelected} onClick={selectAll}>
                Select All
              </Button>
            }
          />
        </div>
        <Divider style={{ padding: '0', margin: '0' }} />
        <Card.Content style={{ width: '100%', height: '100%', padding: '1em 2em .5em 2em' }}>
          <div style={{ display: 'block', width: '100%' }}>
            {levelTags.map(tag => (
              <Label
                key={tag}
                as="a"
                size="tiny"
                style={{ margin: '4px 10px' }}
                className={isTagChecked(tag) ? 'ui tag label teal' : 'ui tag label'}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Label>
            ))}
            <hr />

            {typeTags.map(tag => (
              <Label
                key={tag}
                as="a"
                size="tiny"
                style={{ margin: '4px 10px' }}
                className={isTagChecked(tag) ? 'ui tag label teal' : 'ui tag label'}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Label>
            ))}
            <hr />

            {tags
              .filter(t => ![...levelTags, ...typeTags].includes(t.name))
              .map(tag => (
                <Label
                  key={tag.name}
                  as="a"
                  size="tiny"
                  style={{ margin: '4px 10px' }}
                  className={isTagChecked(tag.name) ? 'ui tag label teal' : 'ui tag label'}
                  onClick={() => toggleTag(tag.name)}
                >
                  {tag.name}
                </Label>
              ))}
            <hr />
          </div>
        </Card.Content>
      </div>
    </Card>
  );
}

export default ControlCard;

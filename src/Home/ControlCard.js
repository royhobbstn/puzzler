import * as React from 'react';
import { Card, Label } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { setTags } from '../redux/filterStore';
import { levelTags, typeTags } from '../data/constants';

function ControlCard() {
  const dispatch = useDispatch();
  const tags = useSelector(state => state.filter.tags);

  const isTagChecked = name => {
    const tag = tags.find(t => t.name === name);
    return tag.isSelected;
  };

  const toggleTag = tag => {
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
    <Card style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <Card.Content header="Filters" />
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
    </Card>
  );
}

export default ControlCard;

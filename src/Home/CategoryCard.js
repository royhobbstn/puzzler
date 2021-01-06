import * as React from 'react';
import { Card, Checkbox, Button, Popup, Divider } from 'semantic-ui-react';

export default function CategoryCard({ categories, setCategories }) {
  const updateCheckbox = name => {
    const updatedCategories = categories.map(item => {
      if (item.name === name) {
        return { name: item.name, isSelected: !item.isSelected };
      }
      return item;
    });
    setCategories(updatedCategories);
  };

  const selectAll = () => {
    setCategories(
      categories.map(d => {
        return { name: d.name, isSelected: true };
      }),
    );
  };

  const clearAll = () => {
    setCategories(
      categories.map(d => {
        return { name: d.name, isSelected: false };
      }),
    );
  };

  const allAreSelected = categories.every(d => d.isSelected === true);
  const noneAreSelected = categories.every(d => d.isSelected === false);

  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <Card.Content header="Categories" />
      <Divider style={{ padding: '0', margin: '0' }} />
      <div style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
        <div style={{ padding: '1em' }}>
          <Popup
            content="Select All"
            trigger={<Button icon="add" disabled={allAreSelected} onClick={selectAll} />}
          />
          <Popup
            content="Clear All"
            trigger={<Button icon="remove" disabled={noneAreSelected} onClick={clearAll} />}
          />
        </div>
        <Divider style={{ padding: '0', margin: '0' }} />
        <div style={{ padding: '1em' }}>
          {categories.map(item => {
            return (
              <Checkbox
                style={{ display: 'block', padding: '5px 5px' }}
                key={item.name}
                label={item.name}
                onChange={() => {
                  updateCheckbox(item.name);
                }}
                checked={item.isSelected}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
}

import * as React from 'react';
import CategoryCard from './CategoryCard.js';
import ControlCard from './ControlCard.js';
import ResultsCard from './ResultsCard.js';
import SelectionsCard from './SelectionsCard.js';
import { aggregateData } from './aggregateData.js';

const defaultCategoryData = aggregateData.categories.map(d => {
  return { name: d, isSelected: true };
});

export default function HomePage() {
  const [categories, setCategories] = React.useState(defaultCategoryData);

  const [selections, setSelections] = React.useState([]);
  const [results, setResults] = React.useState([]);

  return (
    <React.Fragment>
      <div
        style={{
          position: 'absolute',
          top: 'calc(40px + 3vh)',
          left: '5vw',
          height: 'calc(48vh - 40px)',
          width: '23vw',
        }}
      >
        <CategoryCard categories={categories} setCategories={setCategories} />
      </div>
      <div
        style={{
          border: '1px solid green',
          position: 'absolute',
          top: 'calc(40px + 3vh)',
          left: '29vw',
          height: 'calc(48vh - 40px)',
          width: '36vw',
        }}
      >
        <ControlCard categories={categories} setResults={setResults} />
      </div>
      <div
        style={{
          border: '1px solid yellow',
          position: 'absolute',
          top: 'calc(40px + 3vh)',
          left: '66vw',
          height: 'calc(94vh - 40px)',
          width: '29vw',
        }}
      >
        <SelectionsCard />
      </div>
      <div
        style={{
          border: '1px solid blue',
          position: 'absolute',
          top: '52vh',
          left: '5vw',
          height: '45vh',
          width: '60vw',
        }}
      >
        <ResultsCard />
      </div>
    </React.Fragment>
  );
}

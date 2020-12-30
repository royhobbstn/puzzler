import * as React from 'react';
import ResultsCard from './ResultsCard.js';
import SelectionsCard from './SelectionsCard.js';
import Filters from './Filters.js';

export default function HomePage() {
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
          width: '60vw',
        }}
      >
        <Filters setResults={setResults} />
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
        <SelectionsCard selections={selections} setSelections={setSelections} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '52vh',
          left: '5vw',
          height: '45vh',
          width: '60vw',
        }}
      >
        <ResultsCard results={results} selections={selections} setSelections={setSelections} />
      </div>
    </React.Fragment>
  );
}

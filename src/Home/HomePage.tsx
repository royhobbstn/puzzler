import * as React from 'react';
import ResultsCard from './ResultsCard';
import SelectionsCard from './SelectionsCard';
import Filters from './Filters';

export default function HomePage() {
  return (
    <React.Fragment>
      <div
        style={{
          position: 'absolute',
          top: 'calc(40px + 3vh)',
          left: '2vw',
          height: 'calc(48vh - 40px)',
          width: '55vw',
        }}
      >
        <Filters />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 'calc(40px + 3vh)',
          left: '58vw',
          height: 'calc(94vh - 40px)',
          width: '40vw',
        }}
      >
        <SelectionsCard />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '52vh',
          left: '2vw',
          height: '45vh',
          width: '55vw',
        }}
      >
        <ResultsCard />
      </div>
    </React.Fragment>
  );
}

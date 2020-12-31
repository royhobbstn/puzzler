import * as React from 'react';
import ResultsCard from './ResultsCard.js';
import SelectionsCard from './SelectionsCard.js';
import Filters from './Filters.js';
import ProblemTextModal from './ProblemTextModal';
import { connect } from 'react-redux';
import { setSelections } from './filterStore';

function HomePage() {
  const [results, setResults] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [activeProblemText, setActiveProblemText] = React.useState(0);

  const showModalMarkdown = problemText => {
    setActiveProblemText(problemText);
    setShowModal(true);
  };

  return (
    <React.Fragment>
      <ProblemTextModal
        showModal={showModal}
        setShowModal={setShowModal}
        activeProblemText={activeProblemText}
      />
      <div
        style={{
          position: 'absolute',
          top: 'calc(40px + 3vh)',
          left: '5vw',
          height: 'calc(48vh - 40px)',
          width: '55vw',
        }}
      >
        <Filters setResults={setResults} />
      </div>

      <div
        style={{
          border: '1px solid yellow',
          position: 'absolute',
          top: 'calc(40px + 3vh)',
          left: '61vw',
          height: 'calc(94vh - 40px)',
          width: '34vw',
        }}
      >
        <SelectionsCard showModalMarkdown={showModalMarkdown} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '52vh',
          left: '5vw',
          height: '45vh',
          width: '55vw',
        }}
      >
        <ResultsCard results={results} showModalMarkdown={showModalMarkdown} />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  setSelections,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

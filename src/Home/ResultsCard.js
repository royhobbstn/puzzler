import * as React from 'react';
import { Card, Table, Icon, Button } from 'semantic-ui-react';
import { inventory } from '../data/inventory';
import { connect } from 'react-redux';
import showdown from 'showdown';
import { setSelections, setActiveProblemText, setShowModal } from '../redux/filterStore';

const converter = new showdown.Converter();

function ResultsCard({ results, selections, setSelections, setActiveProblemText, setShowModal }) {
  const addProblemId = problemID => {
    setSelections([...selections, problemID]);
  };

  const subtractProblemId = problemID => {
    setSelections(selections.filter(d => d !== problemID));
  };

  const showModalMarkdown = problemText => {
    setActiveProblemText(problemText);
    setShowModal(true);
  };

  // results which don't include selected problems
  const filteredResults = results.filter(d => {
    return !selections.includes(d);
  });

  const addRandom = () => {
    const random = filteredResults[Math.floor(Math.random() * filteredResults.length)];
    addProblemId(random);
  };

  return (
    <Card style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <Card.Content header="Filter Results" />
      <Card.Content>
        <div>
          <div style={{ display: 'inline', height: '36px', lineHeight: '36px', float: 'left' }}>
            Found {results.length} results.
          </div>
          <Button
            onClick={() => addRandom()}
            disabled={Boolean(!filteredResults.length)}
            icon
            labelPosition="right"
            style={{ display: 'inline', float: 'right' }}
          >
            Add Random
            <Icon name="right arrow" />
          </Button>
        </div>
      </Card.Content>
      <Card.Content>
        <Table celled compact="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: 'center' }}>Difficulty</Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: 'center' }}>Effort</Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: 'center' }}>Category</Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: 'center' }}>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {}
          <Table.Body>
            {results.length ? (
              results.map(id => {
                const problem = inventory[id];
                const inProblemSet = selections.includes(problem.problemID);
                return (
                  <Table.Row
                    key={problem.problemID}
                    className={inProblemSet ? 'existing-selection' : ''}
                  >
                    <Table.Cell>
                      <div
                        style={{ display: 'inline' }}
                        className="hover-link"
                        onClick={() => showModalMarkdown(problem.problemText)}
                        dangerouslySetInnerHTML={{
                          __html: converter.makeHtml(
                            `**${problem.problemID}**:  ` + problem.problemName,
                          ),
                        }}
                      ></div>
                    </Table.Cell>
                    <Table.Cell style={{ textAlign: 'center' }}>{problem.difficulty}</Table.Cell>
                    <Table.Cell style={{ textAlign: 'center' }}>{problem.effort}</Table.Cell>
                    <Table.Cell style={{ textAlign: 'center' }}>{problem.category}</Table.Cell>
                    <Table.Cell style={{ textAlign: 'center' }}>
                      {inProblemSet ? (
                        <Button icon onClick={() => subtractProblemId(problem.problemID)}>
                          <Icon className="hover-circle-off" name="minus" />
                        </Button>
                      ) : (
                        <Button icon onClick={() => addProblemId(problem.problemID)}>
                          <Icon className="hover-circle-on" name="add" />
                        </Button>
                      )}
                    </Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <Table.Row key={0}>
                <Table.Cell colSpan="4">No Results</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Card.Content>
    </Card>
  );
}

const mapStateToProps = (state, props) => {
  return {
    selections: state.filter.selections,
    results: state.filter.results,
  };
};

const mapDispatchToProps = {
  setSelections,
  setActiveProblemText,
  setShowModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsCard);

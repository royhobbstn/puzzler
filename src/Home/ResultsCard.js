import * as React from 'react';
import { Card, Table, Icon, Button, Divider } from 'semantic-ui-react';
import { inventory } from '../data/inventory';
import { useDispatch, useSelector } from 'react-redux';
import showdown from 'showdown';
import {
  setSelections,
  setActiveProblemText,
  setShowModal,
  setActiveProblemId,
} from '../redux/filterStore';
import { levelTags } from '../data/constants.js';

const converter = new showdown.Converter();

function ResultsCard() {
  const dispatch = useDispatch();
  const selections = useSelector(state => state.filter.selections);
  const results = useSelector(state => state.filter.results);

  const addProblemId = problemID => {
    dispatch(setSelections([...selections, problemID]));
  };

  const subtractProblemId = problemID => {
    dispatch(setSelections(selections.filter(d => d !== problemID)));
  };

  const showModalMarkdown = (problemText, problemId) => {
    dispatch(setActiveProblemText(problemText));
    dispatch(setActiveProblemId(problemId));
    dispatch(setShowModal(true));
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
    <Card style={{ width: '100%', height: '100%' }}>
      <Card.Content header="Filter Results" />
      <Divider style={{ padding: '0', margin: '0' }} />
      <div style={{ overflowY: 'scroll' }}>
        <div style={{ padding: '1em', height: '63px' }}>
          <div style={{ display: 'inline', height: '36px', lineHeight: '36px', float: 'left' }}>
            Found {filteredResults.length} results.
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
        <div style={{ padding: '0 1em 1em 1em', clear: 'both' }}>
          <Table celled compact="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Difficulty</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Effort</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Tags</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            {}
            <Table.Body>
              {filteredResults.length ? (
                filteredResults.map(id => {
                  const problem = inventory[id];

                  const difficulty = problem.tags.find(tag => {
                    return levelTags.includes(tag);
                  });

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
                          onClick={() => showModalMarkdown(problem.problemText, problem.problemID)}
                          dangerouslySetInnerHTML={{
                            __html: converter.makeHtml(
                              `**${problem.problemID}**:  ` + problem.problemName,
                            ),
                          }}
                        ></div>
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        <span
                          style={{
                            backgroundColor: 'azure',
                            color: 'black',
                            display: 'inline-block',
                            border: '1px solid darkslategrey',
                            borderRadius: '50%',
                            width: '1.5em',
                            height: '1.5em',
                            lineHeight: '1.25em',
                            verticalAlign: 'center',
                            boxShadow: '1px 1px 2px lightslategrey',
                            cursor: 'default',
                          }}
                          title={difficulty}
                        >
                          {difficulty.slice(0, 1)}
                        </span>
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>{problem.effort}</Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>{problem.tags}</Table.Cell>
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
        </div>
      </div>
    </Card>
  );
}

export default ResultsCard;

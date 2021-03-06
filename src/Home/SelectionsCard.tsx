import * as React from 'react';
import { Card, Table, Button, Icon, Divider } from 'semantic-ui-react';
import { inventory } from '../data/inventory';
import { levelTags, abbrev, typeTags } from '../data/constants';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import showdown from 'showdown';
import { useHistory } from 'react-router-dom';
import {
  setSelections,
  setActiveProblemText,
  setShowModal,
  shiftSelection,
  setActiveProblemId,
} from '../redux/filterStore';
import { clickNext } from '../redux/gameStore';

const converter = new showdown.Converter();

function SelectionsCard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const selections: number[] = useSelector((state: RootStateOrAny) => state.filter.selections);

  const clearAll = () => {
    dispatch(setSelections([]));
  };

  const clickStart = () => {
    const nextId = selections[0];
    dispatch(clickNext());
    dispatch(shiftSelection());
    history.push(`/${nextId}`);
  };

  const subtractProblemId = (problemID: number) => {
    dispatch(setSelections(selections.filter(d => d !== problemID)));
  };

  const showModalMarkdown = (problemText: string, problemId: number) => {
    dispatch(setActiveProblemText(problemText));
    dispatch(setActiveProblemId(problemId));
    dispatch(setShowModal(true));
  };

  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <Card.Content header="Selections" />
      <Divider style={{ padding: '0', margin: '0' }} />
      <div style={{ overflowY: 'scroll' }}>
        <div style={{ padding: '1em', height: '63px' }}>
          <Button
            disabled={Boolean(!selections.length)}
            style={{ float: 'left' }}
            onClick={clearAll}
          >
            Clear All
          </Button>
          <Button
            style={{ float: 'right' }}
            onClick={clickStart}
            disabled={Boolean(!selections.length)}
            primary={true}
          >
            START
          </Button>
        </div>
        <Divider style={{ padding: '0', margin: '0' }} />
        <div style={{ padding: '1em 1em 0 1em' }}>{selections.length} Problem(s) Selected.</div>

        <div style={{ padding: '1em' }}>
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
            <Table.Body>
              {selections.length ? (
                selections.map(id => {
                  const problem = inventory[id];
                  const difficulty = problem.tags.find(tag => {
                    return levelTags.includes(tag);
                  });
                  if (!difficulty) {
                    return <p>Error</p>;
                  }

                  return (
                    <Table.Row key={problem.problemID}>
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
                      <Table.Cell style={{ textAlign: 'center' }}>
                        <span
                          style={{
                            fontVariant: 'small-caps',
                            fontSize: '0.75em',
                            fontWeight: 'bold',
                          }}
                        >
                          {[...problem.tags]
                            .sort()
                            .filter(d => !levelTags.includes(d) && !typeTags.includes(d))
                            .map(d => {
                              return abbrev[d];
                            })
                            .join(', ')}
                        </span>
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        <Button icon onClick={() => subtractProblemId(problem.problemID)}>
                          <Icon className="hover-circle-off" name="minus" />
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              ) : (
                <Table.Row key={0}>
                  <Table.Cell colSpan="4">No Selections</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Card>
  );
}

export default SelectionsCard;

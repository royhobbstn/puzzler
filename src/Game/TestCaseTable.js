import * as React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { constructTest } from '../util.js';
import { inventory } from '../data/inventory.ts';
import prettier from 'prettier/esm/standalone.mjs';
import parserBabel from 'prettier/esm/parser-babel.mjs';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setOpen, setNoteCode, updateTableSort } from '../redux/gameStore';
import TestCodeModal from './TestCodeModal';

function TestCaseTable() {
  const dispatch = useDispatch();
  const results = useSelector(state => state.game.results);
  const tableSort = useSelector(state => state.game.tableSort);
  const { id } = useParams();

  const sortedResults = [...results].sort((a, b) => {
    if (tableSort === 'id') {
      return a.id - b.id;
    } else if (tableSort === 'fail') {
      let aValue = a.ok ? a.id + 10000 : a.id;
      let bValue = b.ok ? b.id + 10000 : b.id;
      return aValue - bValue;
    } else if (tableSort === 'success') {
      let aValue = a.ok ? a.id : a.id + 10000;
      let bValue = b.ok ? b.id : b.id + 10000;
      return aValue - bValue;
    } else {
      throw new Error(`Invalid sort choice: ${tableSort}`);
    }
  });

  const nextSort = () => {
    if (tableSort === 'id') {
      dispatch(updateTableSort('fail'));
    } else if (tableSort === 'fail') {
      dispatch(updateTableSort('success'));
    } else if (tableSort === 'success') {
      dispatch(updateTableSort('id'));
    } else {
      throw new Error(`Invalid sort choice: ${tableSort}`);
    }
  };

  if (!sortedResults.length) {
    return null;
  }

  const data = inventory[id];

  return (
    <div>
      <TestCodeModal />

      <Table celled compact={'very'} className="run-results">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={{ textAlign: 'center' }}>ID</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Code</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Expected</Table.HeaderCell>
            <Table.HeaderCell>Actual</Table.HeaderCell>
            <Table.HeaderCell>Error</Table.HeaderCell>
            <Table.HeaderCell onClick={nextSort} style={{ textAlign: 'center', cursor: 'pointer' }}>
              Status
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sortedResults.map(test => {
            return (
              <Table.Row
                key={test.id}
                style={{
                  backgroundColor: test.ok ? 'rgba(0, 255, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)',
                }}
              >
                <Table.Cell style={{ textAlign: 'center' }}>{test.id}</Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  <Icon
                    className="hover-note"
                    name="sticky note outline"
                    role="button"
                    onClick={() => {
                      const constructedTest = constructTest(
                        data.testCases,
                        test.inherit,
                        test.code,
                        test.evaluate,
                        data.setupCode,
                      ).text;
                      const formatted = prettier.format(constructedTest, {
                        parser: 'babel',
                        plugins: [parserBabel],
                      });
                      dispatch(setNoteCode(formatted));
                      dispatch(setOpen(true));
                    }}
                  ></Icon>
                </Table.Cell>
                <Table.Cell>{test.name}</Table.Cell>
                <Table.Cell>
                  {typeof test.expected !== 'string'
                    ? JSON.stringify(test.expected)
                    : test.expected}
                </Table.Cell>
                <Table.Cell>{test.actual}</Table.Cell>
                <Table.Cell>{test.error}</Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  {test.ok ? (
                    <Icon color="green" name="checkmark" />
                  ) : (
                    <Icon color="red" name="checkmark" />
                  )}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TestCaseTable;

import * as React from 'react';
import { Card } from 'semantic-ui-react';
import { inventory } from '../data/inventory';
import TestCaseTable from './TestCaseTable';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import showdown from 'showdown';
import { setActiveIndex } from '../redux/gameStore';
import { levelTags, typeTags } from '../data/constants';
import { Footnote } from '../Home/Footnote';

const converter = new showdown.Converter();

function TabCards() {
  const dispatch = useDispatch();
  const isBusyTesting = useSelector((state: RootStateOrAny) => state.game.isBusyTesting);
  const activeIndex = useSelector((state: RootStateOrAny) => state.game.activeIndex);
  const results = useSelector((state: RootStateOrAny) => state.game.results);

  const { id } = useParams<{ id: string }>();
  const data = inventory[id];

  if (!data) {
    return <React.Fragment />;
  }

  const difficulty = data.tags.find(tag => {
    return levelTags.includes(tag);
  });

  const hasTests = results.length;

  function createMarkup() {
    return { __html: converter.makeHtml(data.problemText) };
  }

  function createTitle() {
    return {
      __html: `<h3>${converter.makeHtml(`${id}.&nbsp;&nbsp;&nbsp;${data.problemName}`)}</h3>`,
    };
  }

  return (
    <Card fluid raised={true} style={{ height: 'calc(32vh - 40px)' }}>
      <p style={{ padding: '10px 0 0 10px' }}>
        <span
          className={activeIndex === 0 ? 'pane-base chosen-pane' : 'pane-base'}
          onClick={() => dispatch(setActiveIndex(0))}
        >
          Problem
        </span>{' '}
        |{' '}
        <span
          className={activeIndex === 1 ? 'pane-base chosen-pane' : 'pane-base'}
          onClick={() => dispatch(setActiveIndex(1))}
        >
          Test Results
        </span>
        <span style={{ float: 'right' }}>
          {' '}
          <span style={{ fontVariant: 'small-caps' }}>
            {data.tags.filter(d => !levelTags.includes(d) && !typeTags.includes(d)).join(', ')}
          </span>
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
              marginRight: '1em',
              marginLeft: '1em',
              textAlign: 'center',
            }}
            title={difficulty}
          >
            {(difficulty || []).slice(0, 1)}
          </span>
        </span>
      </p>

      <Card.Content style={{ height: 'calc(32vh - 70px)', overflowY: 'scroll' }}>
        {activeIndex === 0 ? (
          <div>
            <div className="titleStyle" dangerouslySetInnerHTML={createTitle()} />
            <div dangerouslySetInnerHTML={createMarkup()} />
            <Footnote noteSource={data.source || []} />
            <br />
          </div>
        ) : null}

        {activeIndex === 1 ? (
          isBusyTesting ? (
            <p>Testing in Progress...</p>
          ) : !hasTests ? (
            <p>Tests have not been run yet for this problem.</p>
          ) : (
            <TestCaseTable />
          )
        ) : null}
      </Card.Content>
    </Card>
  );
}

export default TabCards;

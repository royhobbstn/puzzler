import * as React from 'react';

export const Footnote = ({ noteSource }) => {
  return noteSource.length ? (
    <div style={{ marginTop: '10px', color: 'grey' }}>
      <div style={{ margin: '5px 0 1px 0' }}>
        <sub>Resources</sub>
      </div>

      {noteSource.map((source, idx) => (
        <sub key={idx}>
          {idx + 1}.{' '}
          <a href={source} target="_blank" rel="noopener noreferrer">
            {source}
          </a>
        </sub>
      ))}
    </div>
  ) : null;
};

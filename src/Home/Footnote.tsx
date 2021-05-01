import * as React from 'react';

interface FootnoteProps {
  noteSource: string[];
}

export const Footnote = (props: FootnoteProps) => {
  const { noteSource } = props;
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
          <br />
        </sub>
      ))}
    </div>
  ) : null;
};

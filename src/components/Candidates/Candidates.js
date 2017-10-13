import React from 'react';
import Card from '../common/Card';

const Candidates = props => {
  console.log('props for Candidates', props);
  const candidates = props.candidates;
  document.title = 'Local Majority | Candidates';
  return (
    <div className="Candidates flex">
      {candidates.length ? (
        candidates.map((candidate, i) => {
          let headshot =
            candidate.headshotSm && candidate.headshotSm.url
              ? candidate.headshotSm.url
              : 'missing image';
          return (
            <Card
              key={i}
              id={candidate.id}
              cardTitle={candidate.title}
              cardSubtitle="need district data!"
              cardText="need short text?"
              category="candidates"
              imgSrc={headshot}
              friendlyId={candidate.friendlyId}
              imgShape="square"
            />
          );
        })
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default Candidates;

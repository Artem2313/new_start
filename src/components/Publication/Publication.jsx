import React, { useContext } from 'react';
import { ReaderContext } from '../Reader.js/Reader';

const Publication = () => {
  const context = useContext(ReaderContext);

  return (
    <article className="publication">
      <h2>{context.publication.title.slice(0, 20)}...</h2>
      <p>{context.publication.text.slice(0, 300)}...</p>
    </article>
  );
};

export default Publication;

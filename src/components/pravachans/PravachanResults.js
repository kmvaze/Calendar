import React from 'react';
import PravachanBox from './PravachanBox';

function PravachanResults(props) {
  const itemList = props.pravachans;
  return (
    <div className="pravachanList">
      {itemList.map(pravachan => (
        <PravachanBox p={pravachan} key={pravachan.pkey} />
      ))}
    </div>
  );
}

export default PravachanResults;

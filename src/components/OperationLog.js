import React, { useContext } from 'react';

import AppContext from '../contexts/AppContext';

const OperationLog = ({ operationLog }) => {
  const { state } = useContext(AppContext);
  return (
    <>
      {console.log({operationLog}, ': operationLog')}
      <tr>
        <td>{operationLog.description}</td>
        <td>{operationLog.operateAt}</td>
      </tr>
    </>
  );
};

export default OperationLog;

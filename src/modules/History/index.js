import React from 'react';

import History from '../../components/History';

const HistoryScreen = ({ route }) => {
  const { historyExpressions, setHistoryExpressions } = route.params;

  return <History historyExpressions={historyExpressions} setHistoryExpressions={setHistoryExpressions} />;
};

export default HistoryScreen;

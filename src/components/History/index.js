import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import styles from './styles';
import Button from '../common/Button';

const History = ({ historyExpressions, setHistoryExpressions }) => {
  const [localHistoryExpressions, setLocalHistoryExpressions] = useState([...historyExpressions]);

  return (
    <ScrollView contentContainerStyle={styles.topScrollView}>
      <View style={styles.topViewContainer}>
        {localHistoryExpressions.map((expressionInfo) => {
          const { expression, result } = expressionInfo;

          return (
            <View style={styles.expressionContainer}>
              <Text style={styles.expressionText}>
                {expression.map((expressionItem) => `${expressionItem} `)} = {result}
              </Text>
            </View>
          );
        })}
      </View>

      <Button
        buttonStyle={styles.clearButton}
        contentStyle={styles.clearButtonContent}
        disabled={localHistoryExpressions.length === 0}
        onPress={() => {
          setHistoryExpressions([]);
          setLocalHistoryExpressions([]);
        }}
      >
        CLEAR
      </Button>
    </ScrollView>
  );
};

export default History;

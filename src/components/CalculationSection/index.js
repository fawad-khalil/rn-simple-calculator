import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Button from '../common/Button';
import { getButtonsConfigs } from './utils';
import styles from './styles';
import { buttonsConfig } from './resources';
import { HISTORY } from '../../modules/Navigation/routes';

const CalculationSection = ({ navigation, isPortrait, historyExpressions, setHistoryExpressions }) => {
  const buttonsConfigs = getButtonsConfigs();

  const [currentResult, setCurrentResult] = useState(0);
  const [previousOperator, setPreviousOperator] = useState(null);
  const [previousInput, setPreviousInput] = useState(null);
  const [currentExpression, setCurrentExpression] = useState([]);

  return (
    <>
      <View style={styles.topContainer}>
        {isPortrait && (
          <View style={styles.historyButtonContainer}>
            <Button
              testID="history"
              contentStyle={styles.historyButtonContent}
              onPress={() =>
                navigation.navigate(HISTORY, {
                  historyExpressions,
                  setHistoryExpressions,
                })
              }
            >
              History >
            </Button>
          </View>
        )}

        <View style={styles.resultContainer}>
          {currentResult !== 0 && previousOperator && previousInput ? (
            <Text style={styles.resultText}>{previousInput}</Text>
          ) : (
            <Text style={styles.resultText}>{currentResult}</Text>
          )}
        </View>
      </View>

      <View style={styles.calculatorButtonsContainer}>
        {buttonsConfigs.map((buttonConfig) => {
          const { text, backgroundColor, width, marginRight, paddingLeft, name, handler } = buttonConfig;
          const buttonStyles = {
            ...styles.button,
            paddingLeft,
            backgroundColor,
          };
          const buttonContentStyles = {
            ...styles.buttonContent,
            marginRight,
          };

          return (
            <View key={text} style={{ ...styles.calculatorButtonContainer, width }}>
              <Button
                buttonStyle={{ ...buttonStyles }}
                contentStyle={{ ...buttonContentStyles }}
                disabled={
                  name === buttonsConfig.equal.name &&
                  ((previousOperator && !previousInput) || (!previousInput && !previousOperator))
                }
                onPress={handler}
                pressHandlerParams={{
                  currentResult,
                  setCurrentResult,
                  previousOperator,
                  setPreviousOperator,
                  previousInput,
                  setPreviousInput,
                  setCurrentExpression,
                  currentExpression,
                  setHistoryExpressions,
                  historyExpressions,
                }}
              >
                {text}
              </Button>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default CalculationSection;

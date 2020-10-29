import React, { useEffect, useState, useMemo } from 'react';
import { View } from 'react-native';
import Orientation from 'react-native-orientation';

import CalculationSection from '../../components/CalculationSection';
import HistorySection from '../../components/History';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [historyExpressions, setHistoryExpressions] = useState([]);

  const _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      setIsPortrait(false);
    } else {
      setIsPortrait(true);
    }
  };

  useEffect(() => {
    const initial = Orientation.getInitialOrientation();

    if (initial === 'PORTRAIT') {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }

    Orientation.addOrientationListener(_orientationDidChange);

    return () => {
      Orientation.removeOrientationListener(_orientationDidChange);
    };
  }, []);

  const calculationSectionWidth = useMemo(() => (isPortrait ? '100%' : '50%'), [isPortrait]);

  return (
    <View style={styles.topContainer}>
      <View style={{ ...styles.calculationSection, width: calculationSectionWidth }}>
        <CalculationSection
          navigation={navigation}
          isPortrait={isPortrait}
          historyExpressions={historyExpressions}
          setHistoryExpressions={setHistoryExpressions}
        />
      </View>

      {!isPortrait && (
        <View style={styles.historySection}>
          <HistorySection historyExpressions={historyExpressions} setHistoryExpressions={setHistoryExpressions} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

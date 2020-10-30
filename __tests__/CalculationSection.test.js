/**
 * @format
 */

import React from 'react';
import CalculationSection from '../src/components/CalculationSection';
import renderer from 'react-test-renderer';

const mockProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('<CalculationSection />', () => {
  describe('<CalculationSection />', () => {
    it('renders correctly lanscape mode', () => {
      const tree = renderer.create(<CalculationSection {...mockProps} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('it renders correctly portrait mode', () => {
      const tree = renderer.create(<CalculationSection isPortrait {...mockProps} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('it renders correctly portrait mode with history expressions', () => {
      const tree = renderer
        .create(
          <CalculationSection
            isPortrait
            historyExpressions={[{ expression: ['5', '-', '4'], result: '1' }]}
            setHistoryExpressions={jest.fn()}
            {...mockProps}
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

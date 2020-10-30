/**
 * @format
 */

import React from 'react';
import HistorySection from '../src/components/History';
import renderer from 'react-test-renderer';

describe('<HistorySection />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HistorySection historyExpressions={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('history section with expressions', () => {
    const tree = renderer
      .create(<HistorySection historyExpressions={[{ expression: ['5', '+', '6'], result: '11' }]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

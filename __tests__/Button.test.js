/**
 * @format
 */

/**
 * @jest-environment jsdom
 */

// import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure, ReactWrapper } from 'enzyme';
import Button from '../src/components/common/Button';

describe('<Button />', () => {
  describe('<Button />', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Button testID="testButton" onPress={jest.fn()}>
            Test Button
          </Button>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

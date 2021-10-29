import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../routes/home-page';
import CalculatorPage from '../routes/calculator-page';
import QuotesPage from '../routes/quotes-page';

describe(('Snapshots'), () => {
  it('renders HomePage correctly', () => {
    const tree = renderer
      .create(<HomePage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders CalculatorPage correctly', () => {
    const tree = renderer
      .create(<CalculatorPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders QuotesPage correctly', () => {
    const tree = renderer
      .create(<QuotesPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

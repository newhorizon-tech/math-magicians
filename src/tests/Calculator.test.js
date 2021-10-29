import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Render Calculator', () => {
  test('renders Calculator component', () => {
    render(<Calculator />);
  });
});

describe('Render Calculator', () => {
  test('Click the button 5', async () => {
    const rendered = render(<Calculator />);

    fireEvent.click(screen.getByText('5'));

    let displayValue;

    await waitFor(() => {
      const displayElement = rendered.container.querySelector('#display-calc');
      displayValue = displayElement.textContent;
    });

    expect(displayValue).toEqual('5');
  });

  test('Type the number 567', async () => {
    const rendered = render(<Calculator />);

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('7'));

    let displayValue;

    await waitFor(() => {
      const displayElement = rendered.container.querySelector('#display-calc');
      displayValue = displayElement.textContent;
    });

    expect(displayValue).toEqual('567');
  });
});

describe('Addition', () => {
  test('Add 25 + 15 ', async () => {
    const rendered = render(<Calculator />);

    const buttonsToClick = ['2', '5', '+', '1', '5', '='];

    buttonsToClick.forEach((button) => {
      fireEvent.click(screen.getByText(button));
    });

    let displayValue;

    await waitFor(() => {
      const displayElement = rendered.container.querySelector('#display-calc');
      displayValue = displayElement.textContent;
    });

    expect(displayValue).toEqual('40');
  });
});

describe('Multiplication', () => {
  test('Add 56 x 12 ', async () => {
    const rendered = render(<Calculator />);

    const buttonsToClick = ['5', '6', 'x', '1', '2', '='];

    buttonsToClick.forEach((button) => {
      fireEvent.click(screen.getByText(button));
    });

    let displayValue;

    await waitFor(() => {
      const displayElement = rendered.container.querySelector('#display-calc');
      displayValue = displayElement.textContent;
    });

    expect(displayValue).toEqual('672');
  });
});

describe('Sign change', () => {
  test('Testing +/- on 13 ', async () => {
    const rendered = render(<Calculator />);

    const buttonsToClick = ['1', '3', '+/-'];

    buttonsToClick.forEach((button) => {
      fireEvent.click(screen.getByText(button));
    });

    let displayValue;

    await waitFor(() => {
      const displayElement = rendered.container.querySelector('#display-calc');
      displayValue = displayElement.textContent;
    });

    expect(displayValue).toEqual('-13');
  });
});

describe('Modulus', () => {
  test('Modulus 15 % 4 ', async () => {
    const rendered = render(<Calculator />);

    const buttonsToClick = ['1', '5', '%', '4', '='];

    buttonsToClick.forEach((button) => {
      fireEvent.click(screen.getByText(button));
    });

    let displayValue;

    await waitFor(() => {
      const displayElement = rendered.container.querySelector('#display-calc');
      displayValue = displayElement.textContent;
    });

    expect(displayValue).toEqual('3');
  });
});

describe('AC', () => {
  test('AC button ', async () => {
    const rendered = render(<Calculator />);

    const buttonsToClick = ['1', '5', '6', 'AC'];

    buttonsToClick.forEach((button) => {
      fireEvent.click(screen.getByText(button));
    });

    let displayValue;

    await waitFor(() => {
      const displayElement = rendered.container.querySelector('#display-calc');
      displayValue = displayElement.textContent;
    });

    expect(displayValue).toEqual('');
  });
});

describe('Decimals', () => {
  test('Decimal multiplation ', async () => {
    const rendered = render(<Calculator />);

    const buttonsToClick = ['1', '5', '.', '1', 'x', '2', '='];

    buttonsToClick.forEach((button) => {
      fireEvent.click(screen.getByText(button));
    });

    let displayValue;

    await waitFor(() => {
      const displayElement = rendered.container.querySelector('#display-calc');
      displayValue = displayElement.textContent;
    });

    expect(displayValue).toEqual('30.2');
  });
});

import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Simpsons from './Simpsons';

const URL = `https://thesimpsonsquoteapi.glitch.me/quotes`;
const server = setupServer(
  rest.get(URL, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          quote:
            'Shoplifting is a victimless crime, like punching someone in the dark.',
          character: 'Nelson Muntz',
          image:
            'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
          characterDirection: 'Left',
        },
      ])
    );
  })
);

describe('simpsons quotes tests', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('renders a simpsons quote and image to the screen when the button is clicked', async () => {
    render(<Simpsons />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
  });

  return waitFor(() => {
    screen.getAllByAltText('Nelson Muntz');
    screen.getByText(
      'Shoplifting is a victimless crime, like punching someone in the dark.'
    );
  });
});

import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('like starts at 0', () => {
  render(<App />);
  const likes = screen.getByRole("like");
  expect(likes.textContent).toBe(" Likes: 0");
});

test('like increments by 1', () => {
  render(<App />);
  const buttonlikes = screen.getByRole("likebutton");
  userEvent.click(buttonlikes);

  const likes = screen.getByRole("like");
  expect(likes.textContent).toBe(" Likes: 1");
})

test('like decrements by 1', () => {
  render(<App />);
  const buttonlikes = screen.getByRole("likebutton");
  userEvent.click(buttonlikes);
  userEvent.click(buttonlikes);

  const likes = screen.getByRole("like");
  expect(likes.textContent).toBe(" Likes: 0");
})
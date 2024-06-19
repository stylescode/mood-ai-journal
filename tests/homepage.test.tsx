import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import HomePage from '@/app/page';

vi.mock('@clerk/nextjs', () => {
  return {
    auth: () => {
      return Promise.resolve({ userId: '123' });
    },
    ClerkProvider: ({ children }) => {
      return (
        <div>
          {children}
        </div>
      )
    },
    useUser: () => {
      return {
        user: {
          id: '123',
          fullName: 'Test User',
        },
        isSignedIn: true
      }
    }
  }
})

test('HomePage renders', async () => {
  render(<HomePage />);
})

test('HomePage displays mission statement', async () => {
  render(<HomePage />);
  expect(screen.getByText('Say hello to insightful self-reflection')).toBeInTheDocument();
})

test('HomePage displays "get started!" button', async () => {
  render(<HomePage />);
  expect(screen.getByText('get started!')).toBeInTheDocument();
})
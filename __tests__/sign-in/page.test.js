import { render, screen, fireEvent } from '@testing-library/react';
import Page from '@/app/sign-in/page';
import '@testing-library/jest-dom';

describe('Login Page', () => {
  const mockOnSignup = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    render(<Page onSignup={mockOnSignup} onClose={mockOnClose} />);
  });

  test('should submit form with email and password', () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(emailInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');
  });

  test('should not submit if email and password are empty', () => {
    const submitButton = screen.getByRole('button', { name: /login/i });

    expect(submitButton).toBeDisabled();

    fireEvent.click(submitButton);

    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/password/i)).toHaveValue('');
  });

  test('should update email and password inputs when typed into', () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput).toHaveValue('user@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  test('should call onSignup when "Sign up" link is clicked', () => {
    const signupLink = screen.getByRole('link', { name: /sign up/i });

    fireEvent.click(signupLink);

    expect(mockOnSignup).toHaveBeenCalledTimes(1);
  });

  test('should call onClose when "Back to Home" button is clicked', () => {
    const backButton = screen.getByRole('button', { name: /back to home/i });

    fireEvent.click(backButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});

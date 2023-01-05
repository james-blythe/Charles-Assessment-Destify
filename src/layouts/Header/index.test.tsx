import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MenuAppBar from './index';

describe('AppBar', () => {
  it('should render correctly', () => {
    const { getByLabelText, getByText, getByRole } = render(<MenuAppBar />);
    expect(getByText('Room Dashboard')).toBeInTheDocument();
    expect(getByLabelText('login switch')).toBeInTheDocument();
  });

  it('should display the logout button when clicked', () => {
    const { getByRole, getByText } = render(<MenuAppBar />);
    expect(getByText('Logout')).toBeInTheDocument();
  });

  it('should display the menu when clicked', () => {
    const { getByRole, getByText } = render(<MenuAppBar />);
    fireEvent.click(screen.getByLabelText('account of current user'));
    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByText('My account')).toBeInTheDocument();
  });
});
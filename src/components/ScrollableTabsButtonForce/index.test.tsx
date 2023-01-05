import React from 'react';
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from "../../app/store"
import ScrollableTabsButtonForce from './index';

describe('ScrollableTabsButtonForce', () => {

  render(
    <Provider store={store}>
      <ScrollableTabsButtonForce />
    </Provider>
  );

  new Array(2).forEach((cur, id) => expect(screen.getByText(`Room ${id+1}`)).toBeInTheDocument());

  it('should fire click event', () => {
    const handleClick = jest.fn()
    fireEvent.click(screen.getByText("Room 1"));
    expect(screen.getByText("Room 1").getAttribute('class')).toMatch(/Mui-selected/gi)
  });
});
import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blankColor = {
  color: '',
  code: '',
  id: ''
}
const testColor = {
  color: "aliceblue",
  code: {
    hex: "#f0f8ff"
  },
  id: 1
}

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={blankColor} />);
});
  
test("Renders the color passed into component", () => {
  render(<Color color={testColor} />);
  const colorItem = screen.queryByText(/aliceblue/i);
  expect(colorItem).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  const mockHandleDelete = jest.fn();
  // const deleteColor = jest.fn();
  render(<Color 
    color={testColor} 
    // deleteColor={deleteColor} 
    handleDelete={mockHandleDelete}
  />);
  // const colorItem = screen.queryByText(/aliceblue/i);
  const deleteButton = screen.queryByTestId('delete');
  userEvent.click(deleteButton);
  expect(mockHandleDelete).toBeCalledTimes(1);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
  render(<Color color={testColor} />);
    
});
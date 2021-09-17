import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={[]}/>);
});

test("Renders a list of colors without errors", () => {
  const mockColorList = [
    {
      "color": "blue",
      "code": {
        "hex": "#6093ca"
      },
      "id": 10
    },
    {
      "color": "blueviolet",
      "code": {
        "hex": "#8a2be2"
      },
      "id": 11
    }
  ]
  render(<ColorList colors={mockColorList}/>);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
});

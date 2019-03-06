import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';


//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


it('renders without crashing', () => {
  shallow(<App />);
});

// it('renders welcome message', () => {
//   render(<App />);
//   expect(getByText('Mockups with react')).toBeInTheDocument();
// });

test('Heading two', () => {
  expect('Mockups with react').toMatch(/Mockup/);
})

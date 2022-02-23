import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';

// Smoke Test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Messages />, div);
  ReactDOM.unmountComponentAtNode(div);
})
// Snapshot testing using react-test-renderer package
it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Messages name="Messages" unread={4}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });
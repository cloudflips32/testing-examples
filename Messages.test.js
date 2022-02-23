import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';
// 'describe' wraps all test suites to a simple reference.
describe('Messages component', () => {
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

  it('renders the UI as expected with no unreads', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={0}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})

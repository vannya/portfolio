import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

let props;

describe('Footer', () => {
  beforeEach(() => {
    props = {
      children: 'MockText'
    };
  });

  // snapshot
  it('should match snapshot', () => {
    const tree = renderer.create(<Footer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // children
  it('should render children', () => {
    class MockComponent extends React.Component {
      render() {
        return <span>MockComponent</span>;
      }
    }
    let WrappedComponent = (
      <Footer>
        <MockComponent />
      </Footer>
    );

    const wrapper = mount(WrappedComponent);
    expect(wrapper.find('span').text()).toEqual('MockComponent');
    wrapper.unmount();
  });
});

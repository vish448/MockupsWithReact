import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';

configure({ adapter: new Adapter() });

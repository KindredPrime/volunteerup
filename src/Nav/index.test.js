import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from '.';

describe('Nav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
import { Provider } from 'react-redux'
import Cart from './components/Cart';
import Header from './components/Header';
import MyRouter from './routes/MyRouter';
import { store } from './store/store'

const App = () => {

  return (
    <Provider store={store} >
      <Header />
      <div className='row'>
        <div className="col-10">
          <MyRouter />
        </div>
        <div className="col-2">
          <Cart />
        </div>
      </div>
    </Provider>
  );
};

export default App;

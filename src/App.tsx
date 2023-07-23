import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutApp from './layouts';
import { LandingPage, ProductPage } from './pages';
import { useDispatch } from 'react-redux';
import { fetchCustomerStart } from './store/customer/customer.action';
import { fetchProductStart } from './store/product/product.action';

const App: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCustomerStart());
    dispatch(fetchProductStart());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<LayoutApp/>}>
        <Route index element={<LandingPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Example from './Example';
import Product from './Product';

export default function App() {
  return (
    <div>

<Router>

<Routes>
<Route path='/' element={<Example></Example>}></Route>
<Route path='/productdetail/:id' element={<Product></Product>}></Route>
</Routes>
</Router>

    </div>
  )
}

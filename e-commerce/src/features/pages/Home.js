import React from 'react'
import Navbar from '../navbar/Navbar'
import ProductList from '../Product-list/components/ProductList'
function Home() {
  return (
    <div>
<Navbar>
    <ProductList></ProductList>
</Navbar>

    </div>
  )
}

export default Home
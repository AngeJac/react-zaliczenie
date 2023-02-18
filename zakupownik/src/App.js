import React from 'react'
import { useState } from 'react'
import produkty from './common/consts/produkty'
import ProductsList from './components/ProductsList/ProductsList'
import ShopingList from './components/ShopingList/ShopingList'
import AddProducts from './components/AddProducts/AddProducts'
import ProductsFilters from './components/ProductsFilters/ProductsFilters'
import styles from './App.module.scss'

function App() {
	const [products, setProducts] = useState(produkty)
	const [shoppingProducts, setShoppingProducts] = useState([])

	return (
		<div className={styles.appWrapper}>
			<AddProducts />
			<ProductsFilters />
			<div className={styles.columnsWrapper}>
				<ProductsList products={products} addToCart={setShoppingProducts} />
				<ShopingList shoppingProducts={shoppingProducts} addToCart={setShoppingProducts} />
			</div>
		</div>
	)
}

export default App

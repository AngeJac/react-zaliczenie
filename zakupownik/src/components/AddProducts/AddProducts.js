import React from 'react'
import styles from '../../common/styles/Headers.module.scss'
import { useState } from 'react'

function AddProducts({ submitProduct }) {
	const [productName, setProductName] = useState('')
	const [productCategory, setProductCategory] = useState('')
	const [food, setFood] = useState(false)

	const handleProductName = event => {
		setProductName(event.target.value)
	}

	const handleProductCategory = event => {
		setProductCategory(event.target.value)
	}

	const handleFoodProduct = event => {
		setFood(event.target.checked)
	}

	const handleClick = () => {
		setProductName('')
		setProductCategory('')
		setFood(false)
		submitProduct(productName, productCategory, food)
	}

	return (
		<div className={styles.Wrapper}>
			<b>
				<h5>Add product:</h5>
			</b>
			<p>&nbsp;&nbsp;&nbsp;</p>
			<input value={productName} onChange={handleProductName}></input>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<b>
				<h5>Category:</h5>
			</b>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<input value={productCategory} onChange={handleProductCategory}></input>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<label>
				<b>
					<h5>Food:</h5>
				</b>
			</label>
			<input type='checkbox' value={food} checked={food} onChange={handleFoodProduct}></input>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<button onClick={handleClick} disabled={!productName || !productCategory}>
				Add product
			</button>
		</div>
	)
}

export default AddProducts

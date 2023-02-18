import React, { useEffect } from 'react'
import styles from '../../common/styles/Headers.module.scss'
import { useState } from 'react'

function ProductsFilters({ products, setFilteredProducts }) {
	const [filterValue, setFilterValue] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('')
	const [foodOnly, setFoodOnly] = useState(false)

	const handleFilterInputChange = event => {
		setFilterValue(event.target.value)
	}

	const handleSelectedCategory = event => {
		setSelectedCategory(event.target.value)
	}

	const onlyFoodDisplay = event => {
		setFoodOnly(event.target.checked)
	}

	const resetFilters = () => {
		setFilterValue('')
		setSelectedCategory('')
		setFoodOnly(false)
	}

	const categories = products.map(product => product.kategoria)
	const uniqueCategories = [...new Set(categories)]

	useEffect(() => {
		let filteredList = products.filter(product => product.nazwa.includes(filterValue.toLocaleLowerCase()))

		if (foodOnly) {
			console.log('1')
			filteredList = filteredList.filter(product => product.produktSpozywczy === true)
		}

		if (selectedCategory) {
			console.log('2')
			filteredList = filteredList.filter(product => product.kategoria === selectedCategory)
		}
		setFilteredProducts(filteredList)
	}, [filterValue, selectedCategory, foodOnly, products, setFilteredProducts])
	return (
		<div className={styles.Wrapper}>
			<b>
				<h5>Products Filters:</h5>
			</b>
			<p>&nbsp;&nbsp;&nbsp;</p>
			<input value={filterValue} onChange={handleFilterInputChange}></input>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<select value={selectedCategory} onChange={handleSelectedCategory}>
				<option key='all' value={''}>
					Categories
				</option>
				{uniqueCategories.map(category => (
					<option value={category} key={category}>
						{category}
					</option>
				))}{' '}
			</select>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<b>
				<h5>Only food:</h5>
			</b>
			<input type='checkbox' onChange={onlyFoodDisplay} value={foodOnly} checked={foodOnly}></input>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<button onClick={resetFilters}>Reset</button>
		</div>
	)
}

export default ProductsFilters

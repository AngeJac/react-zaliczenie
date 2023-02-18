import React from 'react'
import commonColumnsStyles from '../../common/styles/Columns.module.scss'

class ProductsList extends React.Component {
	render() {
		const { products, addToCart } = this.props

		return (
			<div className={commonColumnsStyles.App}>
				<header className={commonColumnsStyles.AppHeader}>
					<h3>Available products:</h3>
					<ul>
						{products.map(product => {
							return (
								<li onClick={() => addToCart(prevState => [...prevState, product])} key={product.id}>
									{product.nazwa}
								</li>
							)
						})}
					</ul>
				</header>
			</div>
		)
	}
}

export default ProductsList

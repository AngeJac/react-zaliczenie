import React from 'react'
import commonColumnsStyles from '../../common/styles/Columns.module.scss'

class ProductsList extends React.Component {
	render() {
		const { products, handleClick } = this.props
		return (
			<div className={commonColumnsStyles.App}>
				<header className={commonColumnsStyles.AppHeader}>
					<h3>Products list:</h3>
					<ul>
						{products.map((product, id) => (
							<li key={product.id} onClick={() => handleClick(id)}>
								<label>{product.nazwa}</label>
							</li>
						))}
					</ul>
				</header>
			</div>
		)
	}
}

export default ProductsList

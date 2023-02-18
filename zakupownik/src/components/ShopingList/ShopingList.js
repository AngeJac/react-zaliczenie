import React from 'react'
import commonColumnsStyles from '../../common/styles/Columns.module.scss'
function ShopingList(props) {
	const { shoppingProducts } = props
	const clickToRemove = indexRemoved => {
		props.addToCart(prevState => prevState.filter((product, index) => index !== indexRemoved))
	}

	return (
		<div className={commonColumnsStyles.App}>
			<header className={commonColumnsStyles.AppHeader}>
				<div>
					<ul>
						{shoppingProducts.length !== 0 && (
							<div className='list-header-info'>
								<h3>Shopping list:</h3>
							</div>
						)}
						{props.shoppingProducts.map((product, id) => {
							return (
								<li
									className='list-header-product'
									onContextMenu={e => {
										e.preventDefault()
										clickToRemove(id)
									}}
									key={id}
								>
									{product.nazwa}
								</li>
							)
						})}
					</ul>
					{shoppingProducts.length === 0 && (
						<div className='list-header-info'>Congratulations!! You buy everything from your shoping list!</div>
					)}
				</div>
			</header>
		</div>
	)
}

export default ShopingList

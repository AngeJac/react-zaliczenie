import React from 'react'
import commonColumnsStyles from '../../common/styles/Columns.module.scss'
function ShopingList({ shoppingProducts, handleLeftClick, handleRightClick }) {
	return (
		<div className={commonColumnsStyles.App}>
			<header className={commonColumnsStyles.AppHeader}>
				<p>
					<h3>Shoping list:</h3>
				</p>
				<ul>
					{shoppingProducts.map((product, id) => (
						<li
							key={id}
							onClick={() => {
								handleLeftClick(id)
							}}
							onContextMenu={e => {
								handleRightClick(id)
								e.preventDefault()
							}}
						>
							<label
								style={{
									textDecoration: `${product.completion ? 'line-through' : 'auto'}`,
								}}
							>
								{product.nazwa}
							</label>
						</li>
					))}
				</ul>
				{shoppingProducts.length === 0 && (
					<div className='list-header-info'>Congratulations!! You bought everythnig from your shopping list!</div>
				)}
			</header>
		</div>
	)
}

export default ShopingList

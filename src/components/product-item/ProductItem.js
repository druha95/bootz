import React from 'react';
import './ProductItem.scss';
import EllipsisWithTooltip from 'react-ellipsis-with-tooltip'
import CurrencyFormat from 'react-currency-format';

const ProductItem = ({productName, brandName, actualPrice, fileName}) => (
    <div className={'product-item'}>
        <div className={'product-item__image-container'}>
            <img className={'product-item__image'} src={fileName} alt={productName}/>
        </div>
        <h2 className={'product-item__brand-name'}>
            <EllipsisWithTooltip placement="bottom">
                {brandName}
            </EllipsisWithTooltip>
        </h2>
        <h3 className={'product-item__product-name'}>
            <EllipsisWithTooltip placement="bottom">
                {productName}
            </EllipsisWithTooltip>
        </h3>
        <p className={'product-item__price'}>
            <CurrencyFormat value={actualPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </p>
    </div>
);

export default ProductItem;
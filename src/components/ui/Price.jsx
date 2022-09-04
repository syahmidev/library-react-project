import React from 'react';

const Price = ( {salePrice, originalPrice} ) => {
    return (
        <div className="book__price">
        {
            salePrice ? 
            <>
                <span className="book__price--normal">MYR {originalPrice}</span>
                MYR {salePrice.toFixed(2)}
            </>
            : 
            <>
                MYR {originalPrice.toFixed(2)}
            </>
        }
      </div>
    );
}

export default Price;

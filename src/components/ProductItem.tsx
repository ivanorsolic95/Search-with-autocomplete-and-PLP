import React from 'react';
import ProductHit from '../types.tsx/ProductHit';
import '../css/globals.css'

const ProductItem: React.FC<{ hit: ProductHit, components: any }> = ({ hit, components }) => {
    const lastParentCategory = hit.parent_categories ? Object.values(hit.parent_categories).pop() : '';
  
    return (
      <a href={hit.url} className="aa-ItemWrapper">
        <div className="aa-ItemContent">
          <div className="aa-ItemIcon aa-ItemIcon--picture aa-ItemIcon--alignTop">
            <img src={hit.image} alt={hit.name} width="40" height="40" />
          </div>
          <div className="aa-ItemContentBody">
            <div className="aa-ItemContentTitle">
              <components.Highlight hit={hit} attribute="name" />
            </div>
            <div className="aa-ItemContentDescription">
              <div>In <strong>{lastParentCategory}</strong></div>
              <div>SKU: {hit.sku}</div>
              <div>${hit.price}</div>
            </div>
          </div>
        </div>
      </a>
    );
};

export default ProductItem;
  
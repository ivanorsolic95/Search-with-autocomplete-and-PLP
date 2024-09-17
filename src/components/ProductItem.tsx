import React from 'react';
import ProductHit from '../types.tsx/ProductHit';

const ProductItem: React.FC<{ hit: ProductHit, components: any, query: string, addItem: (item: any) => void }> = ({ hit, components, addItem, query }) => {
  const lastParentCategory = hit.parent_categories ? Object.values(hit.parent_categories).pop() : '';

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Handle left-click (button === 0) or middle-click (button === 1) or right-click (button === 2)
    if (event.button === 0 || event.button === 1 || event.button === 2) {
      // Save the recent search term manually
      addItem({id:query ,label: query });
    }
  };
  
  return (
    <a href={hit.url} className="aa-ItemWrapper" onMouseDown={handleClick}>
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
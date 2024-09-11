import type { BaseItem } from '@algolia/autocomplete-core';

type ProductHit = BaseItem & {
    name: string;
    sku: string;
    summary: string;
    image: string;
    price: number;
    url: string;
    parent_categories: { [key: string]: string };
    categories: string[];
};

export default ProductHit;
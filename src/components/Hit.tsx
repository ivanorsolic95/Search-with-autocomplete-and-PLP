import React from "react";
import { Highlight } from "react-instantsearch";
import type { Hit } from 'instantsearch.js';

type HitProps = {
    hit: Hit & {
      parent_categories?: Record<string, string>;
      image: string;
      name: string;
      sku: string;
      prices: Record<string, string>;
    };
  };

export function Hit({ hit }: HitProps) {
    const lastParentCategory = hit.parent_categories
      ? (Object.values(hit.parent_categories).pop() as string)
      : '';
  
    const url_to_product = "https://cyber64-sb.europe-west1.gcp.storefrontcloud.io/product/" + hit.sku;
    return (
      
      <article>
        <img src={hit.image} alt={hit.name} />
        <div>
        <a href={url_to_product}>
          <h1>
            <Highlight attribute="name" hit={hit} />
          </h1>
          </a>
          <div>
            In <strong>{lastParentCategory}</strong>
          </div>
          <div>SKU: {hit.sku}</div>
          <div>${hit.prices.USD}</div>
          <div>{hit.summary}</div>
          <p>
            <Highlight attribute="name" hit={hit} />
          </p>
        </div>
      </article>
      
    );
    
  }
  
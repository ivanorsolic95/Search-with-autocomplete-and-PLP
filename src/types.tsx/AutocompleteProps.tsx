import type { SearchClient } from 'algoliasearch/lite';
import type { BaseItem } from '@algolia/autocomplete-core';
import type { AutocompleteOptions } from '@algolia/autocomplete-js';

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
    searchClient: SearchClient;
    className?: string;
};

export default AutocompleteProps;
  
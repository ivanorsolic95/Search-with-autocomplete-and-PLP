import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';

export const useRecentSearchesPlugin = (setInstantSearchUiState: any) => {
  const recentSearches = createLocalStorageRecentSearchesPlugin({
    key: 'instantsearch',
    limit: 3,
    transformSource({ source }) {
      return {
        ...source,
        onSelect({ item }) {
          setInstantSearchUiState({
            query: item.label,
            category: item.category,
          });
        },
      };
    },
  });

  const { addItem } = recentSearches.data!;

  return {recentSearches, addItem};
};

import React from 'react';
import { Panel } from './Panel';
import { RefinementList, useRefinementList } from 'react-instantsearch';
import ConditionalRefinementPanelProps from '../types.tsx/ConditionalRefinementPanelProps'

export function ConditionalRefinementPanel({
  header,
  attribute,
  showMore,
  searchable,
  sortBy,
}: ConditionalRefinementPanelProps) {
  const { items, refine } = useRefinementList({ attribute });

  const shouldRender = items.length > 0 || items.some(item => item.isRefined);

  if (!shouldRender) {
    return null;
  }

  return (
    <Panel header={header}>
      <RefinementList
        attribute={attribute}
        showMore={showMore}
        searchable={searchable}
        sortBy={sortBy}
      />
    </Panel>
  );
}

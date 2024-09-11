type ConditionalRefinementPanelProps = {
    header: string;
    attribute: string;
    showMore?: boolean;
    searchable?: boolean;
    sortBy?: (a: string, b: string) => number;
};

export default ConditionalRefinementPanelProps;
  
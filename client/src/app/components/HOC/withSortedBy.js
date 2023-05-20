import { ASC, DESC } from 'app/constants/SortedBy';
import React, { useState } from 'react';

const withSortBy = (OriginalComponent, initialSortedColumn, initialSortBy = ASC) => {
  const ModifiedComponent = () => {
    const [sortedBy, setSortedBy] = useState(initialSortBy);
    const [sortedColumn, setSortedColumn] = useState(initialSortedColumn);

    const onSort = cellName => {
      const isAsc = sortedColumn === cellName && sortedBy === ASC;
      setSortedBy(isAsc ? DESC : ASC);
      setSortedColumn(cellName);
    };

    return <OriginalComponent sortedBy={sortedBy} sortedColumn={sortedColumn} onSort={onSort} />;
  };
  return ModifiedComponent;
};

export default withSortBy;

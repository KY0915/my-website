import React, { useMemo } from 'react';

export default function TableOfContents({ items, currentHeaderUrl }) {
  const replaceItems = items;
  return items ? (
    <nav>
      <h3>TABLE OF CONTENTS</h3>
      <div dangerouslySetInnerHTML={{ __html: replaceItems }} />
    </nav>
  ) : null;
}

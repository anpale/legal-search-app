import React from 'react';

export function PageMeta({ page }) {
  if (!page) return null;

  return (
    <div className="mb-8">
      <title>{page.title} - Legal Resources</title>
      <meta name="description" content={page.metaDescription} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.metaDescription} />
      <meta name="last-modified" content={page.modifiedAt} />
    </div>
  );
}

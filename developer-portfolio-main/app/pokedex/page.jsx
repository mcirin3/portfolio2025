// @flow strict

"use client";

import PageHeader from "../components/page-header";
import TCGCollectionManager from "../components/tcg-collection/tcg-collection-manager";

export default function TCGCollectionPage() {
  return (
    <main className="relative">
      <div className="app-shell mx-auto px-4 sm:px-6 md:px-10 py-12 lg:py-20">
        <PageHeader
          eyebrow="Holographic Collection"
          title="Pokemon TCG Cards"
          subtitle="My personal Pokemon Trading Card Game collection from TCG Pocket"
        />
        <TCGCollectionManager />
      </div>
    </main>
  );
}

"use client";
import BuilderPage from "../../../src/components/BuilderPage";
import "../../../src/builder-registry";

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function DynamicBuilderPage({ params }: PageProps) {
  const slug = params.slug.join('/');

  return <BuilderPage model="page" slug={slug} />;
}
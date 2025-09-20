"use client";
import { use } from "react";
import BuilderPage from "../../../src/components/BuilderPage";
import "../../../src/builder-registry";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default function DynamicBuilderPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug.join('/');

  return <BuilderPage model="page" slug={slug} />;
}
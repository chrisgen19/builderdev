"use client";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useEffect, useState } from "react";

// Initialize Builder.io
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderPageProps {
  model?: string;
  slug?: string;
}

const BuilderPage: React.FC<BuilderPageProps> = ({
  model = "page",
  slug = "home"
}) => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);

        // Fetch content from Builder.io
        const builderContent = await builder
          .get(model, {
            userAttributes: {
              urlPath: `/${slug === 'home' ? '' : slug}`,
            },
          })
          .toPromise();

        if (builderContent) {
          setContent(builderContent);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching Builder content:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [model, slug]);

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading page content...</p>
        </div>
      </div>
    );
  }

  // Show not found message if no content and not in preview mode
  if (notFound && !isPreviewing) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            This page hasn't been created in Builder.io yet.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>To create this page:</strong>
              <br />
              1. Go to your Builder.io dashboard
              <br />
              2. Create a new "page" with URL: /{slug}
              <br />
              3. Add your custom components!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Render the Builder.io content
  return (
    <BuilderComponent
      model={model}
      content={content}
      // Enable editing in Builder.io visual editor
      options={{
        includeRefs: true,
      }}
    />
  );
};

export default BuilderPage;
"use client";
import Image from "next/image";
import ProductCard from "../src/components/ProductCard";
import BlogPostLoop from "../src/components/BlogPostLoop";
import SimpleHelloCard from "../src/components/SimpleHelloCard";
import "../src/builder-registry";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8">
      <main className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Image
            className="dark:invert mx-auto mb-8"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Builder.io Components Demo
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Custom components ready to use in Builder.io visual editor.
            From simple greeting cards to complex product displays and blog loops.
          </p>

          {/* Builder.io Editor Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/builder"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              🎨 Open Builder.io Editor
            </a>
            <a
              href="https://builder.io/content"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              🚀 Builder.io Dashboard
            </a>
          </div>
        </div>

        {/* Simple Hello Card Demo */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📚 Learning Component: Simple Hello Card
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perfect for learning! This component shows the basics of creating Builder.io components with detailed comments in the code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <SimpleHelloCard
              name="Developer"
              message="Learn how to build components step by step!"
              backgroundColor="#dbeafe"
              textColor="#1e40af"
              showBorder={true}
              borderRadius={12}
            />
            <SimpleHelloCard
              name="Designer"
              message="Customize everything visually in Builder.io!"
              backgroundColor="#fef3c7"
              textColor="#92400e"
              showBorder={false}
              borderRadius={20}
            />
            <SimpleHelloCard
              name="Student"
              message="This component teaches you the fundamentals."
              backgroundColor="#ecfdf5"
              textColor="#065f46"
              showBorder={true}
              borderRadius={4}
            />
          </div>

          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">
              🎓 What You'll Learn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-700">
              <div>
                <h4 className="font-medium mb-2">Component Basics:</h4>
                <ul className="text-left space-y-1">
                  <li>• Props and TypeScript interfaces</li>
                  <li>• Default values and destructuring</li>
                  <li>• Dynamic styles and CSS</li>
                  <li>• JSX structure and rendering</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Builder.io Integration:</h4>
                <ul className="text-left space-y-1">
                  <li>• Field types (string, color, boolean, number)</li>
                  <li>• Component registration</li>
                  <li>• Helper text and defaults</li>
                  <li>• Visual editor configuration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProductCard
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop"
            productTitle="Premium Running Shoes"
            description="High-performance running shoes designed for comfort and durability. Perfect for daily training and competitive running."
            price="$129.99"
            enquireUrl="mailto:sales@example.com?subject=Enquiry about Premium Running Shoes"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
            productTitle="Wireless Headphones"
            description="Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals."
            price="$199.99"
            enquireUrl="https://example.com/contact?product=headphones"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop"
            productTitle="Smart Watch"
            description="Advanced smartwatch with health monitoring, GPS, and smartphone integration. Stay connected and track your fitness goals."
            price="$299.99"
            enquireUrl="tel:+1234567890"
          />
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready for Builder.io
          </h2>
          <p className="text-gray-600 mb-4">
            The ProductCard component is now registered with Builder.io and ready to use in your visual editor.
          </p>
          <div className="text-sm text-gray-500">
            <p>Component features:</p>
            <ul className="mt-2 space-y-1">
              <li>• Customizable product image</li>
              <li>• Editable title and description</li>
              <li>• Price display</li>
              <li>• Configurable enquire button URL</li>
              <li>• Responsive design with Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Blog Post Loop Demo */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Blog Post Loop Component
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dynamic blog posts fetched from DummyJSON API. Fully customizable in Builder.io with options for grid layout, post count, and display settings.
            </p>
          </div>

          <BlogPostLoop
            postsToShow={6}
            gridColumns={3}
            showTags={true}
            showReactions={true}
            showViews={true}
            readMoreText="Read Full Post"
            loadingText="Loading amazing posts..."
          />
        </div>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            BlogPostLoop Component Features
          </h2>
          <p className="text-gray-600 mb-4">
            The BlogPostLoop component fetches live data from DummyJSON API and is fully configurable in Builder.io.
          </p>
          <div className="text-sm text-gray-500">
            <p>Component features:</p>
            <ul className="mt-2 space-y-1">
              <li>• Live API data from https://dummyjson.com/posts</li>
              <li>• Configurable post count (1-30 posts)</li>
              <li>• Responsive grid layout (1-4 columns)</li>
              <li>• Toggle tags, reactions, and view counts</li>
              <li>• Customizable button text and loading messages</li>
              <li>• Error handling and loading states</li>
              <li>• Mobile-responsive design</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import ProductCard from "./src/components/ProductCard";
import BlogPostLoop from "./src/components/BlogPostLoop";
import SimpleHelloCard from "./src/components/SimpleHelloCard";
import { RenderBuilderContent } from "./components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  inputs: [
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
      required: false,
      defaultValue: "https://via.placeholder.com/300x200",
      helperText: "Upload product image"
    },
    {
      name: "productTitle",
      type: "string",
      required: false,
      defaultValue: "Product Name",
      helperText: "Enter the product title"
    },
    {
      name: "description",
      type: "longText",
      required: false,
      defaultValue: "Product description goes here",
      helperText: "Enter a detailed product description"
    },
    {
      name: "price",
      type: "string",
      required: false,
      defaultValue: "$99.99",
      helperText: "Enter the product price (e.g., $99.99)"
    },
    {
      name: "enquireUrl",
      type: "url",
      required: false,
      defaultValue: "#",
      helperText: "URL for the enquire button (contact form, email, etc.)"
    },
  ],
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/shopping-cart.png"
});

Builder.registerComponent(BlogPostLoop, {
  name: "BlogPostLoop",
  inputs: [
    {
      name: "postsToShow",
      type: "number",
      required: false,
      defaultValue: 6,
      helperText: "Number of posts to display (1-30)"
    },
    {
      name: "gridColumns",
      type: "number",
      required: false,
      defaultValue: 3,
      helperText: "Number of columns in grid (1-4)"
    },
    {
      name: "showTags",
      type: "boolean",
      required: false,
      defaultValue: true,
      helperText: "Display post tags"
    },
    {
      name: "showReactions",
      type: "boolean",
      required: false,
      defaultValue: true,
      helperText: "Display likes and dislikes"
    },
    {
      name: "showViews",
      type: "boolean",
      required: false,
      defaultValue: true,
      helperText: "Display view count"
    },
    {
      name: "readMoreText",
      type: "string",
      required: false,
      defaultValue: "Read More",
      helperText: "Text for the read more button"
    },
    {
      name: "loadingText",
      type: "string",
      required: false,
      defaultValue: "Loading posts...",
      helperText: "Text shown while loading"
    }
  ],
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/article.png"
});

// SIMPLE COMPONENT REGISTRATION EXAMPLE
// This shows you step-by-step how to register a component with Builder.io
Builder.registerComponent(SimpleHelloCard, {
  // 1. Component name (appears in Builder.io's component panel)
  name: "SimpleHelloCard",

  // 2. Define the inputs (fields that appear in Builder.io editor)
  inputs: [
    {
      // TEXT INPUT FIELD
      name: "name",                    // Property name (matches component props)
      type: "string",                  // Field type (creates text input)
      required: false,                 // Optional field
      defaultValue: "Friend",          // Default value
      helperText: "Enter a name to greet" // Tooltip in Builder.io
    },
    {
      // LONG TEXT INPUT FIELD
      name: "message",
      type: "longText",                // Creates textarea instead of single line
      required: false,
      defaultValue: "Welcome to my site!",
      helperText: "Enter your welcome message"
    },
    {
      // COLOR PICKER FIELD
      name: "backgroundColor",
      type: "color",                   // Creates color picker
      required: false,
      defaultValue: "#f3f4f6",
      helperText: "Choose background color"
    },
    {
      // ANOTHER COLOR PICKER
      name: "textColor",
      type: "color",
      required: false,
      defaultValue: "#111827",
      helperText: "Choose text color"
    },
    {
      // BOOLEAN/CHECKBOX FIELD
      name: "showBorder",
      type: "boolean",                 // Creates checkbox/toggle
      required: false,
      defaultValue: true,
      helperText: "Show border around card"
    },
    {
      // NUMBER INPUT FIELD
      name: "borderRadius",
      type: "number",                  // Creates number input
      required: false,
      defaultValue: 8,
      helperText: "Border radius in pixels (0-50)"
    }
  ],

  // 3. Component icon in Builder.io (optional)
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/message-circle.png"
});

Builder.registerComponent(withChildren(RenderBuilderContent), {
  name: "RenderBuilderContent",
  inputs: [
    {
      name: "ampMode",
      type: "boolean",
    },
    {
      name: "apiKey",
      type: "string",
    },
    {
      name: "builder",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Builder",
      },
    },
    {
      name: "builderBlock",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "BuilderElement",
      },
    },
    {
      name: "codegen",
      type: "boolean",
    },
    {
      name: "content",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "BuilderContent",
      },
    },
    {
      name: "contentError",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "(error: any) => void",
      },
    },
    {
      name: "contentLoaded",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "(data: any, content: BuilderContent) => void",
      },
    },
    {
      name: "context",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "customComponents",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "RegisteredComponent[]",
      },
    },
    {
      name: "data",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "dataOnly",
      type: "boolean",
    },
    {
      name: "emailMode",
      type: "boolean",
    },
    {
      name: "entry",
      type: "string",
    },
    {
      name: "hydrate",
      type: "boolean",
    },
    {
      name: "inlineContent",
      type: "boolean",
    },
    {
      name: "isChild",
      type: "boolean",
    },
    {
      name: "isStatic",
      type: "boolean",
    },
    {
      name: "locale",
      type: "string",
    },
    {
      name: "location",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Location | Url",
      },
    },
    {
      name: "model",
      type: "string",
    },
    {
      name: "modelName",
      type: "string",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "noAsync",
      type: "boolean",
    },
    {
      name: "options",
      type: "string",
      meta: {
        ts: "GetContentOptions",
      },
    },
    {
      name: "renderLink",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "stopClickPropagationWhenEditing",
      type: "boolean",
    },
    {
      name: "url",
      type: "string",
    },
  ],
});

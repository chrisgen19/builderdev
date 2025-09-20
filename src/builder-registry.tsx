"use client";
import { builder, Builder } from "@builder.io/react";
import ProductCard from "./components/ProductCard";

// Register custom components
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  inputs: [
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
      required: false,
      defaultValue: "https://via.placeholder.com/300x200",
      helperText: "Upload or provide URL for product image"
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
    }
  ],
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/shopping-cart.png"
});
import React from 'react';
import { withBuilder } from '@builder.io/react';

interface ProductCardProps {
  image?: string;
  productTitle?: string;
  description?: string;
  price?: string;
  enquireUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image = 'https://via.placeholder.com/300x200',
  productTitle = 'Product Name',
  description = 'Product description goes here',
  price = '$99.99',
  enquireUrl = '#'
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={productTitle}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Product Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {productTitle}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600">
            {price}
          </span>
        </div>

        {/* Enquire Button */}
        <a
          href={enquireUrl}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-center inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
};

// Register the component with Builder.io
withBuilder(ProductCard, {
  name: 'ProductCard',
  inputs: [
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
      required: false,
      defaultValue: 'https://via.placeholder.com/300x200',
      helperText: 'Upload or provide URL for product image'
    },
    {
      name: 'productTitle',
      type: 'string',
      required: false,
      defaultValue: 'Product Name',
      helperText: 'Enter the product title'
    },
    {
      name: 'description',
      type: 'longText',
      required: false,
      defaultValue: 'Product description goes here',
      helperText: 'Enter a detailed product description'
    },
    {
      name: 'price',
      type: 'string',
      required: false,
      defaultValue: '$99.99',
      helperText: 'Enter the product price (e.g., $99.99)'
    },
    {
      name: 'enquireUrl',
      type: 'url',
      required: false,
      defaultValue: '#',
      helperText: 'URL for the enquire button (contact form, email, etc.)'
    }
  ],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/shopping-cart.png'
});

export default ProductCard;
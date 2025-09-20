# ProductCard Component for Builder.io

A custom ProductCard component designed for Builder.io visual editor integration.

## Features

- **Product Image**: Upload or provide URL for product images (supports JPEG, PNG, SVG, WebP)
- **Product Title**: Customizable product name/title
- **Description**: Long-form product description with automatic text truncation
- **Price**: Flexible price display (supports any currency format)
- **Enquire Button**: Configurable action button with custom URL (supports mailto:, tel:, https:, etc.)
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Hover Effects**: Smooth transitions and hover states

## Setup Instructions

1. **Install Dependencies** (already done):
   ```bash
   npm install @builder.io/react @builder.io/sdk
   ```

2. **Configure Builder.io API Key**:
   - Copy `.env.local.example` to `.env.local`
   - Get your API key from [Builder.io Account](https://builder.io/account/organization)
   - Replace `your_builder_api_key_here` with your actual API key

3. **Component Registration**:
   - The component is automatically registered in `src/builder-registry.tsx`
   - Import this file in your main app to enable the component

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | string | placeholder | Product image URL or uploaded file |
| `productTitle` | string | "Product Name" | Product title/name |
| `description` | string | "Product description goes here" | Detailed product description |
| `price` | string | "$99.99" | Product price (any format) |
| `enquireUrl` | string | "#" | URL for enquire button action |

## Usage in Builder.io

1. Log into your Builder.io dashboard
2. Create or edit a page/section
3. Look for "ProductCard" in the custom components panel
4. Drag and drop the component into your design
5. Configure the component properties in the right panel:
   - Upload product images
   - Edit title and description
   - Set pricing
   - Configure enquire button URL (email, phone, contact form, etc.)

## Enquire Button URL Examples

- Email: `mailto:sales@example.com?subject=Product Enquiry`
- Phone: `tel:+1234567890`
- Contact Form: `https://yoursite.com/contact?product=productname`
- WhatsApp: `https://wa.me/1234567890?text=I'm interested in this product`

## Styling

The component uses Tailwind CSS classes for styling:
- Responsive grid layout
- Shadow effects and hover states
- Clean typography
- Flexible image handling
- Professional card design

## Development

To run the development server and see the component in action:

```bash
npm run dev
```

Visit [http://localhost:3002](http://localhost:3002) to see the component demo.

## File Structure

```
src/
├── components/
│   └── ProductCard.tsx          # Main component file
└── builder-registry.tsx         # Builder.io registration
app/
└── page.tsx                     # Demo page showing component usage
```

The component is now ready to use in Builder.io's visual editor!
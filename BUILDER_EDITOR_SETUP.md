# 🎨 Builder.io Visual Editor Setup Guide

Your Next.js app now supports Builder.io's visual editor! You can drag and drop your custom components to create pages visually.

## 🚀 Quick Start

### 1. Access the Editor
- **Local Editor**: Visit [http://localhost:3002/builder](http://localhost:3002/builder)
- **Builder.io Dashboard**: [https://builder.io/content](https://builder.io/content)

### 2. Create Your First Page

1. **Go to Builder.io Dashboard**
   - Login to your Builder.io account
   - Select your space/organization

2. **Create a New Page**
   - Click "New" → "Page"
   - Set the URL path (e.g., `/home`, `/about`, `/products`)
   - Choose "Visual Editor"

3. **Start Building**
   - Drag components from the left panel
   - Find your custom components: `ProductCard`, `BlogPostLoop`, `SimpleHelloCard`
   - Customize properties in the right panel
   - Preview and publish!

## 🛠️ Available Routes

Your app supports these Builder.io routes:

### Primary Editor Route
- **`/builder`** - Main Builder.io editable page
- Maps to Builder.io page with slug: `home`

### Dynamic Routes
- **`/builder/about`** - About page
- **`/builder/products`** - Products page
- **`/builder/contact`** - Contact page
- **`/builder/blog`** - Blog page
- **`/builder/[any-slug]`** - Any custom page

## 🎯 Custom Components Available

### 1. SimpleHelloCard
**Perfect for learning!**
- Name (text input)
- Message (long text)
- Background color (color picker)
- Text color (color picker)
- Show border (toggle)
- Border radius (number)

### 2. ProductCard
**E-commerce ready!**
- Product image (file upload)
- Product title (text)
- Description (long text)
- Price (text)
- Enquire URL (URL field)

### 3. BlogPostLoop
**Dynamic content!**
- Posts to show (number 1-30)
- Grid columns (number 1-4)
- Show tags (toggle)
- Show reactions (toggle)
- Show views (toggle)
- Read more text (text)
- Loading text (text)

## 🔧 How It Works

### Page Component Structure
```typescript
// src/components/BuilderPage.tsx
- Fetches content from Builder.io API
- Renders BuilderComponent with your content
- Handles loading and error states
- Supports visual editing mode
```

### Dynamic Routing
```
app/
├── builder/
│   ├── page.tsx                    # /builder (home page)
│   └── [...slug]/
│       └── page.tsx                # /builder/[any-path]
```

### Component Registration
```typescript
// builder-registry.ts
- All custom components registered
- Field types defined for visual editor
- Helper text and defaults configured
```

## 🎨 Using the Visual Editor

### Step 1: Create Page in Builder.io
1. Go to [builder.io/content](https://builder.io/content)
2. Click "New" → "Page"
3. Enter URL path: `/home` (or any path)
4. Click "Create"

### Step 2: Design Your Page
1. **Add Components**: Drag from left panel
2. **Customize**: Use right panel to edit properties
3. **Preview**: See changes in real-time
4. **Responsive**: Test mobile/tablet views

### Step 3: Configure Your Components

#### ProductCard Example:
- Upload product image
- Set title: "Premium Headphones"
- Write description
- Set price: "$199.99"
- Add enquire URL: "mailto:sales@company.com"

#### BlogPostLoop Example:
- Set posts to show: 9
- Choose grid columns: 3
- Toggle tags: ON
- Toggle reactions: ON
- Custom read more text: "Learn More"

#### SimpleHelloCard Example:
- Name: "Welcome Visitor"
- Message: "Thanks for visiting our site!"
- Background: Custom color
- Border radius: 15

### Step 4: Publish
1. Click "Publish" in Builder.io
2. Visit your page: `http://localhost:3002/builder`
3. See your changes live!

## 🔀 Page URLs

After creating pages in Builder.io, access them at:

- **Home**: `/builder` (slug: `home`)
- **About**: `/builder/about` (slug: `about`)
- **Products**: `/builder/products` (slug: `products`)
- **Contact**: `/builder/contact` (slug: `contact`)
- **Custom**: `/builder/your-custom-slug`

## 🛡️ Error Handling

### Page Not Found
If you visit a route that doesn't exist in Builder.io:
- Shows helpful "Page Not Found" message
- Instructions on how to create the page
- Links to Builder.io dashboard

### Loading States
- Spinner while fetching content
- Graceful error handling
- Preview mode support for editors

## 🎯 Best Practices

### 1. Page Organization
- Use descriptive URL slugs
- Group related pages logically
- Keep page names clear and consistent

### 2. Component Usage
- Start with SimpleHelloCard to learn
- Use ProductCard for e-commerce
- Use BlogPostLoop for dynamic content
- Combine components for rich layouts

### 3. Content Strategy
- Plan your page structure first
- Use consistent styling across components
- Test on different screen sizes
- Preview before publishing

## 🚀 Next Steps

1. **Create your first page** in Builder.io
2. **Experiment** with different components
3. **Customize** the styling and content
4. **Build** a complete website visually!

## 📖 Resources

- [Builder.io Documentation](https://www.builder.io/c/docs)
- [Visual Editor Guide](https://www.builder.io/c/docs/visual-editor)
- [Custom Components](https://www.builder.io/c/docs/custom-react-components)

---

**🎉 You're now ready to build visually with Builder.io!**

Visit `/builder` to start creating your first page with drag-and-drop components.
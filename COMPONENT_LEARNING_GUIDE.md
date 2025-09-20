# 📚 Builder.io Component Creation Guide

This guide explains how to create Builder.io components step by step using the `SimpleHelloCard` example.

## 🎯 What You'll Learn

1. **Basic React Component Structure**
2. **TypeScript Props and Interfaces**
3. **Builder.io Registration Process**
4. **Field Types and Configuration**
5. **Best Practices for Custom Components**

---

## 📝 Step 1: Create the Component File

Create a new `.tsx` file in `src/components/`:

```typescript
// src/components/SimpleHelloCard.tsx
import React from 'react';
```

## 📝 Step 2: Define Props Interface

```typescript
interface SimpleHelloCardProps {
  name?: string;           // Text input
  message?: string;        // Long text input
  backgroundColor?: string; // Color picker
  textColor?: string;      // Color picker
  showBorder?: boolean;    // Checkbox/toggle
  borderRadius?: number;   // Number input
}
```

**Key Points:**
- Use `?` to make props optional
- Each prop becomes an editable field in Builder.io
- Choose appropriate TypeScript types

## 📝 Step 3: Create the Component Function

```typescript
const SimpleHelloCard: React.FC<SimpleHelloCardProps> = ({
  // Destructure props with default values
  name = "Friend",
  message = "Welcome to my site!",
  backgroundColor = "#f3f4f6",
  textColor = "#111827",
  showBorder = true,
  borderRadius = 8
}) => {
  // Component logic here
};
```

**Key Points:**
- Use destructuring with default values
- Defaults are used when Builder.io doesn't provide values
- Keep defaults user-friendly

## 📝 Step 4: Build Dynamic Styles

```typescript
const cardStyles = {
  backgroundColor: backgroundColor,
  color: textColor,
  borderRadius: `${borderRadius}px`,
  border: showBorder ? '2px solid #d1d5db' : 'none'
};
```

**Key Points:**
- Create style objects from props
- Convert numbers to CSS units (`px`, `rem`, etc.)
- Use conditional logic for optional styles

## 📝 Step 5: Return JSX Structure

```typescript
return (
  <div className="p-6 max-w-md mx-auto shadow-lg" style={cardStyles}>
    <h2 className="text-2xl font-bold mb-4">
      Hello, {name}! 👋
    </h2>
    <p className="text-lg mb-4">
      {message}
    </p>
    <div className="text-sm opacity-75">
      <p>This is a simple Builder.io component!</p>
    </div>
  </div>
);
```

**Key Points:**
- Use props in JSX with `{propName}`
- Combine Tailwind classes with dynamic styles
- Keep markup semantic and accessible

## 📝 Step 6: Export the Component

```typescript
export default SimpleHelloCard;
```

---

## 🔧 Builder.io Registration

### Import the Component

```typescript
// builder-registry.ts
import SimpleHelloCard from "./src/components/SimpleHelloCard";
```

### Register with Builder.io

```typescript
Builder.registerComponent(SimpleHelloCard, {
  name: "SimpleHelloCard",
  inputs: [
    // Field configurations...
  ],
  image: "icon-url"
});
```

---

## 🎛️ Field Types Reference

### String Fields
```typescript
{
  name: "title",
  type: "string",           // Single line text
  required: false,
  defaultValue: "Hello",
  helperText: "Enter title"
}
```

### Long Text Fields
```typescript
{
  name: "description",
  type: "longText",         // Multi-line textarea
  required: false,
  defaultValue: "Description here",
  helperText: "Enter description"
}
```

### Color Picker Fields
```typescript
{
  name: "backgroundColor",
  type: "color",            // Color picker
  required: false,
  defaultValue: "#ffffff",
  helperText: "Choose background color"
}
```

### Boolean Fields
```typescript
{
  name: "showBorder",
  type: "boolean",          // Checkbox/toggle
  required: false,
  defaultValue: true,
  helperText: "Show border"
}
```

### Number Fields
```typescript
{
  name: "borderRadius",
  type: "number",           // Number input
  required: false,
  defaultValue: 8,
  helperText: "Border radius in pixels"
}
```

### File Upload Fields
```typescript
{
  name: "image",
  type: "file",             // File uploader
  allowedFileTypes: ["jpeg", "jpg", "png"],
  required: false,
  defaultValue: "https://placeholder.com/300x200",
  helperText: "Upload image"
}
```

### URL Fields
```typescript
{
  name: "link",
  type: "url",              // URL input with validation
  required: false,
  defaultValue: "#",
  helperText: "Enter URL"
}
```

---

## ✅ Best Practices

### 1. **Props Design**
- Keep props simple and intuitive
- Use descriptive names
- Provide sensible defaults
- Make most props optional

### 2. **Styling**
- Use Tailwind for base styles
- Use inline styles for dynamic values
- Keep responsive design in mind
- Test across different screen sizes

### 3. **Builder.io Integration**
- Write helpful `helperText` for each field
- Choose appropriate field types
- Group related fields logically
- Add meaningful component icons

### 4. **Code Organization**
- Add comments for complex logic
- Keep components focused and simple
- Export components properly
- Follow consistent naming conventions

### 5. **Testing**
- Test with different prop values
- Check responsive behavior
- Verify in Builder.io editor
- Test edge cases (empty values, etc.)

---

## 🚀 Next Steps

1. **Study the SimpleHelloCard component code**
2. **Try modifying the existing props**
3. **Add new field types**
4. **Create your own simple component**
5. **Test in Builder.io editor**

## 📖 Additional Resources

- [Builder.io Documentation](https://www.builder.io/c/docs)
- [React TypeScript Guide](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Happy Building! 🎉**

The `SimpleHelloCard` component is your starting point. Use it as a template to create more complex components as you learn.
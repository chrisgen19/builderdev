// 1. STEP 1: Import React (required for all components)
import React from 'react';

// 2. STEP 2: Define the Props Interface
// This tells TypeScript what properties our component accepts from Builder.io
interface SimpleHelloCardProps {
  // The "?" makes these properties optional (not required)
  // Each prop will become an editable field in Builder.io

  name?: string;           // Text input field
  message?: string;        // Text input field
  backgroundColor?: string; // Color picker field
  textColor?: string;      // Color picker field
  showBorder?: boolean;    // Checkbox/toggle field
  borderRadius?: number;   // Number input field
}

// 3. STEP 3: Create the Component Function
// This is where we define what our component looks like and does
const SimpleHelloCard: React.FC<SimpleHelloCardProps> = ({
  // Here we "destructure" the props and set default values
  // If Builder.io doesn't provide a value, use the default
  name = "Friend",                    // Default name
  message = "Welcome to my site!",    // Default message
  backgroundColor = "#f3f4f6",        // Default background (light gray)
  textColor = "#111827",              // Default text color (dark gray)
  showBorder = true,                  // Default to show border
  borderRadius = 8                    // Default border radius
}) => {

  // 4. STEP 4: Create Dynamic Styles
  // We build CSS styles based on the props from Builder.io
  const cardStyles = {
    backgroundColor: backgroundColor,   // Use the color from Builder.io
    color: textColor,                  // Use the text color from Builder.io
    borderRadius: `${borderRadius}px`, // Convert number to CSS pixels
    border: showBorder ? '2px solid #d1d5db' : 'none' // Show border if enabled
  };

  // 5. STEP 5: Return the JSX (the HTML-like structure)
  return (
    <div
      className="p-6 max-w-md mx-auto shadow-lg"
      style={cardStyles}  // Apply our dynamic styles
    >
      {/* Header with greeting */}
      <h2 className="text-2xl font-bold mb-4">
        Hello, {name}! 👋
      </h2>

      {/* Message content */}
      <p className="text-lg mb-4">
        {message}
      </p>

      {/* Simple info section */}
      <div className="text-sm opacity-75">
        <p>This is a simple Builder.io component!</p>
        <p>✨ You can customize everything above in Builder.io</p>
      </div>
    </div>
  );
};

// 6. STEP 6: Export the Component
// This makes the component available to import in other files
export default SimpleHelloCard;
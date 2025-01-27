# React 3D Flip Numbers

The `react-3d-flip-numbers` package is a React component for creating animated 3D flipping numbers. It provides a visually appealing way to display changing numeric values with smooth transitions and customizable styles.  

![](react-3d-flip-numbers.gif)

| Version    | Compatibility |
|------------|---------------|
| 1.x        | React 18.2+   |

### Dependencies
This package uses the following libraries as dependencies:
```json
"react": "^18.2.0"
```

---

### Table of Contents

- [Installation](#installation)  
- [Exports](#exports)  
- [Usage](#usage)  
- [Configuration Options](#configuration-options)  
- [Scripts](#scripts)  
- [License](#license)  

---

### Installation

```bash
npm install react-3d-flip-numbers
```

---

### Exports

The primary export is `<FlipNumbers>`.

```tsx
// Import the FlipNumbers component
import { FlipNumbers } from 'react-3d-flip-numbers';
```

---

### Usage

Here's a basic example of how to use the component:  

```tsx
import React, { useState } from 'react';
import { FlipNumbers } from 'react-3d-flip-numbers';

const App = () => {
  const [value, setValue] = useState(123);

  return (
    <div>
      <FlipNumbers
        value={value}
        formatter={(number) => number.toLocaleString()} // Format the number
        wrapperClassName="custom-wrapper"               // Optional: CSS class for the wrapper
        numberClassName="custom-number"                 // Optional: CSS class for each number
        height={30}                                     // Height of each number block
        duration={0.5}                                  // Animation duration in seconds
        delay={0.1}                                     // Animation delay in seconds
        hasShadow={true}                                // Optional: Adds shadow for enhanced 3D effect  
      />  
      />
      <button onClick={() => setValue((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
```

---

### Configuration Options

The `<FlipNumbers>` component accepts the following props:  

| Prop               | Type                     | Default        | Description                                   |
|--------------------|--------------------------|----------------|-----------------------------------------------|
| `value`            | `number` or `string`    | Required       | The value to display.                        |
| `formatter`        | `(number) => string`    | `(n) => n.toString()` | Function to format the number.           |
| `wrapperClassName` | `string`                | `''`           | Optional CSS class for the container.        |
| `numberClassName`  | `string`                | `''`           | Optional CSS class for individual numbers.   |
| `height`           | `number`                | `50`           | Height of each number block in pixels.       |
| `duration`         | `number`                | `0.3`          | Animation duration in seconds.               |
| `delay`            | `number`                | `0`            | Animation delay in seconds.                  |
| `hasShadow`        | `boolean`               | `false`        | Adds shadow for a more pronounced 3D effect.                  |


---

### Styling

You can customize the appearance of the component using CSS. The following class names are used:  

- `.flip-numbers` - Wrapper for the entire number sequence, centers content horizontally and vertically.  
- `.invisible` - Hides elements visually while keeping them in the DOM.  
- `.flip-number-container` - Container for each number, manages overflow and stacking with `z-index`.  
- `.flip-number` - Represents each number as an independent 3D element, enabling flipping animations.  
- `.flip-number div` - Ensures smooth font rendering and proper 3D effects with `backface-visibility`.  
- `.flip-number-fake` - Adds a semi-transparent, smaller "fake" number used for flipping transitions.  
- `.flip-number-active` - Highlights the active number prominently during the animation.  
- `.flip-shadow` - Adds shadow effects for enhanced 3D visuals (applied when hasShadow is true).

You can modify these styles in your CSS to align the component’s design with your application.

---

### Scripts

The following scripts are available:  

#### `npm test`  
Runs the test suite in watch mode.  

#### `npm run build`  
Builds the package and outputs the distributable files in the `dist` directory. 

---

### License

This project is licensed under the [MIT License](LICENSE).  

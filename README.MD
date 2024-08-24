# InfiScroll

![alt text](InfiScrollLogo.png)

**InfiScroll** is an open-source React component designed to help developers easily implement infinite scrolling in their applications. With a focus on simplicity and flexibility, InfiScroll allows you to seamlessly load additional content as users reach the end of the page, providing a smooth and efficient user experience. Whether you’re building a social media feed, an e-commerce catalog, or any content-heavy application, InfiScroll makes infinite scrolling effortless to integrate and customize.

This description highlights the purpose and benefits of InfiScroll while also emphasizing its ease of use for developers.

## Features

- **Effortless Infinite Scrolling:** Easily set up infinite scrolling in your React applications, automatically triggering a callback function when the user reaches the end of the scrollable area.
- **Customizable Callback:** Define what happens when the user scrolls to the bottom, such as loading more data, updating the UI, or triggering any custom logic.
- **Smooth User Experience:** Ensures that new content loads seamlessly, providing a continuous and engaging user experience.
- **Simple Integration:** Designed for easy integration into your existing React projects with minimal setup required.

## Installation

Install the library using npm:

```bash
npm install infiscroll
```

## Examples

## Usage

```jsx
import React from "react";
import InfiScroll from "infiscroll";

const MyComponent = () => {
  const loadMoreData = () => {
    // Logic to load more data
  };

  return (
    <InfiScroll onScrollEnd={loadMoreData}>
      {/* Your content goes here */}
    </InfiScroll>
  );
};

export default MyComponent;
```

## Contributing

join our community on [Discord](https://discord.gg/ncUegvM2) to get started!

## [Code of Conduct](./CODE_OF_CONDUCT.md)

Nkia has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

### Contributors

<a href="https://github.com/nkia-development/InfiScroll/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nkia-development/InfiScroll" alt="contributors"/>
</a>

## License

InfiScroll is [MIT License](./LICENSE).

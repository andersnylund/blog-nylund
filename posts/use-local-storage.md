---
title: 'useLocalStorage hook with TypeScript'
date: '2020-04-21'
excerpt: "I found myself in a situation to constantly insert the same data into HTML forms over and over again while developing. The useState hook store the value in the component's state, but when refreshing the page or submitting the data the form data is reset."
---

I found myself in a situation to constantly insert the same data into HTML forms over and over again while developing. The useState hook store the value in the component's state, but when refreshing the page or submitting the data the form data is reset.

To solve this I found the useLocalStorage hook from [https://usehooks.com/useLocalStorage](https://usehooks.com/useLocalStorage). It is written in JavaScript, so I converted it into TypeScript.

```typescript
import { useState } from 'react';

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [string, typeof setValue] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {}
  };

  return [storedValue, setValue];
};
```

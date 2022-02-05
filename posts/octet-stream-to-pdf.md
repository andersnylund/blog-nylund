---
title: 'Azure Blob storage octet-stream to PDF'
date: '2021-01-04'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: ''
ogImage:
  url: ''
---

Azure Blob storage saves PDFs in _application/octet-stream_ mime type. They can not be opened as is, as they first need to be base64 decoded. This script reads the invalid file using the **base64topdf** library, decodes it, and saves it as a PDF that can be opened with any tool capable of reading PDF files.

```javascript
import base64topdf from 'base64topdf';
import fs from 'fs';

const file = fs.readFileSync('file', { encoding: 'utf-8' });
base64topdf.base64Decode(file, 'file.pdf');
```

**base64topdf** uses the following code

```javascript
base64Decode: (base64str, file) => {
  // create buffer object from base64 encoded string, it is important to tell the constructor at the string is base64 encoded
  var bitmap = new Buffer(base64str, 'base64');
  // write buffer to file
  fs.writeFileSync(file, bitmap);
},
```

so that could also be used instead of the library

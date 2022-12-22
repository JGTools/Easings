# Easings

[![npm](https://img.shields.io/npm/v/@jgtools/easings)](https://www.npmjs.com/package/@jgtools/easings)
[![npm](https://img.shields.io/npm/dm/@jgtools/easings)](https://www.npmjs.com/package/@jgtools/easings)
[![GitHub](https://img.shields.io/github/license/jgtools/easings)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

Collection of easing functions

## Installation

### Using npm

```bash
npm i @jgtools/easings
```

```javascript
// import all functions using a namespace
import * as Easings from "@jgtools/easings";
// or import functions individually
import { outElastic } from "@jgtools/easings";
// ...
```

### Using cdn

```html
<script type="module">
    // import all functions using a namespace
    import * as Easings from "https://cdn.jsdelivr.net/npm/@jgtools/easings@2.0.5/dist/index.min.js";
    // or import functions individually
    import { outElastic } from "https://cdn.jsdelivr.net/npm/@jgtools/easings@2.0.5/dist/index.min.js";
    // ...
</script>
```

## Usage

```javascript
import { outElastic } from "@jgtools/easings";
const res = outElastic(0.5);
```

### Easing functions cheat sheet:

https://easings.net/

## License

MIT

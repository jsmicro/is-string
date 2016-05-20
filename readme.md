# JSMicro - Is String

### **`isString(object)`**

Check does the given Javascript Object (array, object, string, etc) is a string.

### **`isNotString(object)`**

Check does the given Javascript Object (array, object, string, etc) is not a string.

## Browser Usage

```bash
bower install --save jsmicro-is-string
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-string/index.js">
<script type="text/javascript">
    var str = 'String';
    var nbr = 200;

    // Available in the window object.
    isString(str);      // true
    isString(nbr);      // false
    isNotString(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save jsmicro-is-string
```

```js
const str = require('jsmicro-is-string');

// Available in the global object.
isString('String'); // true
isString(23322333); // false
isNotString(23234); // true

// Also available in the export object.
str.isString('String'); // true
str.isString(23322333); // false
str.isNotString(23333); // true
```

## Changelogs

#### **`v1.0.1 - May 21, 2016`**

* Added .npmignore

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)

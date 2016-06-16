
# Problem

The issue is letter I and i is different in Turkish but as we all know that is not the case in english. And any programing language is desinged English in mind. Therefore, we need this fix to become how ecmascript should work or better form of this must. 

# Getting started.

Place the file before other scripts

# Turkish toLocaleLowerCase

This fixes the issue with "I" becoming "i" when toLocaleLowerCase called upon.

# Usage
```js
var text = "İstanbul";
text.toLocaleLowerCase("tr-TR"); // istanbul
```
# Turkish toLocaleUpperCase

This fixes the issue with "i" becoming "I" when toLocaleUpperCase called upon.

# Usage
```js
var text = "İstanbul";
text.toLocaleUpperCase("tr-TR"); // İSTANBUL
```

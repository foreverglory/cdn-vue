CDN for Vue
======

## Usage

```javascript
import Vue from 'vue';
import CDN from 'cdn-vue';

Vue.use(CDN, {
  url: 'http://cdn.domain.com'
});
```

vue file

```html
<template>
  <div>
    <img :src="logo|cdn" >
  </div>
</template>
<script>
  export default {
    data() {
      return {
        logo: '/images/logo.png'
      }
    }
  }
</script>
```

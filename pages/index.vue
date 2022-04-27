<template>
<!--  <LazyHydrate never >-->
    <Tutorial/>
<!--  </LazyHydrate>-->
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
  name: 'IndexPage',
  components:{
    LazyHydrate
  }
}
</script>

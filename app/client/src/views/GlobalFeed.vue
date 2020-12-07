<template>
  <div class="home-page">
    BANNER
    <div class="container page">
      <div class="row">
        <div class="col-md-9"><mcv-feed :api-url="apiUrl" /></div>
        <div class="col-md-3"><mcv-popular-tags /></div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from '@/components/Feed';
import McvPopularTags from '@/components/PopularTags';
export default {
  name: 'McvGlobalFeed',
  components: {
    McvFeed,
    McvPopularTags,
  },
  data() {
    return {
      apiUrl: '/articles',
    };
  },
};
</script>

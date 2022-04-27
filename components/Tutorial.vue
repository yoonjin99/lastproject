<template>
  <div>
    <h1>
      SSR
    </h1>
    <div class='div-contents'>
      <ul v-for="item in items">
        <li>NO : {{ item.exhId }}</li>
        <li>제목 : <nuxt-link :to="{name:'move', query:{exhId:item.exhId, name:item.name}}">{{ item.name }}</nuxt-link></li>
<!--        <img :src="require(`../assets/images/god.jpg`)">-->
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: [],			// asyncData 반환값 병합
    }
  },
  async fetch() {
    const res = await axios.get('http://localhost:8080/api/test');
    this.items = res.data;
  },
  head() {
    return {
      title: this.title,
      meta: [
        {property: 'og:title', content: 'title'},
        {property: 'og:type', content: 'article'},
        {property: 'og:url', content: 'http://c5e3b0ec.ngrok.io/blog/s'},// here it is just ngrok for my test
        {property: 'og:description', content: 'description'},
        {property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/dev-blog-2503f.appspot.com/o/postsStorage%2F-KxXdvvLqDHBcxdUfLgn%2Fonfleck?alt=media&token=24a9bf5b-dce2-46e8-b175-fb63f7501c98'},
        {property: 'twitter:image:src', content: 'https://firebasestorage.googleapis.com/v0/b/dev-blog-2503f.appspot.com/o/postsStorage%2F-KxXdvvLqDHBcxdUfLgn%2Fonfleck?alt=media&token=24a9bf5b-dce2-46e8-b175-fb63f7501c98'},
        {property: 'og:image:width', content: '1000'},
        {property: 'og:site_name', content: '41devs | blog'}
      ]
    }
  }
}
</script>

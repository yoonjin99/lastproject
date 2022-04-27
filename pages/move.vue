<template>
  <div>
    <h1>
      SSR Page
    </h1>
    <div class='div-contents'>
      <ul v-for="(item, index) in items">
        <li>NO : {{ item.prdId }}</li>
        <li>제목 : {{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ route, error }) {
    return axios.get(`http://localhost:8080/api/test2`, {params : {exhId : 1}})
      .then((res) => {
        return { items: res.data }
      })
      // .catch((e) => {
      //   error({ statusCode: 404, message: 'Post not found' })
      // })
  },
  head() {
    return {
      title: this.$route.query.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$route.query.name,
        },
        {property: 'og:title', content: this.$route.query.name + 'og:title 테스트 중---------------'},
      ]
    }
  }
}
</script>

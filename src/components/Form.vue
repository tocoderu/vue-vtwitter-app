<template>
  <form @submit.prevent="onSubmit">
    <textarea v-model="body" required placeholder="Type tweet here" />
    <button class="btn btnTweet" type="submit">Post Tweet</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      body: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', {
        id: Math.round(Math.random() * 30),
        avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
        body: this.body,
        likes: 0,
        date: new Date(Date.now()).toLocaleString()
      })

      // reset
      this.body = ''
    }
  }
}
</script>

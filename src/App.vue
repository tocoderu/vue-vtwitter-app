<template>
  <div class="wrapper">
    <!-- header -->
    <div class="wrapper-content">
      <div class="view">
        <div class="container">
          <Form @onSubmit="handleSubmit" />
          <List :items="items" />
        </div>
      </div>
    </div>
    <!-- footer -->
  </div>
</template>

<script>
import { ref } from 'vue'

import Form from '@/components/Form'
import List from '@/components/List'

export default {
  components: { Form, List },
  setup() {
    const items = ref([
      {
        id: 1,
        body: 'hello vue 3',
        likes: 12,
        avatar: `https://avatars.dicebear.com/api/male/1.svg`,
        date: new Date(Date.now()).toLocaleString()
      },
      {
        id: 2,
        body: 'hello world',
        likes: 6,
        avatar: `https://avatars.dicebear.com/api/male/2.svg`,
        date: new Date(Date.now()).toLocaleString()
      }
    ])
    const handleSubmit = item => items.value.push(item)

    return {
      items,
      handleSubmit
    }
  }
}
</script>

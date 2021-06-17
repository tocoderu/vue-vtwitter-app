<template>
  <select v-model="sortBy">
    <option value="date">Sort by date</option>
    <option value="likes">Sort by like</option>
  </select>
  <ul class="tweets__wrapper">
    <Item v-for="item in sorteredItems" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import { ref, computed } from 'vue'
import Item from '@/components/Item.vue'

export default {
  components: { Item },
  props: {
    items: {
      type: Array,
      reqired: true
    }
  },
  setup({ items }) {
    const sortBy = ref('date')

    const sorteredItems = computed(() => {
      return items.sort((a, b) => {
        if (a[sortBy.value] > b[sortBy.value]) return -1
        if (a[sortBy.value] < b[sortBy.value]) return 1
      })
    })

    return { sortBy, sorteredItems }
  }
}
</script>

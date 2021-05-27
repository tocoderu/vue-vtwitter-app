<template>
  <ul class="tweets__wrapper">
    <Item v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import Item from '@/components/Item.vue'

export default {
  components: { Item },
  props: {
    items: {
      type: Array,
      reqired: true
    }
  }
}
</script>

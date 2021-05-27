<template>
  <li class="tweet__wrapper">
    <div class="tweet">
      <div class="avatar">
        <img :src="item.avatar" />
      </div>
      <div class="tweet-content">
        <div class="tweet-header">
          <span>{{ item.date }}</span>
        </div>
        <div>{{ item.body }}</div>
        <div class="like">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </div>
          <span>{{ item.likes }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      reqired: true
    }
  }
}
</script>

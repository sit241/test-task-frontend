<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    onSelect: {
      type: Function,
      required: true,
    },
  });
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <div class="items">
      <button
        v-for="item in items"
        :key="item.id"
        @click="onSelect(item)"
        class="item-button"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .item-button {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
  }
</style>

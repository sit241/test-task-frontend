<script setup lang="ts">
  import { useItemsStore } from '~/store/items';
  import ItemList from '~/components/ItemList.vue';

  const itemsStore = useItemsStore();
</script>

<template>
  <div>
    <div class="top-blocks">
      <div>
        <h2>Выбранные вещи пользователя</h2>
        <div>
          <p
            v-for="item in itemsStore.selectedUserItems"
            :key="item.id"
          >
            {{ item.name }}
          </p>
        </div>
      </div>
      <div>
        <h2>Выбранная вещь</h2>
        <p v-if="itemsStore.selectedSelectableItem">
          {{ itemsStore.selectedSelectableItem.name }}
        </p>
      </div>
    </div>
    <div class="bottom-blocks">
      <ItemList
        :title="'User Items'"
        :items="itemsStore.userItems"
        :onSelect="itemsStore.selectUserItem"
      />
      <ItemList
        :title="'Selectable Items'"
        :items="itemsStore.selectableItems"
        :onSelect="itemsStore.selectSelectableItem"
      />
    </div>
  </div>
</template>

<style scoped>
  .top-blocks,
  .bottom-blocks {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
</style>

import { defineStore } from 'pinia';

interface Item {
  id: number;
  name: string;
}

export const useItemsStore = defineStore('items', {
  state: () => ({
    userItems: [
      { id: 1, name: 'Shoes 1' },
      { id: 2, name: 'Shoes 2' },
      { id: 3, name: 'Shoes 3' },
      { id: 4, name: 'Shoes 4' },
      { id: 5, name: 'T-shirt 1' },
      { id: 6, name: 'T-shirt 2' },
      { id: 7, name: 'T-shirt 3' },
      { id: 8, name: 'T-shirt 4' },
    ] as Item[],
    selectableItems: [
      { id: 11, name: 'Jacket 1' },
      { id: 12, name: 'Jacket 2' },
      { id: 13, name: 'Jacket 3' },
      { id: 14, name: 'Jacket 4' },
      { id: 15, name: 'Hoodie 1' },
      { id: 16, name: 'Hoodie 2' },
      { id: 17, name: 'Hoodie 3' },
      { id: 18, name: 'Hoodie 4' },
    ] as Item[],
    selectedUserItems: [] as Item[],
    selectedSelectableItem: null as Item | null,
  }),

  actions: {
    selectUserItem(item: Item) {
      const itemExists = this.selectedUserItems.find(
        (selected) => selected.id === item.id
      );

      if (!itemExists) {
        // Если длина больше 6, удаляем первый элемент
        if (this.selectedUserItems.length >= 6) {
          this.selectedUserItems.shift();
        }
        this.selectedUserItems.push(item);
      }
    },

    deselectUserItem(item: Item) {
      this.selectedUserItems = this.selectedUserItems.filter(
        (selected) => selected.id !== item.id
      );
    },

    selectSelectableItem(item: Item) {
      this.selectedSelectableItem = item;
    },
  },
});

import create from 'zustand';

type BookmarkItem = {
  id: string;
};

type UseBookmarks = {
  items: BookmarkItem[];
  bookmark: (itemId: string) => void;
  isBookmarked: (itemId: string) => boolean;
  getIndexById: (itemId: string) => number;
};

export const useBookmarks = create<UseBookmarks>((set) => ({
  items: [],
  getIndexById: (itemId: string) => {
    const index: number = useBookmarks
      .getState()
      .items.findIndex((item: BookmarkItem) => item.id === itemId);
    return index;
  },
  bookmark: (itemId: string) => {
    set((state) => {
      const currentItems = state.items;
      const index = state.getIndexById(itemId);
      let newItems = [];

      if (index >= 0) {
        // Remove the item if it's already in the bookmarks
        newItems = [...currentItems.slice(0, index), ...currentItems.slice(index + 1)];
        console.log('done hasah');
      } else {
        // Add the item if it's not already bookmarked
        newItems = [...currentItems, { id: itemId }];
        console.log('done nemeh');
      }

      return { items: newItems };
    });
  },
  isBookmarked: (itemId: string) => {
    const index: number = useBookmarks.getState().getIndexById(itemId);
    return index !== -1;
  },
}));

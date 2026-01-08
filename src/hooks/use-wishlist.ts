import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistItem {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

interface WishlistStore {
    items: WishlistItem[];
    toggleWishlist: (item: WishlistItem) => void;
    isInWishlist: (id: string) => boolean;
    clearWishlist: () => void;
}

export const useWishlist = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],
            toggleWishlist: (item) => {
                const currentItems = get().items;
                const isExisting = currentItems.some((i) => i.id === item.id);

                if (isExisting) {
                    set({ items: currentItems.filter((i) => i.id !== item.id) });
                } else {
                    set({ items: [...currentItems, item] });
                }
            },
            isInWishlist: (id) => {
                return get().items.some((i) => i.id === id);
            },
            clearWishlist: () => set({ items: [] }),
        }),
        {
            name: "flow-beauty-wishlist",
        }
    )
);

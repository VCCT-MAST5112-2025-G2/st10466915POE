// MenuContext.tsx
import React, { createContext, useContext, useState } from "react";



export type MenuItem = {
  id: string;
  dishName: string;
  description: string;
  course: string;
  price: number;

};

type MenuContextType = {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, "id">) => void;
  removeMenuItem: (id: string) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

const initialMenu: MenuItem[] = [
  // 🥗 Starters
  {
    id: "1",
    dishName: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
    course: "Starters",
    price: 8.5,
  },
  {
    id: "2",
    dishName: "Bruschetta",
    description: "Toasted bread topped with diced tomatoes, garlic, olive oil, and basil.",
    course: "Starters",
    price: 7,
  },
  {
    id: "3",
    dishName: "Garlic Prawns",
    description: "Sautéed prawns in garlic butter sauce served with a lemon wedge.",
    course: "Starters",
    price: 9.5,
  },

  // 🍝 Mains
  {
    id: "4",
    dishName: "Grilled Salmon",
    description: "Perfectly grilled salmon with roasted vegetables and lemon butter sauce.",
    course: "Mains",
    price: 18,
  },
  {
    id: "5",
    dishName: "Beef Lasagna",
    description: "Classic layered lasagna with rich meat sauce and creamy béchamel.",
    course: "Mains",
    price: 15.5,
  },
  {
    id: "6",
    dishName: "Chicken Alfredo Pasta",
    description: "Creamy Alfredo sauce tossed with fettuccine and grilled chicken breast.",
    course: "Mains",
    price: 16,
  },

  // 🍰 Desserts
  {
    id: "7",
    dishName: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten center.",
    course: "Desserts",
    price: 7,
  },
  {
    id: "8",
    dishName: "Tiramisu",
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream.",
    course: "Desserts",
    price: 6.5,
  },
  {
    id: "9",
    dishName: "Cheesecake",
    description: "Creamy baked cheesecake with a buttery biscuit base and berry compote.",
    course: "Desserts",
    price: 6.8,
  },

];

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenu);

  const addMenuItem = (item: Omit<MenuItem, "id">) => {
    const newItem: MenuItem = { ...item, id: Date.now().toString() };
    setMenuItems((prev) => [...prev, newItem]);
  };

  const removeMenuItem = (id: string) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem, removeMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within MenuProvider");
  return context;
};







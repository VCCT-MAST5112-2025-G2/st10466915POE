import { MenuItem } from "../context/MenuContext";

export function calculateAverages(menuItems: MenuItem[]) {
  const courses = ["Starters", "Mains", "Desserts"];
  const averages: Record<string, number> = {};

  courses.forEach((course) => {
    const items = menuItems.filter((i) => i.course === course);
    averages[course] =
      items.length > 0 ? items.reduce((sum, i) => sum + i.price, 0) / items.length : 0;
  });

  return averages;
}

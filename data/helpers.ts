export interface I_Item {
  id: number;
  restaurantId?: number;
  restaurantName?: string;
  category: string;
  title?: string;
  image?: string;
  rating?: string;
  price: string;
  description?: string;
}

export interface I_CartItem extends I_Item {
  quantity: number;
}

export const getItemsByCategoryAndCategories = (items: I_Item[]) => {
  const itemsByCategory: { [key: string]: I_Item[] } = {
    other: [],
  };
  items.forEach((item) => {
    if (item.category === "") {
      itemsByCategory.other.push(item);
    } else if (itemsByCategory[item.category]) {
      itemsByCategory[item.category].push(item);
    } else {
      itemsByCategory[item.category] = [item];
    }
  });
  const categories = Object.keys(itemsByCategory).sort();
  return { itemsByCategory, categories };
};

export const formatDataForColumns = (
  data: I_Item[],
  numColumns: number
): I_Item[] => {
  const numberOfFullRows: number = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== 0 &&
    numberOfElementsLastRow !== numColumns
  ) {
    numberOfElementsLastRow++;
    data.push({
      id: numberOfElementsLastRow,
      category: "blank-item",
      price: "0",
    });
  }

  return data;
};

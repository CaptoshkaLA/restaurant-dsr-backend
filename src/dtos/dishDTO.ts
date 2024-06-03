export interface CreateDishDTO {
  name: string;
  description: string;
  shortDescription: string;
  recipe: string;
  ingredients: string;
  imageUrl: string;
}

export interface UpdateDishDTO {
  name?: string;
  description?: string;
  shortDescription?: string;
  recipe?: string;
  ingredients?: string;
  imageUrl?: string;
}

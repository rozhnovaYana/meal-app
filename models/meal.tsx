export interface IMeal {
  id: string,
  categoryIds: string[],
  title: string,
  affordability: string,
  complexity: string,
  imageUrl: string,
  duration: number,
  ingredients: string[],
  steps: string[],
  isGlutenFree: string,
  isVegan: string,
  isVegetarian: string,
  isLactoseFree: string
}
class Meal implements IMeal {
  constructor(
    public id: string,
    public categoryIds: string[],
    public title: string,
    public affordability: string,
    public complexity: string,
    public imageUrl: string,
    public duration: number,
    public ingredients: string[],
    public steps: string[],
    public isGlutenFree: string,
    public isVegan: string,
    public isVegetarian: string,
    public isLactoseFree: string
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}
export default Meal;
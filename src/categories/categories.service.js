class CategoryService {
  Category;
  constructor(Category) {
    this.Category = Category;
  }

  async createCategory(data) {
    const category = this.Category.create({ ...data });
    return category;
  }
}

module.exports = { CategoryService };

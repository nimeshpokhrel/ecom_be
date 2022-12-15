class CategoryService {
  Category;
  constructor(Category) {
    this.Category = Category;
  }

  async createCategory(data) {
    const category = this.Category.create({ ...data });
    return category;
  }
  async getAllCategories(filters = {}) {
    const categories = this.Category.find({ ...filters });
    return categories;
  }
}

module.exports = { CategoryService };

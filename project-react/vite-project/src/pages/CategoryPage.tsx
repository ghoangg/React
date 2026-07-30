import { useEffect, useState } from "react";
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "../services/api";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface Category {
  slug: string;
  name: string;
  url: string;
}

function CategoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  async function loadCategories() {
    const data = await getCategories();
    setCategories(data);
  }

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data.products);
    setSelectedCategory("");
  }

  async function handleCategory(category: string) {
    setSelectedCategory(category);

    const data = await getProductsByCategory(category);
    setProducts(data.products);
  }

  return (
    <div className="container">
      <p className="breadcrumb">
        Home &gt; Category
      </p>

      <div className="content">

        {/* Sidebar */}
        <div className="sidebar">
          <h2>Category</h2>

          <ul className="category-list">
            <li
              className={selectedCategory === "" ? "active" : ""}
              onClick={loadProducts}
            >
              All Products
            </li>

            {categories.map((item) => (
              <li
                key={item.slug}
                className={selectedCategory === item.slug ? "active" : ""}
                onClick={() => handleCategory(item.slug)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Product */}
        <div className="products">
          <h2>Danh sách sản phẩm</h2>

          <div className="product-grid">
            {products.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />

                <h4>{item.title}</h4>

                <p className="price">${item.price}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default CategoryPage;
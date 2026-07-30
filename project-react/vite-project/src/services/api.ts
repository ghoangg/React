const BASE_URL = "https://dummyjson.com";

export async function getProducts(limit: number = 12, skip: number = 0) {
  const response = await fetch(
    `${BASE_URL}/products?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Không thể lấy danh sách sản phẩm");
  }

  return await response.json();
}

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/products/categories`);

  if (!response.ok) {
    throw new Error("Không thể lấy danh mục");
  }

  return await response.json();
}

export async function getProductsByCategory(
  category: string,
  limit: number = 12,
  skip: number = 0
) {
  const response = await fetch(
    `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Không thể lấy sản phẩm theo danh mục");
  }

  return await response.json();
}

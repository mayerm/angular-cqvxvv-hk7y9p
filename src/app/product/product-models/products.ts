export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    discountPercentage: 10,
    rating: 75,
    stock: 12,
    brand: 'Apple',
    category: 'Phone',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [                
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
],
  },
  {
    id: 2,
    title: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    images: [],
  },
  {
    id: 3,
    title: 'Phone Standard',
    price: 299,
    description: '',
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    images: [],
  },
];

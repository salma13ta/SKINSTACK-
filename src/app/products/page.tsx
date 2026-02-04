'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import './products.css';

type CategoryFilter =
  | 'all'
  | 'cleanser'
  | 'serum'
  | 'moisturizer'
  | 'sunscreen'
  | 'treatment';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;

    return products.filter(
      product => product.category === selectedCategory
    );
  }, [selectedCategory]);

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'cleanser', label: 'Cleansers' },
    { id: 'serum', label: 'Serums' },
    { id: 'moisturizer', label: 'Micellars' },
    { id: 'sunscreen', label: 'Sunscreen' },
    { id: 'treatment', label: 'Treatments' },
  ];

  return (
    <div className="products-page-container">
  <div className="products-wrapper">

    {/* Categories Container */}
    <div className="products-categories-container">
      <div className="products-categories">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`products-category-button ${
              selectedCategory === category.id ? 'active' : ''
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>

    {/* Products Grid */}
    <div className="products-grid">
      {filteredProducts.map(product => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="product-card"
        >
          <div className="product-image-wrapper">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="product-image"
            />
          </div>

          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
          </div>
        </Link>
      ))}
    </div>

  </div>
</div>

  );
};

export default ProductsPage;

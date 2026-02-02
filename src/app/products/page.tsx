'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import './products.css';

type CategoryFilter = 'all' | 'cleansers' | 'serums' | 'moisturizers' | 'sunscreen' | 'treatments';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter(product =>
      product.category.toLowerCase().includes(selectedCategory.replace('s', ''))
    );
  }, [selectedCategory]);

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'cleansers', label: 'Cleansers' },
    { id: 'serums', label: 'Serums' },
    { id: 'moisturizers', label: 'Moisturizers' },
    { id: 'sunscreen', label: 'Sunscreen' },
    { id: 'treatments', label: 'Treatments' },
  ];

  return (
    <div className="products-page-container">
      <div className="products-wrapper">
        {/* Header */}
        <div className="products-header">
          <h1 className="products-title">Our Products</h1>
          <p className="products-subtitle">Dermatologist-approved formulas for every skin type</p>
        </div>

        {/* Categories Filter */}
        <div className="products-categories-container">
          <div className="products-categories">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`products-category-button ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="product-card"
              >
                {/* Product Image with Featured Badge */}
                <div className="product-image-wrapper">
                  {product.featured && <div className="featured-badge">Featured</div>}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="product-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Product Info */}
                <div className="product-info">
                  {/* Category and Price */}
                  <div className="product-header-row">
                    <span className="product-category-tag">
                      {product.category}
                    </span>
                    <span className="product-price">
                      ${product.price}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="product-name">
                    {product.name}
                  </h3>

                  {/* Product Description */}
                  <p className="product-description">
                    {product.description}
                  </p>

                  {/* Skin Types */}
                  <div className="product-skin-types">
                    {product.skinTypes.map(type => (
                      <span key={type} className="skin-type-tag">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="products-empty-state">
            <p className="empty-state-text">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products, type SkinType, type SkinConcern } from '@/data/products';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import './search.css';

const Searchpage = () => {
  const searchParams = useSearchParams();
  const initialSkinType = searchParams.get('skinType') as SkinType | null;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<SkinType[]>(
    initialSkinType ? [initialSkinType] : []
  );
  const [selectedConcerns, setSelectedConcerns] = useState<SkinConcern[]>([]);

  // Filter products based on search query, skin types, and concerns
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search query filter
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Skin type filter
      const matchesSkinType =
        selectedSkinTypes.length === 0 ||
        product.skinTypes.some(type => selectedSkinTypes.includes(type)) ||
        product.skinTypes.includes('all');

      // Concern filter
      const matchesConcern =
        selectedConcerns.length === 0 ||
        product.concerns.some(concern => selectedConcerns.includes(concern)) ||
        product.concerns.includes('all');

      return matchesSearch && matchesSkinType && matchesConcern;
    });
  }, [searchQuery, selectedSkinTypes, selectedConcerns]);

  // Handle skin type checkbox
  const handleSkinTypeChange = (skinType: SkinType) => {
    setSelectedSkinTypes(prev =>
      prev.includes(skinType)
        ? prev.filter(type => type !== skinType)
        : [...prev, skinType]
    );
  };

  // Handle concern checkbox
  const handleConcernChange = (concern: SkinConcern) => {
    setSelectedConcerns(prev =>
      prev.includes(concern)
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  const getBestForLabel = (product: typeof products[0]) => {
    if (product.bestFor) {
      if (product.bestFor.toLowerCase().includes('all')) {
        return 'Best for all';
      }
      if (product.bestFor.toLowerCase().includes('dry')) {
        return 'Best for dry';
      }
      return product.bestFor;
    }
    return 'Best for all';
  };

  return (
    <div className="search-page-container">
      {/* Search Bar Section */}
      <div className="search-bar-section">
        <div className="search-bar-wrapper">
          <div className="search-input-container">
            <HiMagnifyingGlass className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="search-main-content">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="search-sidebar w-full lg:w-64 flex-shrink-0">
            <div className="search-filters-card">
              <h2 className="filters-title">Filters</h2>

              {/* Skin Type Filter */}
              <div className="filter-section">
                <h3 className="filter-section-title">Skin Type</h3>
                <div className="filter-options">
                  {(['dry', 'oily', 'sensitive', 'combination'] as SkinType[]).map((type) => (
                    <label
                      key={type}
                      className="filter-label"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSkinTypes.includes(type)}
                        onChange={() => handleSkinTypeChange(type)}
                        className="filter-checkbox"
                      />
                      <span className="filter-label-text capitalize">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Skin Concerns Filter */}
              <div className="filter-section">
                <h3 className="filter-section-title">Skin Concerns</h3>
                <div className="filter-options">
                  {(['acne', 'pigmentation', 'hydration', 'anti-aging'] as SkinConcern[]).map((concern) => (
                    <label
                      key={concern}
                      className="filter-label"
                    >
                      <input
                        type="checkbox"
                        checked={selectedConcerns.includes(concern)}
                        onChange={() => handleConcernChange(concern)}
                        className="filter-checkbox"
                      />
                      <span className="filter-label-text capitalize">
                        {concern}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Section - Product Listings */}
          <div className="products-section">
            {/* Product Count */}
            <div className="products-count">
              <span className="products-count-number">{filteredProducts.length}</span>{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'} found
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="product-card"
                  >
                    {/* Product Image */}
                    <div className="product-image-container">
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
                      {/* Tags and Price */}
                      <div className="product-tags-container">
                        <div className="product-tags">
                          <span className="product-tag product-tag-category">
                            {product.category}
                          </span>
                          <span className="product-tag product-tag-best">
                            {getBestForLabel(product)}
                          </span>
                        </div>
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
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p className="empty-state-text">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSkinTypes([]);
                    setSelectedConcerns([]);
                  }}
                  className="empty-state-button"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchpage;

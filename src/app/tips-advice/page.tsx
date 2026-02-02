
'use client';

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { TbDroplet, TbSparkles } from 'react-icons/tb';
import { IoMdSunny } from 'react-icons/io';
import { HiArrowRight } from 'react-icons/hi';
import { FaArrowRightLong } from "react-icons/fa6";

import './tips.css';

interface TipCard {
  id: string;
  skinType: string;
  description: string;
  icon: React.ReactNode;
  headerClass: string;
  dos: string[];
  donts: string[];
}

const TipsAdvicePage = () => {
  const tipCards: TipCard[] = [
    {
      id: 'dry',
      skinType: 'Dry Skin',
      description: 'Lacks oil and needs rich hydration',
      icon: <TbDroplet />,
      headerClass: 'dry-skin',
      dos: [
        'Use cream-based cleansers',
        'Layer hydrating serums',
        'Apply rich moisturizers',
        'Use facial oils at night',
      ],
      donts: [
        "Don't over-cleanse",
        'Avoid harsh exfoliants',
        'Skip alcohol-based products',
        "Don't use hot water",
      ],
    },
    {
      id: 'oily',
      skinType: 'Oily Skin',
      description: 'Produces excess sebum, prone to shine',
      icon: <IoMdSunny />,
      headerClass: 'oily-skin',
      dos: [
        'Use gel or foam cleansers',
        'Try niacinamide serums',
        'Use lightweight moisturizers',
        'Exfoliate regularly with BHA',
      ],
      donts: [
        'Avoid heavy creams',
        "Don't skip moisturizer",
        'Avoid over-washing',
        "Don't use oil-based products",
      ],
    },
    {
      id: 'sensitive',
      skinType: 'Sensitive Skin',
      description: 'Easily irritated, reactive to products',
      icon: <TbSparkles />,
      headerClass: 'sensitive-skin',
      dos: [
        'Patch test new products',
        'Use fragrance-free formulas',
        'Choose minimal ingredients',
        'Focus on barrier repair',
      ],
      donts: [
        'Avoid harsh actives',
        'Skip testing new products',
        "Don't use strong fragrances",
        'Avoid extreme temperatures',
      ],
    },
    {
      id: 'combination',
      skinType: 'Combination Skin',
      description: 'Oily T-zone with dry cheeks',
      icon: <TbSparkles />,
      headerClass: 'combination-skin',
      dos: [
        'Use balanced cleansers',
        'Multi-mask different areas',
        'Layer products strategically',
        'Use lightweight textures',
      ],
      donts: [
        "Don't use one-size-fits-all",
        'Skip targeted treatments',
        'Avoid over-treating any zone',
        "Don't neglect specific areas",
      ],
    },
  ];

  return (
    <div className="tips-page-container">
      <div className="tips-wrapper">
        {/* Header */}
        <div className="tips-header">
          <h1>Skincare Tips & Advice</h1>
          <p>Expert dermatologist-approved guidance for every skin type</p>
        </div>

        {/* Skin Type Cards */}
        <div className="tips-grid">
          {tipCards.map((card) => (
            <div key={card.id} className="tips-card">
              <div className={`tips-card-header ${card.headerClass}`}>
                <div className="tips-card-icon-bg">{card.icon}</div>
                <div className="tips-card-header-content">
                  <h3>{card.skinType}</h3>
                  <p>{card.description}</p>
                </div>
              </div>

              <div className="tips-card-body">
                {/* Do's Section */}
                <div className="tips-section do-section">
                  <h4 className="tips-section-title do-section">
                    <FaCheckCircle className="tips-section-icon" />
                    Do&apos;s
                  </h4>
                  <ul className="tips-list">
                    {card.dos.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>

                {/* Don't's Section */}
                <div className="tips-section dont-section">
                  <h4 className="tips-section-title dont-section">
                    <FaTimesCircle className="tips-section-icon" />
                    Don&apos;ts
                  </h4>
                  <ul className="tips-list">
                    {card.donts.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>

                {/* View Products Link */}
                <a href={`/search?skinType=${card.id}`} className="view-products-link">
                  View recommended products <FaArrowRightLong className="view-products-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Universal Skincare Principles */}
        <div className="universal-principles">
          <h2>Universal Skincare Principles</h2>

          <div className="principles-grid">
            {/* Layering Order */}
            <div className="principle-item">
              <h3>Layering Order Matters</h3>
              <p>Apply products in order of consistency, from thinnest to thickest:</p>
              <div className="layering-order">
                <ol>
                  <li>Cleanser</li>
                  <li>Toner/Essence</li>
                  <li>Serum</li>
                  <li>Eye Cream</li>
                  <li>Moisturizer</li>
                  <li>Sunscreen (AM only)</li>
                </ol>
              </div>
            </div>

            {/* Sunscreen */}
            <div className="principle-item">
              <h3>Sunscreen is Non-Negotiable</h3>
              <p>SPF is the single most important anti-aging product. Apply daily, even on cloudy days:</p>
              <ul className="principle-list">
                <li>Use SPF 30 or higher</li>
                <li>Reapply every 2 hours</li>
                <li>Apply as the last step in AM routine</li>
              </ul>
            </div>

            {/* Patience */}
            <div className="principle-item">
              <h3>Patience is Key</h3>
              <p>
                Skincare results take time. Give new products at least 4-6 weeks before deciding if they work. Your
                skin cell turnover cycle is approximately 28 days, so real changes take time to show.
              </p>
            </div>

            {/* Less is More */}
            <div className="principle-item">
              <h3>Less is More</h3>
              <p>
                You don&apos;t need 10 products. A simple routine with quality ingredients often works better than an
                overcomplicated one. Focus on: cleanse, treat, moisturize, protect.
              </p>
            </div>

            {/* Ingredient Combinations to Avoid */}
            <div className="ingredient-combinations">
              <h4>❌ Ingredient Combinations to Avoid</h4>
              <ul>
                <li>Retinol + Vitamin C</li>
                <li>Retinol + AHA/BHA acids</li>
                <li>Vitamin C + Niacinamide (for some people)</li>
                <li>Benzoyl Peroxide + Retinol</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready to Build Your Perfect Routine?</h2>
              <p>Use our personalized routine builder to create a skincare regimen tailored to your skin type</p>
              <div className="cta-buttons">
                <a href="/routine" className="cta-button cta-primary">
                  Build My Routine <FaArrowRightLong className="cta-icon" />
                </a>
                <a href="/products" className="cta-button cta-secondary">
                  Browse Products
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TipsAdvicePage;

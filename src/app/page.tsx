'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { products, type SkinType } from "@/data/products";
import Image from "next/image";
import { HiArrowRight } from 'react-icons/hi2';
import { TbDroplet } from 'react-icons/tb';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { FaArrowRightLong, FaWandSparkles } from 'react-icons/fa6';
import React from "react";
import './Home.css';

type ScrollSectionProps = {
  children: React.ReactNode;
  animation?: "up" | "right" | "left" | "scale";
};

const ScrollSection = ({ children, animation = "up" }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`scroll-section scroll-${animation} ${inView ? "scroll-in-view" : ""
        }`}
    >
      {children}
    </section>
  );
};

const HomePage = () => {
  const featuredProducts = products.filter((p) => p.featured);

  const skinTypes = [
    { id: 'dry' as SkinType, label: 'Dry', icon: <TbDroplet className="w-6 h-6" />, gradient: 'from-blue-400 to-cyan-400' },
    { id: 'oily' as SkinType, label: 'Oily', icon: <IoMdSunny className="w-6 h-6" />, gradient: 'from-yellow-400 to-orange-400' },
    { id: 'sensitive' as SkinType, label: 'Sensitive', icon: <FaWandSparkles className="w-6 h-6" />, gradient: 'from-pink-400 to-rose-400' },
    { id: 'combination' as SkinType, label: 'Combination', icon: <IoMdMoon className="w-6 h-6" />, gradient: 'from-purple-400 to-indigo-400' }
  ];

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <ScrollSection animation="up">
        <section className="home-section relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-orange-50/40 to-yellow-100/40" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
            <div className="text-center space-y-8">
              <div className="inline-block">
                <span className="hero-badge">
                   Your personalized skincare journey starts here
                </span>
              </div>

              <h1 className="hero-title">
                <span className="block text-gray-900">Discover Your</span>
                <span className="block hero-title-gradient">
                  Perfect Skin Routine
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
                Science-backed skincare tailored to your unique skin type.
                Build routines that actually work.
              </p>

              <div className="section-actions">
                <Link
                  href="/search"
                  className="btn-primary"
                >
                  Find Your Products
                    <FaArrowRightLong className="icon" />
                </Link>
                <Link
                  href="/routine"
                  className="btn-secondary"
                >
                  Build a Routine +
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* Skin Type Selector */}
      <ScrollSection animation="right">
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">
              Select Your Skin Type
            </h2>
            <p className="section-description">
              Get personalized product recommendations instantly
            </p>
          </div>

          <div className="section-content">
            {skinTypes.map((type) => (
              <Link
                key={type.id}
                href={`/search?skinType=${type.id}`}
                className={`section-card section-card-${type.id}`}
                data-gradient={type.gradient}
              >
                <div className="section-card-icon-bg">
                  {type.icon}
                </div>
                <div className="section-card-content">
                  <h3 className="section-card-title-text">{type.label}</h3>
                  <p className="section-card-description-text">View products</p>
                  <FaArrowRightLong className=" icon section-card-icon-right-text" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollSection>

      {/* Featured Products */}
      <ScrollSection animation="left">
        <section className="home-section">
          <div className="section-header">
            <div>
              <h2 className="section-title">
                Featured Serums
              </h2>
              <p className="section-description">
                Dermatologist-approved essentials for every routine
              </p>
            </div>
          </div>

          <div className="section-content">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="section-card-featured-product"
              >
                <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="featured-product-image-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="section-card-content-wrapper">
                  <div className="section-card-content">
                    <div className="section-card-category-text-wrapper">
                      <span className="section-card-category-text-span">
                        {product.category}
                      </span>
                      <span className="font-semibold colo text-gray-900 ml-[10px]">${product.price}</span>
                    </div>
                    <h3 className="section-card-name-text">
                      {product.name}
                    </h3>
                    <p className="section-card-description-text">
                      {product.description}
                    </p>
                    {product.bestFor && (
                      <p className="section-card-best-for-text">
                        Best for {product.bestFor}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center mt-[20px] md:hidden">
            <Link
              href="/products"
              className="colo inline-flex items-center px-6 py-3  rounded-full bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-colors"
            >
              View all products
              <FaArrowRightLong className="w-5 h-5 ml-3 ml-[10px]" />
            </Link>
          </div>
        </section>
      </ScrollSection>

      {/* Educational Section */}
      <ScrollSection animation="scale">
        <section className="home-section">
          <div className="content-box">
            <div className="max-w-3xl">
              <h2 className="section-title">
                What Your Skin Really Needs
              </h2>
              <div className="setion-Content-description">
                <p>
                  Every skin type is unique, and understanding yours is the first step to a
                  healthier complexion. Our expertly curated routines are based on dermatological
                  science and proven ingredients.
                </p>
                <ul className="space-y-3 ml-4 mt-4">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Personalized approach:</strong> Products matched to your skin type and concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Science-backed formulas:</strong> Ingredients proven to work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 mr-3 flex-shrink-0" />
                    <span><strong>Expert guidance:</strong> Learn what works together and what doesn&apos;t</span>
                  </li>
                </ul>
                <div className="pt-4 mt-[20px]">
                  <Link
                    href="/tips-advice"
                    className="btn-secondary inline-flex items-center"
                  >
                    Learn More
                    <FaArrowRightLong className="w-5 h-5 ml-2 ml-[10px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>
    </div>
  );
};

export default HomePage;

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { FaArrowRightLong, FaWandSparkles } from 'react-icons/fa6';
import './routine.css';

type SkinType = 'dry' | 'oily' | 'sensitive' | 'combination';
type TimeOfDay = 'morning' | 'night';

interface RoutineStep {
  id: number;
  name: string;
  description: string;
}

const routineData: Record<SkinType, Record<TimeOfDay, RoutineStep[]>> = {
  dry: {
    morning: [
      { id: 1, name: 'Gentle Foaming Cleanser', description: 'Step 1 of 3' },
      { id: 2, name: 'Hydrating Serum', description: 'Step 2 of 3' },
      { id: 3, name: 'Moisturizing Cream', description: 'Step 3 of 3' },
    ],
    night: [
      { id: 1, name: 'Gentle Cleanser', description: 'Step 1 of 3' },
      { id: 2, name: 'Retinol Night Treatment', description: 'Step 2 of 3' },
      { id: 3, name: 'Rich Barrier Cream', description: 'Step 3 of 3' },
    ],
  },
  oily: {
    morning: [
      { id: 1, name: 'Purifying Cleanser', description: 'Step 1 of 4' },
      { id: 2, name: 'Salicylic Acid Toner', description: 'Step 2 of 4' },
      { id: 3, name: 'Oil-Control Serum', description: 'Step 3 of 4' },
      { id: 4, name: 'Lightweight Moisturizer', description: 'Step 4 of 4' },
    ],
    night: [
      { id: 1, name: 'Deep Cleansing Gel', description: 'Step 1 of 4' },
      { id: 2, name: 'Clay Mask Treatment', description: 'Step 2 of 4' },
      { id: 3, name: 'Acne Spot Treatment', description: 'Step 3 of 4' },
      { id: 4, name: 'Oil-Free Night Cream', description: 'Step 4 of 4' },
    ],
  },
  sensitive: {
    morning: [
      { id: 1, name: 'Gentle Foaming Cleanser', description: 'Step 1 of 3' },
      { id: 2, name: 'Soothing Serum', description: 'Step 2 of 3' },
      { id: 3, name: 'Barrier Repair Cream', description: 'Step 3 of 3' },
    ],
    night: [
      { id: 1, name: 'Gentle Cleanser', description: 'Step 1 of 3' },
      { id: 2, name: 'Calming Night Treatment', description: 'Step 2 of 3' },
      { id: 3, name: 'Rich Barrier Cream', description: 'Step 3 of 3' },
    ],
  },
  combination: {
    morning: [
      { id: 1, name: 'Gentle Foaming Cleanser', description: 'Step 1 of 3' },
      { id: 2, name: 'Vitamin C Brightening Serum', description: 'Step 2 of 3' },
      { id: 3, name: 'Balanced Moisturizer', description: 'Step 3 of 3' },
    ],
    night: [
      { id: 1, name: 'Retinol Night Treatment', description: 'Step 1 of 3' },
      { id: 2, name: 'Rich Barrier Cream', description: 'Step 2 of 3' },
      { id: 3, name: 'Mineral Sunscreen SPF 50', description: 'Step 3 of 3' },
    ],
  },
};

const tipsData: Record<SkinType, string[]> = {
  dry: [
    'Always apply products from thinnest to thickest consistency',
    'Wait 1-2 minutes between each step for better absorption',
    'Consistency is key - stick to your routine for at least 4-6 weeks',
    'Patch test new products before incorporating them fully',
  ],
  oily: [
    'Use a mattifying primer after moisturizer for longer-lasting makeup',
    'Blot your face with oil-absorbing sheets throughout the day',
    'Avoid over-cleansing as it can trigger more oil production',
    'Use non-comedogenic products to prevent breakouts',
  ],
  sensitive: [
    'Avoid products with fragrance or essential oils',
    'Introduce new products one at a time, waiting 1-2 weeks between additions',
    'Keep your routine simple with only essential products',
    'Use lukewarm water when cleansing to avoid irritation',
  ],
  combination: [
    'Always apply products from thinnest to thickest consistency',
    'Wait 1-2 minutes between each step for better absorption',
    'Consistency is key - stick to your routine for at least 4-6 weeks',
    'Patch test new products before incorporating them fully',
  ],
};

const RoutinePage = () => {
  const [selectedSkinType, setSelectedSkinType] = useState<SkinType>('combination');
  const [selectedTime, setSelectedTime] = useState<TimeOfDay>('morning');

  const currentSteps = routineData[selectedSkinType][selectedTime];
  const currentTips = tipsData[selectedSkinType];

  return (
    <div className="routine-page-container">
      <div className="routine-wrapper">
        {/* Header */}
        <div className="routine-header">
          <h1 className="routine-title">Your Skincare Routine</h1>
          <p className="routine-subtitle">Personalized step-by-step guidance for healthier skin</p>
        </div>

        {/* Selection Container */}
        <div className="routine-selection-container">
          {/* Skin Type Selection */}
          <label className="skin-type-label">Select Your Skin Type</label>
          <div className="skin-type-buttons">
            {(['dry', 'oily', 'sensitive', 'combination'] as SkinType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedSkinType(type)}
                className={`skin-type-button ${selectedSkinType === type ? 'active' : ''}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Skin
              </button>
            ))}
          </div>

          {/* Time Selection */}
          <label className="time-label">Choose Time of Day</label>
          <div className="time-buttons">
            <button
              onClick={() => setSelectedTime('morning')}
              className={`time-button ${selectedTime === 'morning' ? 'active' : ''}`}
            >
              <IoMdSunny className="time-icon" />
              Morning
            </button>
            <button
              onClick={() => setSelectedTime('night')}
              className={`time-button ${selectedTime === 'night' ? 'active-night' : ''}`}
            >
              <IoMdMoon className="time-icon" />
              Night
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="routine-steps">
          {currentSteps.map((step) => (
            <div key={step.id} className="step-card">
              <div className="step-number">{step.id}</div>
              <div className="step-content">
                <h3 className="step-title">{step.name}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              <Link href={`/products`} className="step-action">
                View
                <FaArrowRightLong className="step-action-icon" />
              </Link>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="routine-tips-container">
          <h2 className="routine-tips-title">Routine Tips for {selectedSkinType.charAt(0).toUpperCase() + selectedSkinType.slice(1)} Skin</h2>
          <ul className="routine-tips-list">
            {currentTips.map((tip, index) => (
              <li key={index} className="routine-tip-item">
                <div className="routine-tip-bullet"></div>
                <p className="routine-tip-text">{tip}</p>
              </li>
            ))}
          </ul>
          <Link href="/tips-advice" className="learn-more-button">
            Learn More Tips
            <FaArrowRightLong className="learn-more-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoutinePage;
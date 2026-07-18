import React from 'react';

const IngredientsSection = () => {
  const ingredients = [
    { name: 'Flaxseed Extract', emoji: '🌾', benefit: 'Strengthens & thickens', color: '#C9973A' },
    { name: 'Hibiscus Flower', emoji: '🌺', benefit: 'Reduces hair fall', color: '#E8B84B' },
    { name: 'Bhringraj', emoji: '🌿', benefit: 'Promotes growth', color: '#E8B84B' },
    { name: 'Aloe Vera', emoji: '🪴', benefit: 'Soothes scalp', color: '#F5D680' },
    { name: 'Amla Extract', emoji: '🫒', benefit: 'Rich in Vitamin C', color: '#E8B84B' },
    { name: 'Shikakai', emoji: '🌱', benefit: 'Natural cleanser', color: '#8EA050' },
    { name: 'Vitamin E', emoji: '💊', benefit: 'Repairs damage', color: '#C9973A' },
    { name: 'Glycerin', emoji: '💧', benefit: 'Deep hydration', color: '#C9973A' },
    { name: 'Purified Water', emoji: '🫧', benefit: 'Pure base', color: '#A89880' },
  ];

  return (
    <section id="ingredients" className="section-py" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div className="orb orb-green" style={{ width: '500px', height: '500px', top: '50%', left: '-200px', opacity: 0.1 }} />

      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <p className="section-label">Transparency First</p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Pure,{' '}
            <span style={{
              background: 'var(--grad-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Honest</span>{' '}
            Ingredients
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            We believe you deserve to know exactly what you put on your hair. Every ingredient, every purpose — nothing hidden.
          </p>
        </div>

        {/* Ingredient Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {ingredients.map((ing, i) => (
            <div
              key={ing.name}
              className="glass-card reveal"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: `${ing.color}18`,
                border: `1px solid ${ing.color}35`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                flexShrink: 0,
              }}>
                {ing.emoji}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {ing.name}
                </div>
                <div style={{ fontSize: '0.76rem', color: ing.color, marginTop: '0.15rem', fontWeight: 500 }}>
                  {ing.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency statement */}
        <div className="reveal">
          <div className="glass-card-gradient" style={{
            padding: '2rem 2.5rem',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}>
            <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🔬</div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Full Ingredient Disclosure</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Aqua (Purified Water), Linum Usitatissimum (Flaxseed) Extract, Hibiscus Rosa-Sinensis Extract, Aloe Barbadensis Leaf Extract, Emblica Officinalis (Amla) Extract, Acacia Concinna (Shikakai), Eclipta Alba (Bhringraj) Extract, Glycerin, Tocopherol (Vitamin E).
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #ingredients .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          #ingredients .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default IngredientsSection;

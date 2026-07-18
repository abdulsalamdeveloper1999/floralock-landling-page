import React from 'react';
import { PartyPopper } from 'lucide-react';

const inputStyle = (hasError) => ({
  width: '100%',
  padding: '1rem 1.25rem',
  background: '#0a0a0a',
  border: `1px solid ${hasError ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.02)'}`,
  boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.9), inset -4px -4px 8px rgba(255,255,255,0.04)',
  borderRadius: '16px',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'all 0.2s',
  display: 'block',
});

const CartModal = ({
  showCart,
  setShowCart,
  showConfirmation,
  cartItems,
  totalPrice,
  formData,
  handleInputChange,
  handleSubmit,
  handleNewOrder,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  removeCartItem
}) => {
  const [errors, setErrors] = React.useState({});

  const handleFocus = (e) => {
    e.target.style.borderColor = 'rgba(201,151,58,0.5)';
    e.target.style.background = 'rgba(201,151,58,0.05)';
    e.target.style.boxShadow = '0 0 0 3px rgba(201,151,58,0.1)';
  };

  const handleBlur = (e, hasError) => {
    e.target.style.borderColor = hasError ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)';
    e.target.style.background = hasError ? 'rgba(239,68,68,0.06)' : 'rgba(255,255,255,0.04)';
    e.target.style.boxShadow = 'none';
  };

  if (!showCart) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeInScale 0.3s ease forwards',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) setShowCart(false); }}
    >
      <div style={{
        background: '#0e0e0e',
        border: '1px solid rgba(255,255,255,0.02)',
        borderRadius: '28px',
        boxShadow: '16px 16px 32px rgba(0,0,0,0.95), -16px -16px 32px rgba(255,255,255,0.03)',
        width: '100%',
        maxWidth: '480px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2.5rem',
        position: 'relative',
      }}>
        {/* Close button */}
        <button
          onClick={() => setShowCart(false)}
          id="cart-close-btn"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.15)'; e.currentTarget.style.color = '#f87171'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ============ ORDER CONFIRMATION ============ */}
        {showConfirmation ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{
              width: '80px', height: '80px',
              borderRadius: '50%',
              background: 'var(--grad-brand)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 0 40px rgba(201,151,58,0.3)',
            }}>
              <svg width="36" height="36" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem', fontWeight: 800,
              marginBottom: '0.75rem',
              background: 'var(--grad-brand)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>Order Confirmed! <PartyPopper size={28} color="#C9973A" /></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Thank you! We've received your order and will call you to confirm before dispatch. Expected delivery: 3–5 business days.
            </p>
            <button
              onClick={handleNewOrder}
              id="new-order-btn"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
              data-umami-event="Place Order"
              data-umami-event-total={totalPrice}
            >
              Place New Order
            </button>
          </div>
        ) : (
          /* ============ CHECKOUT FORM ============ */
          <div>
            <div style={{ marginBottom: '1.75rem', paddingRight: '2.5rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 800,
                marginBottom: '0.25rem',
                color: 'var(--text-primary)',
              }}>
                Your Order
              </h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Cash on Delivery · Free Shipping in Pakistan
              </p>
            </div>

            {/* Cart items */}
            <div style={{
              background: '#0a0a0a',
              boxShadow: 'inset 6px 6px 12px rgba(0,0,0,0.8), inset -6px -6px 12px rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.02)',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '1.75rem',
            }}>
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item, i) => (
                    <div key={item.id} style={{
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      borderBottom: i < cartItems.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    }}>
                      <div style={{
                        width: '40px', height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(201,151,58,0.1)',
                        border: '1px solid rgba(201,151,58,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.2rem', flexShrink: 0,
                      }}>🌿</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PKR {item.price.toLocaleString('en-PK')} each</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexShrink: 0 }}>
                        <button onClick={() => decreaseCartItemQuantity(item.id)} style={{ width: '24px', height: '24px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, minWidth: '20px', textAlign: 'center', color: 'var(--text-primary)' }}>{item.quantity}</span>
                        <button onClick={() => increaseCartItemQuantity(item.id)} style={{ width: '24px', height: '24px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                        <button onClick={() => removeCartItem(item.id)} style={{ width: '24px', height: '24px', marginLeft: '0.25rem', borderRadius: '6px', border: '1px solid rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.08)', color: '#f87171', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Total */}
                  <div style={{
                    padding: '1rem 1.25rem',
                    background: 'rgba(201,151,58,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(201,151,58,0.07)',
                  }}>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Total</span>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      background: 'var(--grad-brand)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      PKR {totalPrice}
                    </span>
                  </div>
                </>
              ) : (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Your cart is empty.
                </div>
              )}
            </div>

            {/* Details form */}
            <form onSubmit={(e) => {
              e.preventDefault();
              const newErrors = {};
              if (!formData.name.trim() || formData.name.length < 3) newErrors.name = 'Name must be at least 3 characters.';
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
              const phoneRegex = /^03\d{9}$/;
              if (!formData.phone || !phoneRegex.test(formData.phone)) newErrors.phone = 'Enter a valid Pakistani number (e.g., 03001234567).';
              if (!formData.address.trim() || formData.address.length < 10) newErrors.address = 'Please provide a complete address (min 10 chars).';

              if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
              }
              setErrors({});
              handleSubmit(e);
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Delivery Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { name: 'name', type: 'text', placeholder: 'Full Name', error: errors.name },
                  { name: 'email', type: 'email', placeholder: 'Email Address', error: errors.email },
                  { name: 'phone', type: 'tel', placeholder: 'Mobile Number (03...)', error: errors.phone, maxLength: 11 },
                ].map(field => (
                  <div key={field.name}>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      maxLength={field.maxLength}
                      id={`cart-${field.name}`}
                      onChange={(e) => { handleInputChange(e); if (errors[field.name]) setErrors({ ...errors, [field.name]: '' }); }}
                      onFocus={handleFocus}
                      onBlur={(e) => handleBlur(e, !!errors[field.name])}
                      style={inputStyle(!!errors[field.name])}
                    />
                    {errors[field.name] && (
                      <p style={{ fontSize: '0.72rem', color: '#f87171', marginTop: '0.3rem' }}>{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <textarea
                    name="address"
                    placeholder="Complete Shipping Address"
                    rows={3}
                    id="cart-address"
                    value={formData.address}
                    onChange={(e) => { handleInputChange(e); if (errors.address) setErrors({ ...errors, address: '' }); }}
                    onFocus={handleFocus}
                    onBlur={(e) => handleBlur(e, !!errors.address)}
                    style={{ ...inputStyle(!!errors.address), resize: 'none' }}
                  />
                  {errors.address && (
                    <p style={{ fontSize: '0.72rem', color: '#f87171', marginTop: '0.3rem' }}>{errors.address}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                id="confirm-order-btn"
                className="btn-primary"
                disabled={cartItems.length === 0}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '1rem',
                  fontSize: '1rem',
                  marginTop: '1.25rem',
                  opacity: cartItems.length === 0 ? 0.5 : 1,
                  cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                Confirm Order
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;

import React from 'react';

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
  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 flex items-center justify-center p-4 ${showCart ? 'block' : 'hidden'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowCart(false);
        }
      }}
    >
      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-xl w-full max-w-md p-6 relative transform transition-all">
        {/* Close Button */}
        <button 
          onClick={() => setShowCart(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Order Confirmation View */}
        <div className={`text-center py-8 ${showConfirmation ? 'block' : 'hidden'}`}>
          <div className="w-24 h-24 mx-auto bg-green-accent rounded-full flex items-center justify-center mb-4">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="font-serif text-3xl text-gold mb-2">Congratulations!</h2>
          <p className="text-gray-300">We have your order and will call you to confirm before we dispatch.</p>
          <button 
            onClick={handleNewOrder}
            className="mt-6 bg-gold text-black font-bold py-2 px-8 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Place New Order
          </button>
        </div>

        {/* Checkout Form View */}
        <div className={showConfirmation ? 'hidden' : 'block'}>
          <h2 className="font-serif text-3xl text-gold mb-4">Confirm Order</h2>
          {/* Order Summary */}
          <div className="border-b border-gray-700 pb-4 mb-4">
            {cartItems.length > 0 ? (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-white bg-gray-800 p-3 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-400">PKR {item.price.toLocaleString('en-PK')} each</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => decreaseCartItemQuantity(item.id)}
                        className="w-6 h-6 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-gold flex items-center justify-center text-sm"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => increaseCartItemQuantity(item.id)}
                        className="w-6 h-6 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-gold flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => removeCartItem(item.id)}
                        className="ml-2 text-red-400 hover:text-red-300 transition-colors"
                        title="Remove item"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="font-bold">PKR {(item.price * item.quantity).toLocaleString('en-PK')}</p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center text-white font-bold text-lg pt-2">
                  <span>Total:</span>
                  <span>PKR {totalPrice}</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-center">Your cart is empty.</p>
            )}
          </div>
          {/* User Details Form */}
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold mb-4">Your Details</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-gold focus:border-gold" 
                required 
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-gold focus:border-gold" 
                required 
              />
              <textarea 
                name="address"
                placeholder="Shipping Address" 
                rows="3" 
                value={formData.address}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-gold focus:border-gold" 
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gold text-black font-bold py-3 px-10 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 mt-6 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none"
              disabled={cartItems.length === 0}
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

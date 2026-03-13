export default function CartModal({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div 
        className="absolute right-0 top-0 h-full w-full md:w-1/3 bg-white dark:bg-gray-800 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold dark:text-white">Shopping Cart</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <i className="fas fa-times text-xl dark:text-white"></i>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto mb-6">
            {cart.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <i className="fas fa-shopping-cart text-4xl mb-4"></i>
                <p>Your cart is empty</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center border-b dark:border-gray-700 py-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="ml-4 flex-1">
                    <h4 className="font-semibold dark:text-white">{item.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">KES {item.price.toLocaleString()} each</p>
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 'decrease')}
                        className="p-1 border dark:border-gray-600 rounded dark:text-white"
                      >
                        <i className="fas fa-minus text-xs"></i>
                      </button>
                      <span className="mx-3 font-medium dark:text-white">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 'increase')}
                        className="p-1 border dark:border-gray-600 rounded dark:text-white"
                      >
                        <i className="fas fa-plus text-xs"></i>
                      </button>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold dark:text-white">KES {(item.price * item.quantity).toLocaleString()}</div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="border-t dark:border-gray-700 pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold dark:text-white">Subtotal:</span>
              <span className="font-bold text-lg dark:text-white">KES {cartTotal.toLocaleString()}</span>
            </div>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
            <button 
              onClick={onClose}
              className="w-full mt-2 border border-gray-300 dark:border-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

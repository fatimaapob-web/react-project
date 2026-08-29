function ProductCard({ product, onAddToCart }) {
  return (
    <div className="w-full h-[700px] bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">

      {/* صورة المنتج */}
      <div className="w-full h-[450px] bg-[#CFC6B5] flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-[#7A5742] text-xl font-semibold">
            صورة المنتج
          </span>
        )}
      </div>

      {/* معلومات المنتج */}
      <div className="p-7 text-right">

        <h3 className="text-2xl font-bold text-[#7A5742] mb-3">
          {product.name}
        </h3>

        <p className="text-gray-600 text-base leading-7 mb-5">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-4">

          {/* السعر */}
          <span className="text-2xl font-bold text-[#7A5742]">
            {product.price.toLocaleString()} د.ع
          </span>

          {/* زر السلة */}
          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#7A5742] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#634635] transition-all duration-200 hover:-translate-y-1 active:scale-95"
          >
            أضف للسلة
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;
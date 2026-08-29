function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="group rounded-[28px] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

        {/* الصورة */}
        <div className="h-36 w-full shrink-0 overflow-hidden rounded-2xl bg-[#CFC6B5] sm:w-44">

          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-[#7A5742]">
              <span className="text-sm font-semibold">
                صورة المنتج
              </span>
            </div>
          )}

        </div>

        {/* المعلومات */}
        <div className="min-w-0 flex-1">

          <h3 className="mb-2 text-xl font-bold text-[#7A5742]">
            {item.name}
          </h3>

          <p className="mb-3 text-sm text-gray-500">
            100 كيس في كل حزمة
          </p>

          <p className="font-bold text-[#7A5742]">
            {item.price.toLocaleString()} د.ع
            <span className="mr-1 text-sm font-normal text-gray-400">
              / الحزمة
            </span>
          </p>

        </div>

        {/* التحكم بالكمية */}
        <div className="flex items-center justify-between gap-4 sm:flex-col">

          <div className="flex items-center gap-2 rounded-2xl bg-[#FAF9F7] p-1">

            <button
              onClick={() => onDecrease(item.id)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl font-bold text-[#7A5742] shadow-sm transition hover:bg-[#CFC6B5]"
            >
              −
            </button>

            <span className="w-10 text-center font-bold text-[#7A5742]">
              {item.quantity}
            </span>

            <button
              onClick={() => onIncrease(item.id)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A5742] text-xl font-bold text-white transition hover:opacity-90"
            >
              +
            </button>

          </div>

          <button
            onClick={() => onRemove(item.id)}
            className="text-sm font-semibold text-red-500 transition hover:text-red-700"
          >
            حذف
          </button>

        </div>

        {/* مجموع المنتج */}
        <div className="border-t border-gray-100 pt-4 text-right sm:w-32 sm:border-0 sm:border-r sm:pr-5 sm:pt-0">

          <p className="mb-1 text-xs text-gray-400">
            المجموع
          </p>

          <p className="text-lg font-extrabold text-[#7A5742]">
            {(item.price * item.quantity).toLocaleString()} د.ع
          </p>

        </div>

      </div>
    </div>
  );
}

export default CartItem;
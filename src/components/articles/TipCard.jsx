import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const animations = {
  earth: "/animations/earth%20(2).lottie",
  recycling: "/animations/recycling.lottie",
  energy: "/animations/energy.lottie",
  plant: "/animations/plant.lottie",
  cleanNature: "/animations/clean-nature.lottie",
  reuse:"/animations/reuse.lottie"
  
};

function TipCard({ tip }) {
  const animationSrc = animations[tip.animation];

  return (
    <article className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {animationSrc && (
        <div className="w-full h-40 mb-5 flex justify-center items-center">
          <DotLottieReact
            src={animationSrc}
            loop
            autoplay
          />
        </div>
      )}

      <span className="inline-block mb-3 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
        {tip.category}
      </span>

      <h2 className="text-xl font-bold text-gray-900 leading-8 mb-3">
        {tip.title}
      </h2>

      <p className="text-gray-600 leading-7">
        {tip.description}
      </p>

    </article>
  );
}

export default TipCard;
import React from "react";

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => (
  <div
    tabIndex={0}
    aria-label={`${plan} plan`}
    className={`
      flex flex-col items-center w-full sm:w-80
      bg-white
      ${
        isFeatured
          ? "sm:scale-105 bg-slate-700 text-white z-10"
          : "text-slate-700"
      }
      rounded-none sm:rounded-lg
      shadow
      transition
      duration-200
      outline-none
      ring-0
      focus-visible:ring-4 focus-visible:ring-blue-400
      hover:shadow-2xl
      hover:-translate-y-1
      cursor-pointer
      mx-auto
    `}
  >
    <div className="flex flex-col items-center px-8 py-8 w-full">
      <span
        className={`text-lg font-semibold mb-2 tracking-wide ${
          isFeatured ? "text-white" : "text-slate-500"
        }`}
      >
        {plan}
      </span>
      <span className="text-5xl font-extrabold mb-4 tracking-tight">
        {price}
      </span>
      <ul className="w-full mb-6">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className={`py-2 border-b last:border-b-0 text-center text-base font-medium ${
              isFeatured ? "border-slate-500" : "border-slate-200"
            }`}
          >
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`
          w-full mt-2 py-2 font-bold rounded
          ${
            isFeatured
              ? "bg-white text-slate-700 hover:bg-slate-100"
              : "bg-slate-700 text-white hover:bg-slate-800"
          }
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
          transition
          uppercase
          tracking-wide
        `}
      >
        Subscribe
      </button>
    </div>
  </div>
);

export const PricingSection: React.FC = () => (
  <div className="bg-slate-800 min-h-screen flex flex-col items-center py-12 px-2">
    <h2 className="text-white text-3xl font-bold mb-10">Pricing</h2>
    <div
      className="
      grid grid-cols-1 sm:grid-cols-3 gap-8
      max-w-5xl w-full
      items-stretch
    "
    >
      <PricingCard
        plan="Standard"
        price="$100"
        features={[
          "50,000 Requests",
          "4 contributors",
          "Up to 3 GB storage space",
        ]}
      />
      <PricingCard
        plan="Pro"
        price="$200"
        features={[
          "100,000 Requests",
          "7 contributors",
          "Up to 6 GB storage space",
        ]}
        isFeatured
      />
      <PricingCard
        plan="Expert"
        price="$500"
        features={[
          "200,000 Requests",
          "11 contributors",
          "Up to 10 GB storage space",
        ]}
      />
    </div>
  </div>
);

export default PricingCard;

import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto py-16 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-bold text-gray-800">
          Buy Insurance,
          <br />
          <span className="text-orange-500">Simple and Easy</span>
        </h1>
        <p className="mt-4 text-gray-600">
        We are a professional organization with a dedicated team of qualified insurance professionals, committed to meeting the diverse insurance and risk management needs of clients nationwide. Our team specializes in providing customized solutions for individuals and businesses across various sectors, including life, health, home, and business insurance.We understand that every client has unique requirements, and we work closely with them to identify the best strategies to mitigate risks and protect their assets.With a focus on integrity, transparency, and customer satisfaction, we offer expert guidance and support, ensuring that our clients receive comprehensive coverage tailored to their specific needs.
        </p>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div className="relative w-full max-w-md mx-auto">
          <img
            src="/family.png"
            alt="Family"
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-blue-600 text-white p-4 rounded-full">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

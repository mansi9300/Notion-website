import React from "react";

const strengths = [
    //Here i have used image url just for placeholder
  {
    title: "Claims Assistance",
    description: "Easy & Reliable",
    image: "/images/claims-assistance.svg", 
  },
  {
    title: "Data Security",
    description: "Guaranteed",
    image: "/images/data-security.svg", 
  },
  {
    title: "Best Prices",
    description: "In the market",
    image: "/images/best-prices.svg", 
  },
  {
    title: "24/7 Support",
    description: "Every day of the week",
    image: "/images/support.svg", 
  },
];

const steps = [
  {
    number: 1,
    title: "Select Insurance",
    image: "/images/select-insurance.svg", 
  },
  {
    number: 2,
    title: "Schedule Meeting",
    image: "/images/schedule-meeting.svg", 
  },
  {
    number: 3,
    title: "Meet Agent",
    image: "/images/meet-agent.svg", 
  },
  {
    number: 4,
    title: "Get Insurance",
    image: "/images/get-insurance.svg", 
  },
];

const UniqueStrengths = () => {
  return (
    <div>
     
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Our Unique Strengths</h2>
          <p className="text-gray-600 mb-8">
            Experience excellence with our tailored solutions and commitment to
            customer satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <img
                  src={strength.image}
                  alt={strength.title}
                  className="mx-auto mb-4 w-20 h-20"
                />
                <h3 className="text-lg font-bold">{strength.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Our Easy Work Process in 4 Steps</h2>
          <p className="text-gray-600 mb-8">Work process</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <div className="text-blue-500 text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="mx-auto mb-4 w-16 h-16"
                />
                <p className="text-sm text-gray-600">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniqueStrengths;

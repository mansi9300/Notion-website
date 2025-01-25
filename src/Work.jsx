import React from "react";

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      icon: "https://via.placeholder.com/50", 
    },
    {
      id: 2,
      icon: "https://via.placeholder.com/50", 
      title: "Schedule meeting",
    },
    {
      id: 3,
      icon: "https://via.placeholder.com/50", 
      title: "Meet agent",
    },
    {
      id: 4,
      icon: "https://via.placeholder.com/50", 
      title: "Get insurance",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Our Easy Work Process in 4 Steps</h2>
        <p className="text-gray-600 mb-8">Work process</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-4"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4">
                <span className="text-lg font-bold">{step.id}</span>
              </div>
              <img
                src={step.icon}
                alt={`Step ${step.id}`}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

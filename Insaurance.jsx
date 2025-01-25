import React from "react";

const InsuranceCategories = () => {
  const motorInsurance = [
    
    { icon: "/icons/car.png", title: "Car Insurance" },
    { icon: "/icons/bike.png", title: "2 Wheeler Insurance" },
    { icon: "/icons/truck.png", title: "Commercial Vehicle" },
  ];

  const lifeInsurance = [
    { icon: "/icons/shield.png", title: "Term Insurance" },
    { icon: "/icons/money.png", title: "Endowment Plan" },
  ];

  const healthInsurance = [
    { icon: "/icons/health.png", title: "Individual Health Insurance" },
    { icon: "/icons/family.png", title: "Family Health Insurance" },
    { icon: "/icons/senior.png", title: "Senior Citizen Plan" },
  ];

  const otherInsurance = [
    { icon: "/icons/life.png", title: "Life insurance" },
    { icon: "/icons/heart.png", title: "Health insurance" },
    { icon: "/icons/investment.png", title: "Investment Plans insurance" },
    { icon: "/icons/child.png", title: "Child insurance" },
    { icon: "/icons/money-back.png", title: "Money Back Plan Life plan" },
    { icon: "/icons/employee.png", title: "Employee Health insurance" },
    { icon: "/icons/travel.png", title: "Travel insurance" },
    { icon: "/icons/fire.png", title: "Fire & Burglary insurance" },
    { icon: "/icons/home.png", title: "Home insurance" },
    { icon: "/icons/marine.png", title: "Marine insurance" },
    { icon: "/icons/taxi.png", title: "Taxi insurance" },
    { icon: "/icons/shop.png", title: "Shop Owner insurance" },
    { icon: "/icons/worker.png", title: "Worker insurance" },
    { icon: "/icons/liability.png", title: "General Liability insurance" },
    { icon: "/icons/cyber.png", title: "Cyber insurance" },
  ];

  return (
    <section className="container mx-auto py-12">
      {/* Motor, Life, and Health Insurance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-bold text-center mb-4">Motor Insurance</h2>
          <div className="flex flex-col space-y-2">
            {motorInsurance.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={item.icon} alt={item.title} className="h-6 w-6" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-bold text-center mb-4">Life Insurance</h2>
          <div className="flex flex-col space-y-2">
            {lifeInsurance.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={item.icon} alt={item.title} className="h-6 w-6" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-bold text-center mb-4">Health Insurance</h2>
          <div className="flex flex-col space-y-2">
            {healthInsurance.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={item.icon} alt={item.title} className="h-6 w-6" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Insurance */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-center mb-8">Other Insurance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherInsurance.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center flex flex-col items-center space-y-2"
            >
              <img src={item.icon} alt={item.title} className="h-10 w-10" />
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;

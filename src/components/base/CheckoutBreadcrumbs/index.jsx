import React from "react";
import { useLocation } from "react-router-dom";
import { Check, CircleDot } from "lucide-react";
import "./style.css";

const CheckoutBreadcrumbs = () => {
  const location = useLocation();

  const steps = [
    { path: "/user/cart", label: "Cart" },
    { path: "/user/delivery", label: "Delivery" },
    { path: "/user/checkout", label: "Payment" },
    { path: "/user/confirmation", label: "Confirmation" },
  ];

  const getCurrentStep = () => {
    return steps.findIndex((step) => step.path === location.pathname);
  };

  const currentStep = getCurrentStep();

  return (
    <div className="breadcrumbs-container">
      <div className="breadcrumbs">
        {steps.map((step, index) => (
          <div key={step.label} className="step">
            <div
              className={`step-circle ${
                index < currentStep
                  ? "completed"
                  : index === currentStep
                  ? "current"
                  : "pending"
              }`}
            >
              {index < currentStep ? (
                <Check className="icon" color="#4b5845" />
              ) : index === currentStep ? (
                <CircleDot className="icon" color="#4b5845" />
              ) : null}
            </div>
            <span
              className={`step-label ${
                index <= currentStep ? "step-active" : "inactive"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}

        <div className="progress-bar">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBreadcrumbs;

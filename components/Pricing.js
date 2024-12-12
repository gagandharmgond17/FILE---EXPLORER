import React from 'react';

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      features: ['Basic Analytics', '5 Team Members', '10GB Storage', 'Email Support']
    },
    {
      name: 'Professional',
      price: '$99',
      features: ['Advanced Analytics', '15 Team Members', '50GB Storage', 'Priority Support']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom Analytics', 'Unlimited Team Members', 'Unlimited Storage', '24/7 Support']
    }
  ];

  return (
    <section className="pricing">
      <h2>Simple, Transparent Pricing</h2>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <ul>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-button">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;

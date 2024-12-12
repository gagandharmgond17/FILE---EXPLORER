export default function Features() {
  const features = [
    {
      title: 'Advanced Analytics',
      description: 'Get deep insights into your business performance',
      icon: '📊'
    },
    {
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team members',
      icon: '👥'
    },
    {
      title: 'Cloud Storage',
      description: 'Secure and scalable cloud storage solution',
      icon: '☁️'
    }
  ];

  return (
    <section className="features">
      <h2>Why Choose Us</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

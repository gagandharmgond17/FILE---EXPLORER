import Image from 'next/image';
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Link from 'next/link';

export default function Hero() {
  const { isSignedIn, user } = useUser();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transform Your Business with Our SaaS Solution</h1>
        <p>Streamline your workflow, boost productivity, and scale your business with our powerful platform.</p>
        <div className="mt-8 space-x-4">
          {isSignedIn ? (
            <Link href="/dashboard">
              <button className="cta-button">Go to Dashboard</button>
            </Link>
          ) : (
            <>
              <SignUpButton mode="modal">
                <button className="cta-button">Get Started Free</button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium 
                  border-2 border-primary hover:bg-gray-50 transition-colors duration-300">
                  Sign In
                </button>
              </SignInButton>
            </>
          )}
        </div>
      </div>
      <div className="hero-image">
        <Image 
          src="/hero-image.svg" 
          alt="Platform Preview"
          width={500}
          height={400}
          priority
        />
      </div>
    </section>
  );
}

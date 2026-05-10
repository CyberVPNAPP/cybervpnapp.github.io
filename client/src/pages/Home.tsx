import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Lock, Zap, Users, Shield, Smartphone, Download, Check, X } from "lucide-react";
import { useState } from "react";

/**
 * CyberVPN Landing Page
 * Design: Cyber-Noir Minimalism
 * - Dark background (#0A0E27) with yellow accents (#FFD700)
 * - Sharp geometric shapes, no rounded corners
 * - Monospace typography for technical credibility
 * - Diagonal dividers and asymmetrical layout
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center font-mono font-bold text-primary-foreground">
              C
            </div>
            <span className="font-mono font-bold text-lg">CYBERVPN</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              FEATURES
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">
              PRICING
            </a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">
              FAQ
            </a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 border border-primary font-mono text-sm">
            DOWNLOAD
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container grid md:grid-cols-2 gap-12 py-24 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-mono font-bold leading-tight">
                ENCRYPTED.
                <br />
                SECURE.
                <br />
                PRIVATE.
              </h1>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              Your online privacy matters. CyberVPN provides military-grade encryption and global access with zero logs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 border border-primary font-mono px-8 py-6 text-base">
                GET ON PLAY STORE
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono px-8 py-6 text-base">
                LEARN MORE
              </Button>
            </div>
            <div className="pt-4 space-y-2 text-sm font-mono text-muted-foreground">
              <div>✓ 50+ Countries</div>
              <div>✓ No-Log Policy</div>
              <div>✓ Lightning Fast</div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663646168487/VwZ9GyNrgWuynVJ4WXKoct/cybervpn-hero-1-iTsJBGxEa4fdFYA9qcqTLt.webp"
              alt="CyberVPN Hero"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-card" style={{
          clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)"
        }}></div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">WHY CYBERVPN?</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border border-border p-8 hover:border-primary transition-colors group">
              <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono font-bold text-lg mb-3">MILITARY ENCRYPTION</h3>
              <p className="text-muted-foreground">
                AES-256 encryption keeps your data safe from prying eyes. Bank-level security for your digital life.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border border-border p-8 hover:border-primary transition-colors group">
              <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono font-bold text-lg mb-3">GLOBAL COVERAGE</h3>
              <p className="text-muted-foreground">
                Connect to 50+ countries with optimized servers. Access content from anywhere, anytime.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border border-border p-8 hover:border-primary transition-colors group">
              <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono font-bold text-lg mb-3">LIGHTNING FAST</h3>
              <p className="text-muted-foreground">
                Optimized for speed. Stream, browse, and download without lag or buffering.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border border-border p-8 hover:border-primary transition-colors group">
              <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono font-bold text-lg mb-3">ZERO LOGS</h3>
              <p className="text-muted-foreground">
                We never track your activity. Your privacy is our priority. Period.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="border border-border p-8 hover:border-primary transition-colors group">
              <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono font-bold text-lg mb-3">ONE-TAP CONNECT</h3>
              <p className="text-muted-foreground">
                Simple, intuitive interface. Connect in one tap. No technical knowledge required.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="border border-border p-8 hover:border-primary transition-colors group">
              <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono font-bold text-lg mb-3">MULTI-DEVICE</h3>
              <p className="text-muted-foreground">
                Protect all your devices with one account. Android, iOS, Windows, and Mac.
              </p>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" style={{
          clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)"
        }}></div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">SIMPLE PRICING</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="border border-border p-8">
              <h3 className="font-mono font-bold text-xl mb-2">FREE</h3>
              <div className="text-3xl font-mono font-bold mb-6">$0<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>1 Device</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>5 Countries</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <X className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Priority Support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-border text-foreground hover:bg-card font-mono">
                GET STARTED
              </Button>
            </div>

            {/* Pro Plan (Highlighted) */}
            <div className="border-2 border-primary p-8 relative">
              <div className="absolute -top-4 left-4 bg-primary text-primary-foreground px-3 py-1 font-mono text-xs font-bold">
                RECOMMENDED
              </div>
              <h3 className="font-mono font-bold text-xl mb-2">PRO</h3>
              <div className="text-3xl font-mono font-bold mb-6">$4.99<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>5 Devices</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>50+ Countries</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border border-primary font-mono">
                SUBSCRIBE NOW
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="border border-border p-8">
              <h3 className="font-mono font-bold text-xl mb-2">PREMIUM</h3>
              <div className="text-3xl font-mono font-bold mb-6">$9.99<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Unlimited Devices</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>50+ Countries</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>24/7 Support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-border text-foreground hover:bg-card font-mono">
                SUBSCRIBE NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-card">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">FREQUENTLY ASKED</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is CyberVPN really free?",
                a: "Yes! CyberVPN offers a free plan with limited features. Upgrade to Pro or Premium for unlimited access to all servers and features."
              },
              {
                q: "Do you log my activity?",
                a: "Absolutely not. We have a strict zero-log policy. Your activity is never recorded, stored, or shared with anyone."
              },
              {
                q: "How many devices can I connect?",
                a: "Free plan: 1 device. Pro plan: 5 devices. Premium plan: Unlimited devices. All on one account."
              },
              {
                q: "Will it slow down my internet?",
                a: "CyberVPN is optimized for speed. You may notice minimal impact, but most users report no noticeable slowdown."
              },
              {
                q: "Is it safe to use?",
                a: "Yes. We use military-grade AES-256 encryption, trusted by governments and security experts worldwide."
              },
              {
                q: "Can I use CyberVPN on multiple devices?",
                a: "Yes! Your subscription covers multiple devices depending on your plan. Download the app on any device and log in."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-border">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-background/50 transition-colors text-left"
                >
                  <h3 className="font-mono font-bold">{item.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-border text-muted-foreground">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663646168487/VwZ9GyNrgWuynVJ4WXKoct/cybervpn-hero-3-Gkioevo9BKQzcPGxrkCDQi.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">READY TO SECURE YOUR PRIVACY?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust CyberVPN for their online security and privacy.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 border border-primary font-mono px-12 py-6 text-lg">
            DOWNLOAD ON PLAY STORE
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary flex items-center justify-center font-mono font-bold text-primary-foreground">
                  C
                </div>
                <span className="font-mono font-bold">CYBERVPN</span>
              </div>
              <p className="text-sm text-muted-foreground">Your privacy, our priority.</p>
            </div>
            <div>
              <h4 className="font-mono font-bold mb-4">PRODUCT</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold mb-4">LEGAL</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 CyberVPN. All rights reserved. Your privacy is our mission.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

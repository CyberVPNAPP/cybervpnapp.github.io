import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Lock, Zap, Users, Shield, Smartphone } from "lucide-react";
import { useState } from "react";

/**
 * CyberVPN Landing Page - Modern Theme
 * Design: Clean white background with yellow accents
 * - Circular yellow logo with "C" letter
 * - Modern fonts: Poppins for headlines, Outfit for body
 * - Yellow buttons and accents
 */

const CyberLogo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    {/* Outer circle */}
    <circle cx="50" cy="50" r="48" fill="#FFD700" />
    {/* Letter C */}
    <text
      x="50"
      y="65"
      fontSize="60"
      fontWeight="bold"
      textAnchor="middle"
      fill="#1A1A1A"
      fontFamily="Arial, sans-serif"
    >
      C
    </text>
  </svg>
);

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <CyberLogo />
            <span style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold text-xl">Cyber.</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-accent transition-colors font-medium">
              FEATURES
            </a>
            <a href="#faq" className="text-sm hover:text-accent transition-colors font-medium">
              FAQ
            </a>
          </div>
          <div className="relative">
            <button
              onClick={() => setDownloadOpen(!downloadOpen)}
              className="bg-accent text-primary-foreground hover:bg-accent/90 border border-accent font-medium text-sm px-4 py-2 rounded flex items-center gap-2 transition-colors"
            >
              DOWNLOAD
              <ChevronDown size={16} className={`transition-transform ${downloadOpen ? 'rotate-180' : ''}`} />
            </button>
            {downloadOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded shadow-lg z-50">
                <a
                  href="#play-store"
                  className="block px-4 py-3 hover:bg-muted transition-colors text-sm font-medium border-b border-border"
                  onClick={() => setDownloadOpen(false)}
                >
                  Get on Play Store
                </a>
                <a
                  href="/download-windows"
                  className="block px-4 py-3 hover:bg-muted transition-colors text-sm font-medium"
                  onClick={() => setDownloadOpen(false)}
                >
                  Download for Windows
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-32 items-center">
          {/* Main Content - Centered */}
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
              <h1 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-5xl md:text-7xl font-bold leading-tight">
                Fast, Secure & Free VPN
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-semibold">
                No Logs, No Tracking
              </p>
              <div className="w-16 h-1 bg-accent mx-auto"></div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your online privacy matters. Cyber VPN protects you with military-grade WireGuard encryption, zero logs, and lightning-fast Singapore servers — completely free. Browse safely, stay anonymous, and connect in one tap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="#play-store">
                <Button className="bg-accent text-primary-foreground hover:bg-accent/90 border border-accent font-semibold px-8 py-6 text-base">
                  GET ON PLAY STORE
                </Button>
              </a>
              <a href="/download-windows">
                <Button className="bg-accent text-primary-foreground hover:bg-accent/90 border border-accent font-semibold px-8 py-6 text-base">
                  GET ON WINDOWS
                </Button>
              </a>
            </div>
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
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-4">WHY CYBERVPN?</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border border-border p-8 hover:border-accent transition-colors group">
              <div className="w-12 h-12 border-2 border-accent flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold text-lg mb-3">MILITARY ENCRYPTION</h3>
              <p className="text-muted-foreground">
                WireGuard protocol keeps your connection encrypted and secure. Your data stays private — always.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border border-border p-8 hover:border-accent transition-colors group">
              <div className="w-12 h-12 border-2 border-accent flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold text-lg mb-3">SINGAPORE SERVER</h3>
              <p className="text-muted-foreground">
                Optimized Singapore server with ultra-low latency. Perfect for Southeast Asia users — Malaysia, Myanmar, Thailand and more.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border border-border p-8 hover:border-accent transition-colors group">
              <div className="w-12 h-12 border-2 border-accent flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold text-lg mb-3">LIGHTNING FAST</h3>
              <p className="text-muted-foreground">
                WireGuard — the fastest VPN protocol available. Browse, stream, and game without slowdowns.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border border-border p-8 hover:border-accent transition-colors group">
              <div className="w-12 h-12 border-2 border-accent flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold text-lg mb-3">ZERO LOGS</h3>
              <p className="text-muted-foreground">
                We never store your activity, connection logs, or personal data. What you do online stays yours. Period.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="border border-border p-8 hover:border-accent transition-colors group">
              <div className="w-12 h-12 border-2 border-accent flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold text-lg mb-3">ONE-TAP CONNECT</h3>
              <p className="text-muted-foreground">
                Open the app, tap connect. Done. No complicated setup, no technical knowledge needed.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="border border-border p-8 hover:border-accent transition-colors group">
              <div className="w-12 h-12 border-2 border-accent flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold text-lg mb-3">FREE TO USE</h3>
              <p className="text-muted-foreground">
                No credit card. No signup required for guest access. Download and connect instantly — completely free.
              </p>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" style={{
          clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)"
        }}></div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-card">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-4">FREQUENTLY ASKED</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is CyberVPN really free?",
                a: "Yes! CyberVPN is completely free to download and use. No hidden fees, no credit card required. Just download, connect, and enjoy."
              },
              {
                q: "Do you log my activity?",
                a: "Absolutely not. We have a strict zero-log policy. Your activity, connection logs, and personal data are never recorded, stored, or shared with anyone."
              },
              {
                q: "Which servers are available?",
                a: "We offer optimized Singapore servers with ultra-low latency, perfect for Southeast Asia users in Malaysia, Myanmar, Thailand, and surrounding regions."
              },
              {
                q: "Will it slow down my internet?",
                a: "No. WireGuard is the fastest VPN protocol available. Most users experience no noticeable slowdown — you can browse, stream, and game smoothly."
              },
              {
                q: "Is it safe to use?",
                a: "Yes. We use military-grade WireGuard encryption, trusted by security experts worldwide. Your connection is always secure and private."
              },
              {
                q: "How do I get started?",
                a: "Download CyberVPN from the Play Store or Windows store, open the app, and tap connect. That's it — no setup required, completely free."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-border">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-background/50 transition-colors text-left"
                >
                  <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold">{item.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform ${
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
        <div className="container relative z-10 text-center">
          <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-4xl md:text-5xl font-bold mb-6">READY TO SECURE YOUR PRIVACY?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust CyberVPN for their online security and privacy. Download now — it's completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent text-primary-foreground hover:bg-accent/90 border border-accent font-semibold px-12 py-6 text-lg">
              GET ON PLAY STORE
            </Button>
            <Button className="bg-accent text-primary-foreground hover:bg-accent/90 border border-accent font-semibold px-12 py-6 text-lg">
              GET ON WINDOWS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CyberLogo />
                <span style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold">Cyber.</span>
              </div>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold mb-4">PRODUCT</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Download</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="mailto:cybervpnapp@gmail.com" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold mb-4">LEGAL</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Cyber. All rights reserved. Your privacy is our mission.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

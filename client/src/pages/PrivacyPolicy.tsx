export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold text-xl">Cyber</span>
          </a>
          <a href="/" className="text-sm hover:text-accent transition-colors font-medium">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="container max-w-3xl py-16">
        <h1 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Cyber VPN — Last updated: May 2026</p>

        <div className="space-y-8 prose prose-sm max-w-none">
          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect only what is necessary to provide our service:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Name and email address (for registered accounts)</li>
              <li>Account credentials (stored securely with encryption)</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">2. Information We Do NOT Collect</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>We do not log your browsing activity</li>
              <li>We do not track websites you visit</li>
              <li>We do not store your IP address or connection timestamps</li>
              <li>We do not sell your data to third parties</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To create and manage your account</li>
              <li>To send verification codes via email</li>
              <li>To provide VPN service</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              Your password is encrypted using bcrypt. We use WireGuard protocol for VPN connections — one of the most secure protocols available.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">5. Third Party Services</h2>
            <p className="text-muted-foreground">
              We use SendGrid for email delivery. They may process your email address to deliver verification codes.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground">
              For privacy concerns: <a href="mailto:cybervpnapp@gmail.com" className="text-accent hover:underline">cybervpnapp@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

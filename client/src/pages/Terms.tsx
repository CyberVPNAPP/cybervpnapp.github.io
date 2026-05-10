export default function Terms() {
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
        <h1 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Cyber VPN — Last updated: May 2026</p>

        <div className="space-y-8 prose prose-sm max-w-none">
          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By downloading or using Cyber VPN, you agree to these terms. If you do not agree, do not use the app.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">2. Use of Service</h2>
            <p className="text-muted-foreground mb-4">
              You agree to use Cyber VPN only for lawful purposes. You must not use our service to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access illegal content</li>
              <li>Perform hacking or cyberattacks</li>
              <li>Violate any local or international laws</li>
              <li>Harass or harm others</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">3. Account Responsibility</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>You are responsible for keeping your account credentials secure</li>
              <li>Do not share your account with others</li>
              <li>One account per person</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">4. Free vs Premium</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Free users get 1 hour sessions</li>
              <li>Premium users get 3 hour sessions and unlimited data</li>
              <li>Premium is granted manually — contact us via Telegram</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">5. Service Availability</h2>
            <p className="text-muted-foreground">
              We do not guarantee 100% uptime. We may perform maintenance or experience downtime. We are not liable for any losses caused by service interruption.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">6. Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to terminate accounts that violate these terms without notice.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may update these terms at any time. Continued use of the app means you accept the new terms.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground">
              Email: <a href="mailto:cybervpnapp@gmail.com" className="text-accent hover:underline">cybervpnapp@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold text-xl">Cyber.</span>
          </a>
          <a href="/" className="text-sm hover:text-accent transition-colors font-medium">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="container max-w-3xl py-16">
        <h1 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-4xl font-bold mb-2">Account Deletion</h1>
        <p className="text-muted-foreground mb-8">Cyber. — Last updated: May 2026</p>

        <div className="space-y-8 prose prose-sm max-w-none">
          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">Request Data Deletion</h2>
            <p className="text-muted-foreground mb-4">
              At Cyber VPN, we respect your privacy and your right to control your data. If you would like to delete your account and all associated data, please follow the instructions below.
            </p>
          </section>

          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>How to Delete Your Account</CardTitle>
              <CardDescription>Follow these steps to permanently remove your data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-bold text-foreground">Option 1: In-App Deletion</h3>
                <p className="text-sm text-muted-foreground">
                  1. Open the Cyber VPN app on your Android device.<br />
                  2. Go to <strong>Settings</strong> or <strong>Profile</strong>.<br />
                  3. Select <strong>Delete Account</strong>.<br />
                  4. Confirm your choice. Your data will be removed immediately.
                </p>
              </div>
              
              <div className="space-y-2 pt-4 border-t border-border">
                <h3 className="font-bold text-foreground">Option 2: Email Request</h3>
                <p className="text-sm text-muted-foreground">
                  If you cannot access the app, you can request account deletion by emailing us from the email address associated with your account.
                </p>
                <div className="pt-2">
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href="mailto:cybervpnapp@gmail.com?subject=Account Deletion Request">
                      Email cybervpnapp@gmail.com
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">What happens when I delete my account?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Your profile information (name, email) is permanently removed.</li>
              <li>Your active subscriptions will be cancelled (if applicable).</li>
              <li>All saved preferences and connection history are wiped.</li>
              <li><strong>This action cannot be undone.</strong> Once deleted, your data cannot be recovered.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold mb-4">Data Retention Policy</h2>
            <p className="text-muted-foreground">
              Upon receiving a deletion request, we process it within 7 business days. Some information may be retained for a limited period if required by law or for legitimate business purposes (such as fraud prevention), but it will no longer be associated with your identity.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

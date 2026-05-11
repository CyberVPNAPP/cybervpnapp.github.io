import { Download, ArrowLeft, CheckCircle, Shield, Zap, Smartphone } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Android Download Page - Play Store
 * Directs users to Google Play Store
 */

export default function DownloadAndroid() {
  const [, setLocation] = useLocation();

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.cybervpn.app";
  const APP_NAME = "Cyber VPN";

  const handlePlayStoreClick = () => {
    window.open(PLAY_STORE_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Back
          </button>
          <span style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold text-xl">Cyber.</span>
          <div className="w-16"></div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="container py-20">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-5xl font-bold">
              Download Cyber VPN
            </h1>
            <p className="text-lg text-muted-foreground">
              Get the Android app on Google Play Store
            </p>
          </div>

          {/* App Information Card */}
          <div className="border border-border rounded-lg p-8 space-y-6">
            {/* App Information */}
            <div className="space-y-4">
              <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold">
                App Information
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">App Name:</span>
                  <span className="font-medium">{APP_NAME}</span>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="pt-2">
              <button
                onClick={handlePlayStoreClick}
                className="w-full bg-accent text-primary-foreground hover:bg-accent/90 font-bold text-lg px-6 py-4 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <Download size={24} />
                Get on Google Play Store
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold">
                What You Get:
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield size={20} className="text-accent flex-shrink-0" />
                  <span>Military-grade WireGuard encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-accent flex-shrink-0" />
                  <span>Lightning-fast Singapore servers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span>Zero logs, completely free</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone size={20} className="text-accent flex-shrink-0" />
                  <span>One-tap connect on any Android device</span>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements Info */}
          <div className="border border-border rounded-lg p-6 bg-card/50">
            <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="font-bold mb-3">
              System Requirements
            </h3>
            <p className="text-sm text-muted-foreground">
              Android 8.0 or later. Available on all devices with Google Play Store access.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

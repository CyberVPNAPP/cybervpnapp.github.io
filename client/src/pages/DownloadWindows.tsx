import { Download, ArrowLeft, CheckCircle, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * Windows Download Page - Simplified
 * File info + Download button + What You Get
 */

export default function DownloadWindows() {
  const [, setLocation] = useLocation();
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const FILE_NAME = "Cyber VPN.exe";
  const FILE_SIZE = "61 KB";

  const handleDownload = async () => {
    setDownloading(true);
    setError(null);
    try {
      // Use the Express download endpoint instead of direct CDN fetch
      const response = await fetch("/api/download/windows");
      
      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`);
      }

      const blob = await response.blob();
      
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = FILE_NAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      
      setTimeout(() => {
        setDownloading(false);
      }, 500);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Download failed";
      console.error("Download failed:", errorMsg);
      setError(errorMsg);
      setDownloading(false);
    }
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
              Get the Windows desktop application
            </p>
          </div>

          {/* File Information Card */}
          <div className="border border-border rounded-lg p-8 space-y-6">
            {/* File Information */}
            <div className="space-y-4">
              <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold">
                File Information
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">File Name:</span>
                  <span className="font-medium">{FILE_NAME}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">File Size:</span>
                  <span className="font-medium">{FILE_SIZE}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Platform:</span>
                  <span className="font-medium">Windows 10 & 11</span>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
                <p className="font-medium">Download Error</p>
                <p>{error}</p>
              </div>
            )}

            {/* Download Button */}
            <div className="pt-2">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="w-full bg-accent text-primary-foreground hover:bg-accent/90 disabled:opacity-50 font-bold text-lg px-6 py-4 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <Download size={24} />
                {downloading ? "Downloading..." : "Download Now"}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Download, ArrowLeft, CheckCircle, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * Windows Download Page
 * Displays file information and confirmation dialog before download
 */

export default function DownloadWindows() {
  const [, setLocation] = useLocation();
  const [showConfirm, setShowConfirm] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const DOWNLOAD_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663646168487/PfEpDyMMhKNdBphm.exe";
  const FILE_NAME = "Cyber VPN.exe";
  const FILE_SIZE = "61 KB";

  const handleDownload = () => {
    setDownloading(true);
    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = DOWNLOAD_URL;
    link.download = FILE_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset state after a short delay
    setTimeout(() => {
      setDownloading(false);
      setShowConfirm(false);
    }, 1000);
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
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-5xl font-bold">
              Download Cyber VPN
            </h1>
            <p className="text-lg text-muted-foreground">
              Get the Windows desktop application
            </p>
          </div>

          {/* File Information Card */}
          <div className="border border-border rounded-lg p-8 space-y-6">
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

            {/* Download Button */}
            <div className="pt-6">
              <button
                onClick={() => setShowConfirm(true)}
                className="w-full bg-accent text-primary-foreground hover:bg-accent/90 font-bold text-lg px-6 py-4 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <Download size={24} />
                Download Now
              </button>
              <p className="text-sm text-muted-foreground text-center mt-3">
                The installer will guide you through the setup process
              </p>
            </div>
          </div>

          {/* System Requirements */}
          <div className="border border-border rounded-lg p-8 space-y-4">
            <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-xl font-bold">
              System Requirements
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Windows 10 or later</li>
              <li>• 100 MB free disk space</li>
              <li>• Active internet connection</li>
              <li>• Administrator privileges for installation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Confirmation Dialog */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-lg p-8 max-w-md w-full space-y-6 shadow-xl">
            <div className="space-y-2">
              <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl font-bold">
                Ready to Download?
              </h3>
              <p className="text-muted-foreground">
                You're about to download Cyber VPN for Windows. The file will start downloading to your default download folder.
              </p>
            </div>

            <div className="bg-muted p-4 rounded space-y-2">
              <p className="text-sm font-medium">File: {FILE_NAME}</p>
              <p className="text-sm font-medium">Size: {FILE_SIZE}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 border border-border hover:bg-muted text-foreground font-medium px-4 py-2 rounded transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="flex-1 bg-accent text-primary-foreground hover:bg-accent/90 disabled:opacity-50 font-medium px-4 py-2 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Download size={18} />
                {downloading ? "Downloading..." : "Download"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

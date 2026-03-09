import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/61488841883?text=Hi%2C%20I%27d%20like%20a%20bond%20cleaning%20quote"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tru Sunshine Coast Bond Cleaners on WhatsApp"
      data-ocid="whatsapp.floating.button"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-4 py-3 rounded-full shadow-navy transition-all hover:scale-105 active:scale-95"
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span className="text-sm hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}

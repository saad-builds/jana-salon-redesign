import { AiOutlineWhatsApp } from "react-icons/ai";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/925181617"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-7 right-7 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-2xl shadow-lg z-50"
    >
      <AiOutlineWhatsApp />
    </a>
  );
}

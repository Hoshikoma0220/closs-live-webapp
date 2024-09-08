// src/components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 ClossLive. All rights reserved.</p>
        <nav className="space-x-4">
          <a href="/privacy" className="hover:underline">プライバシーポリシー</a>
          <a href="/terms" className="hover:underline">利用規約</a>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
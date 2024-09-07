import { useState } from 'react';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(true); // モーダルが開いているかどうか

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-center text-2xl font-bold mb-4">ログイン</h2>
            <div className="flex flex-col space-y-4">
              <button className="bg-black text-white py-2 px-4 rounded-lg">Xでログイン</button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Facebookでログイン</button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Googleでログイン</button>
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg">Yahoo!でログイン</button>
              <div className="text-center text-sm">メールアドレスでログイン</div>
              <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded-lg">メールアドレスでログイン</button>
            </div>
            <button onClick={closeModal} className="mt-4 text-gray-500 text-center w-full">アカウントの新規登録はこちら</button>
          </div>
        </div>
      )}
    </>
  );
};

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('/path-to-background-image.jpg')]">
      <LoginModal />
      {/* 他のページコンテンツ */}
    </div>
  );
};

export default HomePage;

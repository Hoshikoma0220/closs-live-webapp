'use client';

import { useState } from 'react';
import { FaBars, FaBell, FaSearch, FaHome, FaCog, FaUser } from 'react-icons/fa';
import Image from 'next/image'; // ユーザーアイコンに画像を使用するためのNext.js Imageコンポーネント

interface HeaderProps {
  selectedSection: 'videos' | 'live' | 'posts';
  setSelectedSection: (section: 'videos' | 'live' | 'posts') => void;
}

const Layout: React.FC<HeaderProps> = ({ selectedSection, setSelectedSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // 初期設定でサイドバーを開いておく
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // ドロップダウンの開閉管理
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('検索クエリ:', searchQuery);
  };

  return (
    <>
      {/* ヘッダー */}
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between fixed w-full top-0 z-10">
        {/* 左側のハンバーガーメニューとロゴ */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white focus:outline-none"
          >
            <FaBars className="w-6 h-6" />
          </button>
          <div className="text-xl font-bold text-purple-400">ClossLive</div>

          {/* 動画、配信、投稿のプルダウンメニュー */}
          <div className="relative ml-4">
            <button
              className="px-2 py-1 text-sm bg-gray-800 rounded hover:bg-gray-700 flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedSection === 'videos' && '動画'}
              {selectedSection === 'live' && '配信'}
              {selectedSection === 'posts' && '投稿'}
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-1 w-36 bg-gray-800 text-white rounded-lg shadow-lg text-sm">
                <button
                  className={`block w-full text-left px-4 py-1 hover:bg-gray-700 ${
                    selectedSection === 'videos' ? 'bg-blue-500' : ''
                  }`}
                  onClick={() => {
                    setSelectedSection('videos');
                    setIsDropdownOpen(false);
                  }}
                >
                  動画
                </button>
                <button
                  className={`block w-full text-left px-4 py-1 hover:bg-gray-700 ${
                    selectedSection === 'live' ? 'bg-blue-500' : ''
                  }`}
                  onClick={() => {
                    setSelectedSection('live');
                    setIsDropdownOpen(false);
                  }}
                >
                  配信
                </button>
                <button
                  className={`block w-full text-left px-4 py-1 hover:bg-gray-700 ${
                    selectedSection === 'posts' ? 'bg-blue-500' : ''
                  }`}
                  onClick={() => {
                    setSelectedSection('posts');
                    setIsDropdownOpen(false);
                  }}
                >
                  投稿
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 中央の検索バー */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1/3"> {/* 中央に固定 */}
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="検索"
              className="h-10 flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleSearch}
              className="h-10 px-4 py-2 bg-purple-500 text-white rounded-r-lg hover:bg-purple-600 focus:outline-none"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* 右側の通知とユーザーアイコン */}
        <div className="flex items-center space-x-4">
          {/* 通知ボタン */}
          <button className="relative">
            <FaBell className="text-white w-6 h-6 hover:text-purple-400" />
          </button>

          {/* ユーザーアイコン */}
          <div className="relative w-8 h-8">
            <Image
              src="/user-icon.jpg" // アイコンの画像パス
              alt="User Icon"
              className="rounded-full"
              layout="fill" // Next.js Imageコンポーネントでサイズ指定
              objectFit="cover" // アイコンのアスペクト比を保ちながら中央に表示
            />
          </div>
        </div>
      </header>

      {/* コンテンツ表示エリア */}
      <div className="flex pt-16"> {/* ヘッダーの高さ分（64px）余白を確保 */}
        {/* サイドバー */}
        <div
          className={`bg-gray-800 text-white h-screen p-4 transition-all duration-300 ease-in-out transform ${
            isSidebarOpen ? 'translate-x-0 w-64' : 'translate-x-0 w-20'
          }`}
        >
          <ul className="space-y-4">
            <li className="py-2 hover:bg-gray-700 rounded flex items-center">
              <FaHome className="mr-2" />
              <span className={`${isSidebarOpen ? 'inline' : 'hidden'} origin-left duration-300`}>ホーム</span>
            </li>
            <li className="py-2 hover:bg-gray-700 rounded flex items-center">
              <FaCog className="mr-2" />
              <span className={`${isSidebarOpen ? 'inline' : 'hidden'} origin-left duration-300`}>設定</span>
            </li>
            <li className="py-2 hover:bg-gray-700 rounded flex items-center">
              <FaUser className="mr-2" />
              <span className={`${isSidebarOpen ? 'inline' : 'hidden'} origin-left duration-300`}>プロフィール</span>
            </li>
          </ul>
        </div>

        {/* メインコンテンツ */}
        <main
          className={`flex-grow p-8 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'ml-64' : 'ml-20'
          }`}
        >
          <h1 className="text-2xl font-bold">ここにメインコンテンツが表示されます</h1>
        </main>
      </div>
    </>
  );
};

export default Layout;
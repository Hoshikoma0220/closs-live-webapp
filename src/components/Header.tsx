'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaBell, FaSearch, FaHome, FaFire, FaUserFriends, FaClock, FaCaretRight, FaCog, FaPlus } from 'react-icons/fa';

interface HeaderProps {
  selectedSection: 'videos' | 'live' | 'posts';
  setSelectedSection: (section: 'videos' | 'live' | 'posts') => void;
}

const Layout: React.FC<HeaderProps> = ({ selectedSection, setSelectedSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // 初期設定でサイドバーを開いておく
  const [isMyListOpen, setIsMyListOpen] = useState(false); // マイリストの開閉管理
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // プロフィールメニューの開閉管理
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // 通知メニューの開閉管理
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // 設定メニューの開閉管理
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('system'); // ダークモード管理
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // 初回レンダリング時にローカルストレージからテーマを取得
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | 'system';
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (theme: 'dark' | 'light' | 'system') => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.remove('light');
      root.classList.remove('dark');
    }
  };

  const handleThemeChange = (theme: 'dark' | 'light' | 'system') => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  };

  const handleSearch = () => {
    console.log('検索クエリ:', searchQuery);
  };

  // 仮のユーザー情報
  const userData = {
    name: 'サンプルユーザー', // ユーザー名
    avatar: '/default-avatar.png', // 仮のアバター画像
  };

  return (
    <>
      {/* ヘッダー */}
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between fixed w-full top-0 z-10 h-16">
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
            <div className="flex bg-gray-800 p-1 rounded-full">
              <button
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  selectedSection === 'videos' ? 'bg-blue-500 text-white' : 'text-gray-300'
                }`}
                onClick={() => setSelectedSection('videos')}
              >
                動画
              </button>
              <button
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  selectedSection === 'live' ? 'bg-blue-500 text-white' : 'text-gray-300'
                }`}
                onClick={() => setSelectedSection('live')}
              >
                配信
              </button>
              <button
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  selectedSection === 'posts' ? 'bg-blue-500 text-white' : 'text-gray-300'
                }`}
                onClick={() => setSelectedSection('posts')}
              >
                投稿
              </button>
            </div>
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

        {/* ヘッダー右側のボタン群 */}
        <div className="flex items-center space-x-4">
          {/* 投稿ボタン */}
          <button className="h-10 px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-gray-700 flex items-center">
            <FaPlus className="mr-2" /> 投稿
          </button>

          {/* 通知ボタン */}
          <button className="relative" onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
            <FaBell className="text-white w-6 h-6 hover:text-purple-400" />
            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg p-2">
                <p className="text-sm">通知はありません</p>
              </div>
            )}
          </button>

          {/* 設定ボタン */}
          <button className="relative" onClick={() => setIsSettingsOpen(true)}>
            <FaCog className="text-white w-6 h-6 hover:text-purple-400" />
          </button>
        </div>
      </header>

      {/* サイドバー */}
      <div
        className={`bg-gray-800 text-white fixed top-16 left-0 p-4 transition-all duration-300 ease-in-out transform ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
        style={{ height: 'calc(100vh - 96px)' }} // ヘッダー(64px)とフッター(32px)を引いた高さに設定
      >
        <ul className="space-y-4">
          {/* メニュー項目 */}
          <li className={`py-2 hover:bg-gray-700 rounded flex items-center ${!isSidebarOpen ? 'justify-center' : ''}`}>
            <FaHome className="mr-0" />
            {isSidebarOpen && <span className="ml-2">ホーム</span>}
          </li>
          <li className={`py-2 hover:bg-gray-700 rounded flex items-center ${!isSidebarOpen ? 'justify-center' : ''}`}>
            <FaFire className="mr-0" />
            {isSidebarOpen && <span className="ml-2">トレンド</span>}
          </li>
          <li className={`py-2 hover:bg-gray-700 rounded flex items-center ${!isSidebarOpen ? 'justify-center' : ''}`}>
            <FaUserFriends className="mr-0" />
            {isSidebarOpen && <span className="ml-2">フォロー中</span>}
          </li>
          <li className={`py-2 hover:bg-gray-700 rounded flex items-center ${!isSidebarOpen ? 'justify-center' : ''}`}>
            <FaClock className="mr-0" />
            {isSidebarOpen && <span className="ml-2">あとでねと広告</span>}
          </li>

          {/* マイリスト（展開可能） */}
          <li className={`py-2 hover:bg-gray-700 rounded flex items-center cursor-pointer ${!isSidebarOpen ? 'justify-center' : ''}`} onClick={() => setIsMyListOpen(!isMyListOpen)}>
            <FaCaretRight className={`transition-transform ${isMyListOpen ? 'rotate-90' : ''}`} />
            {isSidebarOpen && <span className="ml-2">マイリスト</span>}
          </li>

          {/* マイリストの項目（サイドバーが開いていて、マイリストが展開された場合のみ表示） */}
          {isSidebarOpen && isMyListOpen && (
            <ul className="ml-6 space-y-2">
              <li className="py-1 hover:bg-gray-700 rounded flex items-center">
                履歴リスト
              </li>
              <li className="py-1 hover:bg-gray-700 rounded flex items-center">
                作成したリスト
              </li>
              <li className="py-1 hover:bg-gray-700 rounded flex items-center">
                いいねリスト
              </li>
              <li className="py-1 hover:bg-gray-700 rounded flex items-center">
                あとで見るリスト
              </li>
            </ul>
          )}
        </ul>

        {/* サイドバーの下部にユーザーアイコン */}
        <div className="absolute bottom-4 left-0 w-full flex items-center justify-center">
          <div
            className={`relative flex items-center cursor-pointer ${!isSidebarOpen ? 'justify-center' : ''}`}
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <div className="relative w-10 h-10">
              <img
                src={userData.avatar} // 仮のアイコン画像
                alt="User Icon"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            {isSidebarOpen && <span className="ml-2">{userData.name}</span>}

            {/* プロフィールメニュー */}
            <div
              className={`absolute bottom-12 w-48 bg-gray-800 text-white rounded-lg shadow-lg p-2 transition-transform duration-300 ease-in-out ${
                isProfileMenuOpen ? 'translate-y-[-100%] opacity-100' : 'translate-y-0 opacity-0'
              }`}
              style={{ top: '-80px' }} // 上にさらに調整
            >
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                プロフィールへ
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                CreatorHub
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                ログアウト
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 設定メニュー */}
      {isSettingsOpen && (
        <div className="fixed top-16 right-0 w-64 h-full bg-gray-900 text-white z-50 shadow-lg p-4 transition-transform transform translate-x-0">
          <h2 className="text-xl font-bold mb-4">設定</h2>
          <div className="space-y-2">
            <div className="flex justify-between bg-gray-800 p-1 rounded-full text-xs"> {/* 文字サイズを小さくして横並びに調整 */}
              <button
                className={`px-4 py-2 rounded-full transition-all ${
                  theme === 'light' ? 'bg-blue-500 text-white' : 'text-gray-300'
                }`}
                onClick={() => handleThemeChange('light')}
              >
                ライト
              </button>
              <button
                className={`px-4 py-2 rounded-full transition-all ${
                  theme === 'system' ? 'bg-blue-500 text-white' : 'text-gray-300'
                }`}
                onClick={() => handleThemeChange('system')}
              >
                自動
              </button>
              <button
                className={`px-4 py-2 rounded-full transition-all ${
                  theme === 'dark' ? 'bg-blue-500 text-white' : 'text-gray-300'
                }`}
                onClick={() => handleThemeChange('dark')}
              >
                ダーク
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
          >
            閉じる
          </button>
        </div>
      )}

      {/* メインコンテンツ */}
      <main
        className={`flex-grow p-8 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        {selectedSection === 'videos' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <h1 className="text-2xl font-bold">動画セクション</h1>
            {/* 動画セクションのコンテンツ */}
          </div>
        )}
        {selectedSection === 'live' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <h1 className="text-2xl font-bold">配信セクション</h1>
            {/* 配信セクションのコンテンツ */}
          </div>
        )}
        {selectedSection === 'posts' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100">
            <h1 className="text-2xl font-bold">投稿セクション</h1>
            {/* 投稿セクションのコンテンツ */}
          </div>
        )}
      </main>
    </>
  );
};

export default Layout;
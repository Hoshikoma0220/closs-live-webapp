'use client';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 p-4 space-y-4">
      <nav className="space-y-2">
        <a href="/" className="block hover:text-purple-400">ホーム</a>
        <a href="/videos" className="block hover:text-purple-400">人気動画</a>
        <a href="/live" className="block hover:text-purple-400">ライブ配信</a>
        <a href="/mypage" className="block hover:text-purple-400">マイページ</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
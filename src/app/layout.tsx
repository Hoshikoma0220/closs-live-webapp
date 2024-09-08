'use client';

import { useState } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [selectedSection, setSelectedSection] = useState<'videos' | 'live' | 'posts'>('videos');

  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* ヘッダーに状態を渡す */}
        <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        {/* ページ固有のコンテンツ */}
        <main className="flex-grow container mx-auto">
          {children} {/* 関数として呼び出すのではなく、通常の要素として表示 */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
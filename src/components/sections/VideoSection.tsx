'use client';

import { useState } from 'react';
import VideoCard from '../VideoCard';

const VideoSection = () => {
  // 各セクションの動画データ
  const recentUsers = [
    { thumbnailUrl: 'https://example.com/thumb1.jpg', title: '新しいユーザーの動画1', userAvatar: 'https://example.com/user1.jpg', userName: 'ユーザー1' },
    { thumbnailUrl: 'https://example.com/thumb2.jpg', title: '新しいユーザーの動画2', userAvatar: 'https://example.com/user2.jpg', userName: 'ユーザー2' },
    // ... 他の新しいユーザーの動画
  ];

  const ageBasedRecommendations = [
    { thumbnailUrl: 'https://example.com/thumb3.jpg', title: '年齢層に合う動画1', userAvatar: 'https://example.com/user3.jpg', userName: 'ユーザー3' },
    { thumbnailUrl: 'https://example.com/thumb4.jpg', title: '年齢層に合う動画2', userAvatar: 'https://example.com/user4.jpg', userName: 'ユーザー4' },
    // ... 他の年齢層に合う動画
  ];

  const historyBasedRecommendations = [
    { thumbnailUrl: 'https://example.com/thumb5.jpg', title: '履歴からのおすすめ1', userAvatar: 'https://example.com/user5.jpg', userName: 'ユーザー5' },
    { thumbnailUrl: 'https://example.com/thumb6.jpg', title: '履歴からのおすすめ2', userAvatar: 'https://example.com/user6.jpg', userName: 'ユーザー6' },
    // ... 他の履歴ベースの動画
  ];

  // 各セクションで表示される動画の数を管理
  const [visibleRecentUsers, setVisibleRecentUsers] = useState(2);
  const [visibleAgeRecommendations, setVisibleAgeRecommendations] = useState(2);
  const [visibleHistoryRecommendations, setVisibleHistoryRecommendations] = useState(2);

  const loadMore = (setVisible: React.Dispatch<React.SetStateAction<number>>, currentVisible: number) => {
    setVisible(currentVisible + 2); // 2つずつ増やす
  };

  return (
    <div className="p-4">
      {/* 最近やってきたユーザー */}
      <h2 className="text-xl font-bold mb-4">最近やってきたユーザー</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentUsers.slice(0, visibleRecentUsers).map((video, index) => (
          <VideoCard
            key={index}
            thumbnailUrl={video.thumbnailUrl}
            title={video.title}
            userAvatar={video.userAvatar}
            userName={video.userName}
          />
        ))}
      </div>
      {visibleRecentUsers < recentUsers.length && (
        <button
          onClick={() => loadMore(setVisibleRecentUsers, visibleRecentUsers)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          さらに表示
        </button>
      )}

      {/* ユーザーの年齢層にあいそうな動画 */}
      <h2 className="text-xl font-bold my-6">年齢層にあいそうな動画</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ageBasedRecommendations.slice(0, visibleAgeRecommendations).map((video, index) => (
          <VideoCard
            key={index}
            thumbnailUrl={video.thumbnailUrl}
            title={video.title}
            userAvatar={video.userAvatar}
            userName={video.userName}
          />
        ))}
      </div>
      {visibleAgeRecommendations < ageBasedRecommendations.length && (
        <button
          onClick={() => loadMore(setVisibleAgeRecommendations, visibleAgeRecommendations)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          さらに表示
        </button>
      )}

      {/* 履歴からのおすすめ */}
      <h2 className="text-xl font-bold my-6">履歴からのおすすめ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {historyBasedRecommendations.slice(0, visibleHistoryRecommendations).map((video, index) => (
          <VideoCard
            key={index}
            thumbnailUrl={video.thumbnailUrl}
            title={video.title}
            userAvatar={video.userAvatar}
            userName={video.userName}
          />
        ))}
      </div>
      {visibleHistoryRecommendations < historyBasedRecommendations.length && (
        <button
          onClick={() => loadMore(setVisibleHistoryRecommendations, visibleHistoryRecommendations)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          さらに表示
        </button>
      )}
    </div>
  );
};

export default VideoSection;
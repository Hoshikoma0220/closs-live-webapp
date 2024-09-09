'use client';

interface VideoCardProps {
  thumbnailUrl: string;
  title: string;
  userAvatar: string;
  userName: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ thumbnailUrl, title, userAvatar, userName }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
      {/* サムネイル画像 */}
      <img src={thumbnailUrl} alt={title} className="w-full h-48 object-cover" />
      
      {/* タイトルとユーザー情報 */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        
        <div className="flex items-center space-x-2">
          {/* ユーザーアイコン */}
          <img src={userAvatar} alt={userName} className="w-8 h-8 rounded-full" />
          
          {/* ユーザー名 */}
          <p className="text-sm">{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
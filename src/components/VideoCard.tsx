interface VideoCardProps {
    title: string;
    description: string;
  }
  
  const VideoCard: React.FC<VideoCardProps> = ({ title, description }) => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="/sample-video-thumbnail.jpg" alt={title} className="w-full h-32 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    );
  };
  
  export default VideoCard;
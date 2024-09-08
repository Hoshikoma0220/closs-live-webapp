import VideoCard from './VideoCard';

const VideoGrid = () => {
  return (
    <div className="p-4 grid grid-cols-4 gap-4 bg-gray-100 dark:bg-gray-900">
      <VideoCard title="サンプル動画1" description="これはサンプルの動画です。" />
      <VideoCard title="サンプル動画2" description="これはサンプルの動画です。" />
      <VideoCard title="サンプル動画3" description="これはサンプルの動画です。" />
      <VideoCard title="サンプル動画4" description="これはサンプルの動画です。" />
    </div>
  );
};

export default VideoGrid;
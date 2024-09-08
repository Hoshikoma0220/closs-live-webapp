const VideoSection = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">動画タイトル 1</h3>
          <p>動画の説明がここに入ります。</p>
        </div>
        {/* 他の動画カードも追加 */}
      </div>
    );
  };
  
  export default VideoSection;
const LiveSection = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">ライブ配信 1</h3>
          <p>ライブ配信の説明がここに入ります。</p>
        </div>
        {/* 他のライブ配信カードも追加 */}
      </div>
    );
  };
  
  export default LiveSection;
const PostSection = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">投稿 1</h3>
          <p>投稿内容がここに入ります。</p>
        </div>
        {/* 他の投稿カードも追加 */}
      </div>
    );
  };
  
  export default PostSection;
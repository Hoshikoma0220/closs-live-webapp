'use client';

import VideoSection from '@/components/sections/VideoSection';
import LiveSection from '@/components/sections/LiveSection';
import PostSection from '@/components/sections/PostSection';

export default function HomePage({ selectedSection }: { selectedSection: 'videos' | 'live' | 'posts' }) {
  return (
    <div>
      {/* セクションの表示 */}
      <div className="mt-8">
        {selectedSection === 'videos' && <VideoSection />}
        {selectedSection === 'live' && <LiveSection />}
        {selectedSection === 'posts' && <PostSection />}
      </div>
    </div>
  );
}
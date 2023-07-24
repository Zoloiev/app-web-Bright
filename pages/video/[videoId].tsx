import { DefaultLayout } from '@/layouts';

export interface IndexProps {}

const VideoDetail: React.FC<IndexProps> = () => {
  return (
    <DefaultLayout sidebarVariant="open">
      <h1>Video detail</h1>
    </DefaultLayout>
  );
};

export default VideoDetail;

import { DefaultLayout } from '@/layouts';
import CustomDropZone from '@/components/CustomDropZone';

export interface IndexProps {}

const Upload: React.FC<IndexProps> = () => {
  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex flex-1 justify-between">
        <div className="w-0 flex-1 px-4 pb-4">
          <CustomDropZone />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Upload;
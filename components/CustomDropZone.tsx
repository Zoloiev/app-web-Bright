import React from 'react';
import { useDropzone } from 'react-dropzone';

function Dropzone() {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: {
      'video/x-msvideo': ['.avi'],
      'video/mp4': ['.mp4'],
      'video/mpeg': ['.mpeg'],
      'video/ogg': ['.ogv'],
      'video/3gpp': ['.3gp'],
      'video/3gpp2': ['.3g2'],
      'video/webm': ['.webm'],
      'video/mp2t': ['.ts']
    }
  });

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="border-[1.5px] border-dashed border-[#B8B5C6] rounded-[16px] py-[60px]">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center'>
          <img src='/src/placeholders/cloud.png' className='w-[128px] h-[128px]' alt="placeholder"/>
          <div className='text-[#3D3D3D] font-bold text-[20px]'>Drag n Drop video files</div>
          <div className='text-[#959595] font-normal text-[14px] mt-2'>Or select video files to upload</div>
          <button type="button" onClick={open} className='rounded-[32px] bg-[#C400C4] w-[150px] h-[40px] mt-6 text-[14px] text-white'>
            Upload Videos
          </button>
        </div>
      </div>
      <aside className='mt-4'>
        <ul className='text-center'>{files}</ul>
      </aside>
    </div>
  );
}

export default Dropzone;
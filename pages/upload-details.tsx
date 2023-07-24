import { DefaultLayout } from '@/layouts';
import * as Form from "@radix-ui/react-form";
import { CustomMultilineInput, CustomInput, CustomCheckbox } from "@/components/settings/CustomControls";
import { useState } from "react";

const UploadDetails = () => {

  const [videoTitle, setVideoTitle] = useState('')
  const [about, setAbout] = useState('')
  const [orientation, setOrientation] = useState('')
  const [privacy, setPrivacy] = useState('')
  const [monetize, setMonetize] = useState('')
  const [license, setLicense] = useState('')
  const [tags, setTags] = useState('')
  const [cast, setCast] = useState('')
  const [language, setLanguage] = useState('')
  const [fashions, setFashions] = useState(false)
  const [pink, setPink] = useState(false)
  const [inspirations, setInspirations] = useState(false)

  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex flex-1 justify-between">
        <div className="w-0 flex-1 px-4 pb-4">
          <div className='rounded-[16px] bg-[#F5F5F5] w-full p-4 block sm:flex items-center'>
            <img
              src="/src/placeholders/placeholder1.png"
              className='rounded-[8px] sm:w-[140px] sm:h-[90px] w-full h-auto'
              alt="placeholder"
            />
            <div className='w-full flex-1 sm:ml-4 pt-2 sm:w-0'>
              <div className='flex justify-between'>
                <div className='text-[14px] font-semibold text-[#263238] mb-[4px]'>How to use blush on 2023!</div>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                  <path d="M10.6163 9.50031L14.0204 6.10406C14.1695 5.95499 14.2533 5.7528 14.2533 5.54198C14.2533 5.33115 14.1695 5.12897 14.0204 4.97989C13.8714 4.83082 13.6692 4.74707 13.4583 4.74707C13.2475 4.74707 13.0453 4.83082 12.8963 4.97989L9.50001 8.38406L6.10376 4.97989C5.95469 4.83082 5.7525 4.74707 5.54168 4.74707C5.33086 4.74707 5.12867 4.83082 4.9796 4.97989C4.83052 5.12897 4.74677 5.33115 4.74677 5.54198C4.74677 5.7528 4.83052 5.95499 4.9796 6.10406L8.38376 9.50031L4.9796 12.8966C4.90539 12.9702 4.8465 13.0577 4.80631 13.1542C4.76612 13.2507 4.74542 13.3541 4.74542 13.4586C4.74542 13.5632 4.76612 13.6666 4.80631 13.7631C4.8465 13.8596 4.90539 13.9471 4.9796 14.0207C5.05319 14.0949 5.14075 14.1538 5.23722 14.194C5.33369 14.2342 5.43717 14.2549 5.54168 14.2549C5.64619 14.2549 5.74966 14.2342 5.84614 14.194C5.94261 14.1538 6.03017 14.0949 6.10376 14.0207L9.50001 10.6166L12.8963 14.0207C12.9699 14.0949 13.0574 14.1538 13.1539 14.194C13.2504 14.2342 13.3538 14.2549 13.4583 14.2549C13.5629 14.2549 13.6663 14.2342 13.7628 14.194C13.8593 14.1538 13.9468 14.0949 14.0204 14.0207C14.0946 13.9471 14.1535 13.8596 14.1937 13.7631C14.2339 13.6666 14.2546 13.5632 14.2546 13.4586C14.2546 13.3541 14.2339 13.2507 14.1937 13.1542C14.1535 13.0577 14.0946 12.9702 14.0204 12.8966L10.6163 9.50031Z" fill="#C400C4" />
                </svg>
              </div>
              <div className='text-[13px] font-medium text-[#959595] mb-3'>102.6MB &nbsp;&nbsp; 02:13 Minutes remaining</div>
              <div className="h-[6px] w-full bg-[#F8E0F5] mb-2">
                <div className="h-[6px] bg-[#C400C4] w-[45%]"></div>
              </div>
              <div className='text-[13px] font-medium text-[#959595] mb-3'>Your video is still uploading, please keep this page open until it’s done.</div>
            </div>
          </div>
          <div className='mt-[26px]'>
            <Form.Root className="flex w-full flex-col gap-6">
              <CustomInput
                label='Video Title'
                mandatory={true}
                fieldName={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              />
            </Form.Root>
            <Form.Root className="flex w-full flex-col gap-6 mt-[26px]">
              <CustomMultilineInput
                label='About'
                mandatory={true}
                fieldName={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </Form.Root>
            <div className='mt-[20px]'>
              <div className='grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <Form.Root className="flex w-full flex-col gap-6">
                  <CustomInput
                    label='Orientation'
                    fieldName={orientation}
                    onChange={(e) => setOrientation(e.target.value)}
                  />
                </Form.Root>
                <Form.Root className="flex w-full flex-col gap-6">
                  <CustomInput
                    label='Privacy Settings'
                    fieldName={privacy}
                    onChange={(e) => setPrivacy(e.target.value)}
                  />
                </Form.Root>
                <Form.Root className="flex w-full flex-col gap-6">
                  <CustomInput
                    label='Monetize'
                    fieldName={monetize}
                    onChange={(e) => setMonetize(e.target.value)}
                  />
                </Form.Root>
                <Form.Root className="flex w-full flex-col gap-6">
                  <CustomInput
                    label='Licensed'
                    fieldName={license}
                    onChange={(e) => setLicense(e.target.value)}
                  />
                </Form.Root>
              </div>
              <div className='grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-[30px]'>
                <Form.Root className="flex w-full flex-col gap-6 xl:col-span-2">
                  <CustomInput
                    label='Tags (13 tags remaining)'
                    fieldName={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </Form.Root>
                <Form.Root className="flex w-full flex-col gap-6 xl:col-span-2">
                  <CustomInput
                    label='Cast (optional)'
                    fieldName={cast}
                    onChange={(e) => setCast(e.target.value)}
                  />
                </Form.Root>
                <Form.Root className="flex w-full flex-col gap-6">
                  <CustomInput
                    label='Language in Video'
                    fieldName={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                </Form.Root>
              </div>
              <div className='mt-[30px]'>
                <div className='text-[13px] font-semibold text-[#B8B5C6]'>Categories</div>
                <div className='mt-[28px] flex items-center flex-wrap'>
                  <div className='mr-4 my-[4px]'>
                    <CustomCheckbox
                      label="Fashions"
                      checked={fashions}
                      onChange={(checked) => {
                        setFashions(checked);
                      }}
                    />
                  </div>
                  <div className='mr-4 my-[4px]'>
                    <CustomCheckbox
                      label="Pink"
                      checked={pink}
                      onChange={(checked) => {
                        setPink(checked);
                      }}
                    />
                  </div>
                  <div className='mr-4 my-[4px]'>
                    <CustomCheckbox
                      label="Inspirations"
                      checked={inspirations}
                      onChange={(checked) => {
                        setInspirations(checked);
                      }}
                    />
                  </div>
                  <div className='flex items-center cursor-pointer my-[4px]'>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
                      <path d="M11.875 6.875H8.125V3.125C8.125 2.95924 8.05915 2.80027 7.94194 2.68306C7.82473 2.56585 7.66576 2.5 7.5 2.5C7.33424 2.5 7.17527 2.56585 7.05806 2.68306C6.94085 2.80027 6.875 2.95924 6.875 3.125V6.875H3.125C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5C2.5 7.66576 2.56585 7.82473 2.68306 7.94194C2.80027 8.05915 2.95924 8.125 3.125 8.125H6.875V11.875C6.875 12.0408 6.94085 12.1997 7.05806 12.3169C7.17527 12.4342 7.33424 12.5 7.5 12.5C7.66576 12.5 7.82473 12.4342 7.94194 12.3169C8.05915 12.1997 8.125 12.0408 8.125 11.875V8.125H11.875C12.0408 8.125 12.1997 8.05915 12.3169 7.94194C12.4342 7.82473 12.5 7.66576 12.5 7.5C12.5 7.33424 12.4342 7.17527 12.3169 7.05806C12.1997 6.94085 12.0408 6.875 11.875 6.875Z" fill="#C400C4" />
                    </svg>
                    <div className='text-[#C400C4] font-medium text-[13px]'>Add new categories</div>
                  </div>
                </div>
              </div>
              <div className='mt-8'>
                <span className='text-[#959595] font-medium text-[13px]'>
                  By submitting your videos to BrightsUp, you acknowledge that you agree to
                </span>
                <span className='text-[#C400C4] font-medium text-[13px] cursor-pointer'>&nbsp;Terms of Service</span>
                <span className='text-[#959595] font-medium text-[13px]'>&nbsp;and</span>
                <span className='text-[#C400C4] font-medium text-[13px] cursor-pointer'>&nbsp;Community Guidelines</span>
              </div>
              <div className='flex items-center mt-8'>
                <button className="h-10 rounded-[32px] bg-[#B8B5C6] text-sm text-white mr-2 flex items-center justify-center hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-[13px] px-6 py-2">
                  Discard
                </button>
                <button className='h-10 rounded-[32px] flex items-center justify-center text-white  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 px-6 py-2 bg-bu-purple text-[13px]'>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default UploadDetails;
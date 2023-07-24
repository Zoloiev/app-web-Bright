import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { CustomMultilineInput } from "../settings/CustomControls";
import { profileDiscussionItemList } from './profileDiscussionItemList';
import ProfileDiscussionItem from "./ProfileDiscussionItem";

const ProfileDiscussion = () => {

  const [subscription, setSubscription] = useState("");

  return (
    <div className='mt-[20px]'>
      <div className="flex my-[8px]">
        <img
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          className="w-[50px] h-[50px] rounded-full mt-[10px]"
          alt="avatar"
        />
        <div className="px-4 flex-1 w-0">
          <Form.Root className="flex w-full flex-col gap-6">
            <CustomMultilineInput
              fieldName={subscription}
              onChange={(e) => setSubscription(e.target.value)}
            />
          </Form.Root>
          <div className="flex items-end md:items-center my-1 md:my-6 md:flex-row flex-col-reverse justify-end md:justify-center">
            <button className='h-10 w-[130px] rounded-[32px] flex items-center justify-center text-white  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 px-2 bg-bu-purple mt-1 md:md-0'>
              Subscribe
            </button>
            <div className="mx-4 text-[13px] font-normal text-[#959595]">200 words maximum</div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="my-4 font-medium text-[16px]">18 Comments</div>
        {
          profileDiscussionItemList.map((itm, index) => {
            return (
              <ProfileDiscussionItem {...itm} key={"itm" + index}></ProfileDiscussionItem>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProfileDiscussion;
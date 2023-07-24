import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { CustomInput } from "./CustomControls";
import Link from "next/link";

export default function AdvancedSettings() {
  const [userId, setUserId] = useState("");
  const [channelId, setChannelId] = useState("");

  return (
    <div className="max-w-4xl overflow-auto px-3 pb-3 md:px-6 md:pb-6">
      <div>
        <span className="text-sm font-semibold text-bu-darkGrey2">
          Set up BrightsUp exactly how you want it
        </span>
      </div>
      <Form.Root className="mt-4 flex w-full flex-col gap-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <CustomInput
            label="User ID"
            mandatory
            fieldName={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <CustomInput
            label="Channel ID"
            mandatory
            fieldName={channelId}
            onChange={(e) => setChannelId(e.target.value)}
          />
        </div>
      </Form.Root>
      <div className="mt-11 flex flex-col gap-2 md:flex-row">
        <div className="md:w-1/4">
          <span className="text-sm font-semibold text-bu-darkGrey2">
            Move channel
          </span>
        </div>
        <div className="text-[13px]">
          <Link href="/settings" className="text-bu-purple">
            Move channel to a brand account
          </Link>
          <div>
            <span className="text-[13px] text-bu-darkgrey">
              You can move your channel to a brand account
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2 md:flex-row">
        <div className="md:w-1/4">
          <span className="text-sm font-semibold text-bu-darkGrey2">
            Delete channel
          </span>
        </div>
        <div className="text-[13px]">
          <Link href="/settings" className="text-bu-purple">
            Delete channel
          </Link>
          <div>
            <span className="text-[13px] text-bu-darkgrey">
              Deleting your BrightsUp channel
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

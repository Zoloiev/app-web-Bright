import { useState } from "react";
import { CustomRadio, CustomSwitch } from "./CustomControls";

export default function DownloadsSettings() {
  const [downloadQuality, setDownloadQuality] = useState("ask");
  const [smartDownloads, setSmartDownloads] = useState(false);

  return (
    <div className="max-w-4xl overflow-auto px-3 pb-3 md:px-6 md:pb-6">
      <div>
        <span className="text-sm font-semibold text-bu-darkGrey2">
          Control your downloads settings
        </span>
      </div>
      <div className="mt-3">
        <span className="text-sm text-bu-darkgrey">
          Downloads settings apply to this browser only
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-7">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="md:w-1/4">
            <span className="text-sm font-semibold text-bu-darkGrey2">
              Download quality
            </span>
          </div>
          <div>
            <CustomRadio
              radioItems={[
                {
                  id: 1,
                  label: "Ask each time",
                  value: "ask",
                },
                {
                  id: 2,
                  label: "Medium (480p)",
                  value: "medium",
                },
                {
                  id: 3,
                  label: "Low (144p)",
                  value: "low",
                },
              ]}
              value={downloadQuality}
              onChange={(value) => setDownloadQuality(value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="md:w-1/4">
            <span className="text-sm font-semibold text-bu-darkGrey2">
              Smart downloads
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <CustomSwitch
              checked={smartDownloads}
              label="Subscriptions"
              description="Notify me about activity from the channels I'm subscribed to"
              onChange={(checked) => {
                setSmartDownloads(checked);
              }}
            />
          </div>
        </div>
        <div>
          <div className="">
            <span className="text-sm font-semibold text-bu-darkGrey2">
              Delete all downloads
            </span>
          </div>
          <div className="">
            <span className="text-[13px] text-bu-darkgrey">
              Deleting downloads will free space on this device
            </span>
          </div>
          <div className="mt-4">
            <button className="h-10 rounded-[32px] border border-bu-purple px-6 text-sm font-semibold text-bu-purple ring-bu-purple hover:ring-1">
              Delete all downloads
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

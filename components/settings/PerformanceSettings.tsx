import { useState } from "react";
import { CustomCheckbox, CustomRadio, CustomSwitch } from "./CustomControls";

export default function PerformanceSettings() {
  const [showInfoCards, setShowInfoCards] = useState(false);
  const [alwaysShowCaptions, setAlwaysShowCaptions] = useState(false);
  const [includeAutoCaptions, setIncludeAutoCaptions] = useState(false);
  const [av1Setting, setAv1Setting] = useState("auto");
  const [inlinePlayback, setInlinePlayback] = useState(false);

  return (
    <div className="max-w-4xl overflow-auto px-3 pb-3 md:px-6 md:pb-6">
      <div>
        <span className="text-sm font-semibold text-bu-darkGrey2">
          Control your video viewing experience
        </span>
      </div>
      <div className="mt-3">
        <span className="text-sm text-bu-darkgrey">
          Playback settings apply to this browser only
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-7">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="md:w-1/4">
            <span className="text-sm font-semibold text-bu-darkGrey2">
              Info cards
            </span>
          </div>
          <div>
            <CustomCheckbox
              label="Show in-video info cards"
              checked={showInfoCards}
              onChange={(checked) => {
                setShowInfoCards(checked);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="md:w-1/4">
            <span className="text-sm font-semibold text-bu-darkGrey2">
              Subtitles and Closed Captions
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <CustomCheckbox
              label="Always show captions"
              checked={alwaysShowCaptions}
              onChange={(checked) => {
                setAlwaysShowCaptions(checked);
              }}
            />
            <CustomCheckbox
              label="Include auto-generated captions (when available)"
              checked={includeAutoCaptions}
              onChange={(checked) => {
                setIncludeAutoCaptions(checked);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="md:w-1/4">
            <span className="text-sm font-semibold text-bu-darkGrey2">
              AV1 Settings
            </span>
          </div>
          <div>
            <CustomRadio
              radioItems={[
                {
                  id: 1,
                  label: "Auto (Recommended)",
                  value: "auto",
                },
                {
                  id: 2,
                  label: "Prefer AV1 for SD",
                  value: "Av1ForSd",
                },
                {
                  id: 3,
                  label: "Always prefer AV1",
                  value: "alwaysAV1",
                },
              ]}
              value={av1Setting}
              onChange={(value) => setAv1Setting(value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="md:w-1/4">
            <span className="text-sm font-semibold text-bu-darkGrey2">
              Browsing
            </span>
          </div>
          <div>
            <CustomSwitch
              checked={inlinePlayback}
              label="Subscriptions"
              description="Notify me about activity from the channels I'm subscribed to"
              onChange={(checked) => {
                setInlinePlayback(checked);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

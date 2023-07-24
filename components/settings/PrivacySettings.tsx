import { useState } from "react";
import { CustomSwitch } from "./CustomControls";
import Link from "next/link";

export default function PrivacySettings() {
  const [keepPlaylistPrivate, setKeepPlaylistPrivate] = useState(false);
  const [keepSubscriptionPrivate, setKeepSubscriptionPrivate] = useState(false);

  return (
    <div className="max-w-4xl overflow-auto px-3 pb-3 md:px-6 md:pb-6">
      <div>
        <span className="text-sm font-semibold text-bu-darkGrey2">
          Manage what you share on BrightsUp
        </span>
      </div>
      <div className="mt-3">
        <span className="text-sm text-bu-darkgrey">
          Choose who can see your saved playlists and subscriptions
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-7">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="md:w-1/4 md:min-w-[25%]">
            <span className="text-sm font-semibold text-bu-darkGrey2">
              Playlists and subscriptions
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <CustomSwitch
              checked={keepPlaylistPrivate}
              label="Keep all my saved playlists private"
              description=""
              onChange={(checked) => {
                setKeepPlaylistPrivate(checked);
              }}
            >
              <span className="mr-1 text-[13px] text-bu-darkgrey">
                Playlists created by others won’t appear on your channel.
                Playlists created by you have separate, individual privacy
                settings.
              </span>
              <Link href="/settings" className="text-[13px] text-bu-purple">
                Learn more
              </Link>
            </CustomSwitch>
            <CustomSwitch
              checked={keepSubscriptionPrivate}
              label="Keep all my subscriptions private"
              description="about could make your subscriptions visible or manage your subscriptions here."
              onChange={(checked) => {
                setKeepSubscriptionPrivate(checked);
              }}
            >
              <span className="mr-1 text-[13px] text-bu-darkgrey">
                Your subscriptions won&apos;t be visible to others, unless you
                use features that make them public.
              </span>
              <Link
                href="/settings"
                className="mr-1 text-[13px] text-bu-purple"
              >
                Learn more
              </Link>
              <span className="mr-1 text-[13px] text-bu-darkgrey">
                about could make your subscriptions visible or manage your
                subscriptions
              </span>
              <Link href="/settings" className="text-[13px] text-bu-purple">
                here.
              </Link>
            </CustomSwitch>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="md:w-1/4 md:min-w-[25%]">
            <span className="text-sm font-semibold text-bu-darkGrey2">
              Ads on BrightsUp
            </span>
          </div>
          <div className="text-[13px]">
            <span className="mr-2 text-bu-darkgrey">
              You may see ads on BrightsUp based on general factors, like the
              topic of a video. The ads you see may also depend on your choices
              on
            </span>
            <Link href="/settings" className="text-bu-purple">
              My Ad Center.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

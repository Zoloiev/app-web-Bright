import { useState } from "react";
import { CustomSwitch } from "./CustomControls";
import Link from "next/link";

export default function NotificationSettings() {
  const [browserNotifications, setBrowserNotifications] = useState(false);
  const [subscriptions, setSubscriptions] = useState(false);
  const [recommendedVideos, setRecommendedVideos] = useState(false);
  const [activity, setActivity] = useState(false);
  const [repliesToComments, setRepliesToComments] = useState(false);
  const [mentions, setMentions] = useState(false);
  const [sharedContent, setSharedContent] = useState(false);
  const [sendMeEmails, setSendMeEmails] = useState(false);

  return (
    <div className="max-w-4xl overflow-auto px-3 pb-3 md:px-6 md:pb-6">
      <div>
        <span className="text-sm font-semibold text-bu-darkGrey2">
          Choose when and how to be notified
        </span>
      </div>
      <div className="mt-3">
        <span className="text-sm text-bu-darkgrey">
          Select push and email notifications you&apos;d like to receive
        </span>
      </div>
      <div className="my- 4">
        <span className="text-sm font-semibold text-bu-darkGrey2">Desktop</span>
      </div>
      <CustomSwitch
        checked={browserNotifications}
        label="Get notifications in this browser"
        description="Receive notifications on your computer, even if you're not watching YouTube"
        onChange={(checked) => {
          setBrowserNotifications(checked);
        }}
      />
      <div className="my-4">
        <span className="text-sm font-semibold text-bu-darkGrey2">
          Your preferences
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <CustomSwitch
          checked={subscriptions}
          label="Subscriptions"
          description=""
          onChange={(checked) => {
            setSubscriptions(checked);
          }}
        >
          <span className="mr-1 text-[13px] text-bu-darkgrey">
            Notify me about activity from the
          </span>
          <Link href="/settings" className="text-[13px] text-bu-purple">
            channels I&apos;m subscribed to
          </Link>
        </CustomSwitch>
        <CustomSwitch
          checked={recommendedVideos}
          label="Recommended videos"
          description="Notify me of videos I might like based on what I watch"
          onChange={(checked) => {
            setRecommendedVideos(checked);
          }}
        />
        <CustomSwitch
          checked={activity}
          label="Activity on my channel"
          description="Notify me about comments and other activity on my channel or videos"
          onChange={(checked) => {
            setActivity(checked);
          }}
        />
        <CustomSwitch
          checked={repliesToComments}
          label="Replies to my comments"
          description="Notify me about replies to my comments"
          onChange={(checked) => {
            setRepliesToComments(checked);
          }}
        />
        <CustomSwitch
          checked={mentions}
          label="Mentions"
          description="Notify me when others mention my channel"
          onChange={(checked) => {
            setMentions(checked);
          }}
        />
        <CustomSwitch
          checked={sharedContent}
          label="Shared content"
          description="Notify me when others share my content on their channels"
          onChange={(checked) => {
            setSharedContent(checked);
          }}
        />
      </div>
      <div className="my-4">
        <span className="text-sm font-semibold text-bu-darkGrey2">
          Email notifications
        </span>
      </div>
      <CustomSwitch
        checked={sendMeEmails}
        label="Send me emails about my BrightsUp activity and updates I requested"
        description="If this setting is turned off, BrightsUp may still send you messages regarding your account, required service announcements, legal notifications,
        and privacy matters"
        onChange={(checked) => {
          setSendMeEmails(checked);
        }}
      />
    </div>
  );
}

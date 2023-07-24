import useSWR from "swr";
import { API_PROFILE_CHANNEL, API_PROFILE_VIDEO } from "../api-endpoint";
import { ProfileChannel, ProfileVideo } from "@/types/profile";

export function useProfileVideo() {
  const { data } = useSWR<ProfileVideo>(API_PROFILE_VIDEO);
  return { data: data };
};

export function useProfileChannel() {
  const { data } = useSWR<ProfileChannel>(API_PROFILE_CHANNEL);
  return { data: data };
};

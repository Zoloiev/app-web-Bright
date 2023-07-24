import * as Form from "@radix-ui/react-form";
import Image from "next/image";
import { useState } from "react";
import { CustomInput, CustomMultilineInput } from "./CustomControls";

export default function AccountSettings() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-4xl overflow-auto px-3 pb-3 md:px-6 md:pb-6">
      <div>
        <span className="text-sm font-semibold text-bu-darkGrey2">
          Your BrightsUp channel
        </span>
      </div>
      <div className="mt-3">
        <span className="text-sm text-bu-darkgrey">
          This is your public presence on BrightsUp. You need a channel to
          upload your own videos, comment on videos, or create playlists.
        </span>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/src/placeholders/avatar22.png"
            width={38}
            height={38}
            alt="avatar"
          />
          <span className="font-medium text-bu-secondary">Jessica Adeline</span>
        </div>
        <div>
          <button className="font-medium text-bu-purple">
            + Create new channel
          </button>
        </div>
      </div>
      <Form.Root className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <CustomInput
            label="First Name"
            mandatory
            fieldName={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <CustomInput
            label="Last Name"
            mandatory
            fieldName={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <CustomInput
            label="Phone Number"
            mandatory
            fieldName={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <CustomInput
            label="Email Address"
            mandatory
            fieldName={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <CustomInput
            label="Country"
            fieldName={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <CustomInput
            label="City"
            fieldName={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <CustomInput
            label="Zip Code"
            fieldName={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <CustomInput
            label="State"
            fieldName={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <CustomMultilineInput
            label="Address"
            fieldName={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={(e) => e.preventDefault()}
            className="h-10 rounded-[32px] bg-bu-lightGrey px-4 text-center text-sm font-semibold text-white hover:bg-bu-darkgrey"
          >
            Cancel
          </button>
          <Form.Submit asChild>
            <button
              onClick={onSubmit}
              className="h-10 rounded-[32px] bg-bu-purple px-4 text-center text-sm font-semibold text-white hover:opacity-70"
            >
              Save
            </button>
          </Form.Submit>
        </div>
      </Form.Root>
    </div>
  );
}

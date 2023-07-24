import * as Form from "@radix-ui/react-form";
import * as Switch from "@radix-ui/react-switch";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { CheckIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  mandatory?: boolean;
  fieldName: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface SwitchProps {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  outerClass?: string;
}

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

interface RadioItem {
  label: string;
  id: number;
  value: string;
}

interface RadioProps {
  radioItems: RadioItem[];
  value: string;
  onChange: (value: string) => void;
}

export const CustomMultilineInput: React.FC<InputProps> = ({
  mandatory,
  fieldName,
  onChange,
  label,
}) => {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <Form.Field name="email" className="flex flex-col gap-2.5">
        <Form.Label className="text-[13px] font-semibold text-bu-lightGrey">
          {label}
          {mandatory && <span className="ml-1 text-bu-red">*</span>}
        </Form.Label>
        <Form.Control asChild>
          <textarea
            value={fieldName}
            onChange={onChange}
            className={clsx(
              "rounded-[13px] border border-solid border-bu-borderColor py-3 pl-5 text-sm text-bu-darkGrey2 outline-none",
              "focus:border-bu-purple active:border-bu-purple"
            )}
          />
        </Form.Control>
      </Form.Field>
    </div>
  );
};

export const CustomInput: React.FC<InputProps> = ({
  label,
  mandatory,
  fieldName,
  onChange,
}) => {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <Form.Field name={fieldName} className="flex flex-col gap-2.5">
        <Form.Label className="text-[13px] font-semibold text-bu-lightGrey">
          {label}
          {mandatory && <span className="ml-1 text-bu-red">*</span>}
        </Form.Label>
        <Form.Control asChild>
          <input
            type="text"
            value={fieldName}
            onChange={onChange}
            className={clsx(
              "rounded-[32px] border border-solid border-bu-borderColor py-3 pl-5 text-sm text-bu-darkGrey2 outline-none",
              "focus:border-bu-purple active:border-bu-purple"
            )}
          />
        </Form.Control>
      </Form.Field>
    </div>
  );
};

export const CustomSwitch: React.FC<SwitchProps> = ({
  label,
  description,
  checked,
  onChange,
  children,
  className,
  outerClass
}) => {
  return (
    <div className={"flex items-start gap-4" + " " + outerClass}>
      <div className={"flex items-center pt-2" + " " + className}>
        <Switch.Root
          checked={checked}
          onCheckedChange={onChange}
          className="relative h-[16px] w-[32px] cursor-pointer rounded-full bg-bu-lightGrey/20 outline-none data-[state=checked]:bg-bu-purple/20"
        >
          <Switch.Thumb className="absolute -left-0.5 -top-0.5 h-[20px] w-[20px] rounded-full bg-bu-lightGrey transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[16px] data-[state=checked]:bg-bu-purple" />
        </Switch.Root>
      </div>
      <div>
        <div>
          <span className="text-[13px] font-semibold text-bu-darkGrey2">
            {label}
          </span>
        </div>
        <div>
          {children ? (
            children
          ) : (
            <span className="text-[13px] text-bu-darkgrey">{description}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export const CustomCheckbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox.Root
        className="flex h-[25px] min-h-[25px] w-[25px] min-w-[25px] appearance-none items-center justify-center rounded-[4px] border border-bu-borderColor bg-white outline-none hover:border-bu-purple data-[state=checked]:bg-bu-purple"
        checked={checked}
        onCheckedChange={onChange}
        id={label}
      >
        <Checkbox.Indicator className="text-white">
          <CheckIcon height={20} width={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        className="text-[13px] leading-none text-bu-darkgrey"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};

export const CustomRadio: React.FC<RadioProps> = ({
  radioItems,
  value,
  onChange,
}) => {
  return (
    <RadioGroup.Root
      className="flex flex-col gap-2.5"
      value={value}
      onValueChange={onChange}
    >
      {radioItems.map((item) => (
        <div key={item.id} className="flex items-center">
          <RadioGroup.Item
            className="h-[25px] min-h-[25px] w-[25px] min-w-[25px] cursor-pointer rounded-full border border-bu-borderColor bg-white outline-none hover:border-bu-purple data-[state=checked]:border-bu-purple"
            value={item.value}
            id={`id${item.id}`}
          >
            <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-[50%] after:bg-bu-purple after:content-['']" />
          </RadioGroup.Item>
          <label
            className="pl-[13px] text-[13px] leading-none text-bu-darkgrey"
            htmlFor={`id${item.id}`}
          >
            {item.label}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  );
};

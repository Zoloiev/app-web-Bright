import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as RadixLabel from "@radix-ui/react-label";
import clsx from "clsx";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import { useSnackbar } from 'notistack';
// hooks
import useAuth from "../hooks/useAuth";

interface SignInProps {}

const SignInPage: React.FC<SignInProps> = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    
    setIsLoading(true);
    try {
      await login({
        userName,
        password,
      });
      setIsLoading(false);
      enqueueSnackbar('Login Success!', { variant: 'success' });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      enqueueSnackbar('Login Failed!', { variant: 'error' });
    }
  };

  return (
    <AuthLayout title="Sign In">
      <Form.Root className="flex w-full flex-col p-3">
        <div className="flex flex-col gap-6">
          <Form.Field name="mobile" className="flex flex-col gap-2.5">
            <Form.Label className="text-xs font-semibold text-bu-lightGrey">
              UserName or Email
            </Form.Label>
            <Form.Control asChild>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className={clsx(
                  "rounded-[32px] border border-solid border-bu-borderColor p-3 text-sm text-bu-inputColor outline-none",
                  "focus:border-bu-darkgrey active:border-bu-darkgrey"
                )}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="password" className="flex flex-col gap-2.5">
            <Form.Label className="text-xs font-semibold text-bu-lightGrey">
              Password
            </Form.Label>
            <Form.Control asChild>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={clsx(
                  "rounded-[32px] border border-solid border-bu-borderColor p-3 text-sm text-bu-inputColor outline-none",
                  "focus:border-bu-darkgrey active:border-bu-darkgrey"
                )}
              />
            </Form.Control>
          </Form.Field>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2.5">
            <Checkbox.Root
              id="c1"
              className="flex h-5 w-5 items-center justify-center rounded border border-solid border-bu-borderColor focus:outline-none"
            >
              <Checkbox.Indicator className="">
                <CheckIcon className="h-4 w-4 self-center text-bu-purple" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <RadixLabel.Label
              htmlFor="c1"
              className="select-none text-xs font-semibold leading-5 text-bu-lightGrey"
            >
              Remember me
            </RadixLabel.Label>
          </div>
          <div>
            <Link
              href="/forgotpassword"
              className="text-xs font-semibold text-bu-purple"
            >
              Forgot password
            </Link>
          </div>
        </div>

        <Form.Submit asChild>
          <button
            onClick={onSubmit}
            disabled={isLoading}
            style={{ opacity: isLoading ? .65 : 1 }}
            className="mt-[85px] h-12 rounded-[32px] bg-bu-purple text-center text-sm font-semibold text-white "
          >
            {isLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Loading...</span>
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </Form.Submit>
        <div className="mt-9 text-center">
          <span className="mr-1 text-xs text-bu-darkgrey">
            Don&apos;t have an account?
          </span>
          <Link href="/signup" className="text-xs font-semibold text-bu-purple">
            Sign Up
          </Link>
        </div>
      </Form.Root>
    </AuthLayout>
  );
};

export default SignInPage;

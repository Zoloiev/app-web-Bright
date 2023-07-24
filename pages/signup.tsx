import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import clsx from "clsx";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import axios from "axios";

interface SignUpProps {}

const SignUpPage: React.FC<SignUpProps> = () => {
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    await axios
      .post(`${process.env.API_URL}/api/User/register`, {
        firstName,
        lastName,
        userName,
        email,
        password,
      })
      .then((response) => {
        setIsLoading(false);
        router.push(`verify-email?email=${email}`);
        enqueueSnackbar("Register Success! Please very your email address.", {
          variant: "success",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        enqueueSnackbar("Register Failed!", { variant: "error" });
      });
  };

  return (
    <AuthLayout title="Sign up and enjoy watch more videos">
      <Form.Root className="flex w-full flex-col p-3">
        <div className="flex flex-col gap-6">
          <Form.Field name="mobile" className="flex flex-col gap-2.5">
            <Form.Label className="text-xs font-semibold text-bu-lightGrey">
              First Name
            </Form.Label>
            <Form.Control asChild>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={clsx(
                  "rounded-[32px] border border-solid border-bu-borderColor p-3 text-sm text-bu-inputColor outline-none",
                  "focus:border-bu-darkgrey active:border-bu-darkgrey"
                )}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="mobile" className="flex flex-col gap-2.5">
            <Form.Label className="text-xs font-semibold text-bu-lightGrey">
              Last Name
            </Form.Label>
            <Form.Control asChild>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={clsx(
                  "rounded-[32px] border border-solid border-bu-borderColor p-3 text-sm text-bu-inputColor outline-none",
                  "focus:border-bu-darkgrey active:border-bu-darkgrey"
                )}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="mobile" className="flex flex-col gap-2.5">
            <Form.Label className="text-xs font-semibold text-bu-lightGrey">
              UserName
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
          <Form.Field name="email" className="flex flex-col gap-2.5">
            <Form.Label className="text-xs font-semibold text-bu-lightGrey">
              Your Email
            </Form.Label>
            <Form.Control asChild>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
          <Form.Field name="confirmpassword" className="flex flex-col gap-2.5">
            <Form.Label className="text-xs font-semibold text-bu-lightGrey">
              Confirm Password
            </Form.Label>
            <Form.Control asChild>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={clsx(
                  "rounded-[32px] border border-solid border-bu-borderColor p-3 text-sm text-bu-inputColor outline-none",
                  "focus:border-bu-darkgrey active:border-bu-darkgrey"
                )}
              />
            </Form.Control>
          </Form.Field>
        </div>

        <Form.Submit asChild>
          <button
            onClick={onSubmit}
            disabled={isLoading}
            className="mt-[85px] h-12 rounded-[32px] bg-bu-purple text-center text-sm font-semibold text-white"
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
              "Sign Up"
            )}
          </button>
        </Form.Submit>
        <div className="mt-9 text-center">
          <span className="mr-1 text-xs text-bu-darkgrey">
            Do you have an account?
          </span>
          <Link href="/signin" className="text-xs font-semibold text-bu-purple">
            Sign In
          </Link>
        </div>
      </Form.Root>
    </AuthLayout>
  );
};

export default SignUpPage;

import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import clsx from "clsx";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import { useSnackbar } from "notistack";
import axios from "axios";

interface ForgotPasswordProps {}

const ForgotPasswordPage: React.FC<ForgotPasswordProps> = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    await axios
      .post(`${process.env.API_URL}/api/User/forget-password`, {
        email,
      })
      .then((response) => {
        setIsLoading(false);
        setEmail("");
        enqueueSnackbar("Successfully sent password reset request!", {
          variant: "success",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        enqueueSnackbar(error.message, { variant: "error" });
      });
  };

  return (
    <AuthLayout title="Recover your password">
      <Form.Root className="flex w-full flex-col p-3">
        <div className="flex flex-col gap-6">
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
              "Reset Password"
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

export default ForgotPasswordPage;

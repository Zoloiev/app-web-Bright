import { useState, useEffect } from "react";
import * as Form from "@radix-ui/react-form";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthLayout from "@/layouts/AuthLayout";
import { useSnackbar } from "notistack";
import axios from "axios";

interface ResetPasswordProps {}

const ResetPasswordPage: React.FC<ResetPasswordProps> = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { email, token } = router.query;

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    console.log("hello");
  }, []);

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    await axios
      .post(`${process.env.API_URL}/api/User/reset-password`, {
        email,
        token,
        newPassword: password,
        confirmNewPassword: confirmPassword,
      })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setPassword("");
        setConfirmPassword("");

        enqueueSnackbar("Password Reset Success!", {
          variant: "success",
        });

        setTimeout(() => {
          router.push("/signin");
        }, 1000);
      })
      .catch((error) => {
        setIsLoading(false);
        setPassword("");
        setConfirmPassword("");

        enqueueSnackbar("Password Reset Failed", { variant: "error" });
      });
  };

  return (
    <AuthLayout title="Final step recovery password">
      <Form.Root className="flex w-full flex-col p-3">
        <div className="flex flex-col gap-6">
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
              "Save"
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

export default ResetPasswordPage;

import { useRouter } from "next/router";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";

interface VerifyEmailProps {}

const VerifyEmailPage: React.FC<VerifyEmailProps> = () => {
  const router = useRouter();
  const { email } = router.query;

  return (
    <AuthLayout title="Check your inbox">
      <div className="text-center">
        <span className="mr-1 text-xs text-bu-darkgrey">
          Click on the link we sent to {email} to finish your account setup.
        </span>
        <Link href="/signin" className="text-xs font-semibold text-bu-purple">
          Sign In
        </Link>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmailPage;

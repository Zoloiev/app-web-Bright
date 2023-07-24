import AuthSlideShow from "@/components/AuthSlideShow";
import Image from "next/image";
import { useRouter } from "next/router";
// hooks
import useAuth from "../hooks/useAuth";

export interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    router.push("/");
  }

  return (
    <div className="flex h-full">
      <div className="flex w-full justify-center overflow-auto lg:max-w-xl">
        <div className="m-auto flex w-full max-w-lg flex-col items-center">
          <Image src="/src/svgs/logo.svg" width={150} height={40} alt="logo" />
          <h1 className="mt-11 mb-[90px] max-w-[260px] text-center text-xl font-bold text-bu-secondary">
            {title}
          </h1>
          {children}
        </div>
      </div>
      <AuthSlideShow />
    </div>
  );
};

export default AuthLayout;

import Link from "next/link";

export default function PaymentsSettings() {
  return (
    <div className="max-w-4xl overflow-auto px-3 pb-3 md:px-6 md:pb-6">
      <div>
        <span className="text-sm font-semibold text-bu-darkGrey2">
          Billing & Payments
        </span>
      </div>
      <div className="mt-3">
        <span className="text-sm text-bu-darkgrey">
          Choose how you make purchases on BrightsUp
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <div className="md:w-1/4 md:min-w-[25%]">
            <span className="text-sm font-semibold text-bu-darkGrey2">
              Quick purchase is disabled.
            </span>
          </div>
          <div className="text-[13px]">
            <span className="mr-2 text-bu-darkgrey">
              You will be asked to verify your account for all BrightsUp
              purchases
            </span>
            <div>
              <Link href="/settings" className="text-bu-purple">
                Learn more about purchase verification
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <button className="h-10 rounded-[32px] border border-bu-purple px-6 text-sm font-semibold text-bu-purple ring-bu-purple hover:ring-1">
              Enable
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

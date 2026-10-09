import ChangePasswordForm from "@/components/portal/ChangePasswordForm";

export const metadata = { title: "Change Password | AiTechPulze", robots: { index: false } };

export default function ChangePasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Set Your Password</h1>
          <p className="mt-1 text-sm text-gray-500">
            You must set a new password before continuing.
          </p>
        </div>
        <ChangePasswordForm />
      </div>
    </div>
  );
}

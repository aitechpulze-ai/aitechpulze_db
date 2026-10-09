import LoginForm from "@/components/portal/LoginForm";

export const metadata = { title: "Portal Login | AiTechPulze", robots: { index: false } };

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">AiTechPulze Portal</h1>
          <p className="mt-1 text-sm text-gray-500">Sign in to your account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

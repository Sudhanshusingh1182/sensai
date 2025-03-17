import { SignUp } from '@clerk/nextjs';

function Page() {
  return <SignUp redirectTo ="/onboarding" />;
}

export default Page;

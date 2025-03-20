"use client";

import { ProgressProvider } from "@bprogress/next/app";

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider height="4px" color="#3a75bd" options={{ showSpinner: false }} shallowRouting>
      {children}
    </ProgressProvider>
  );
};

export default ClientProviders;

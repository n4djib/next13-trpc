import { TrpcProvider } from "./TrpcProvider";

const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TrpcProvider>{children}</TrpcProvider>
    </>
  );
};

export default ProvidersWrapper;

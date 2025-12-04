import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="py-80">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-lg-6 col-md-8 col-sm-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

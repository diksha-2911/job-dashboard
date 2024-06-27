import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-50 ">
      <Navbar />
      <main className="min-h-full pt-40">{children}</main>
    </div>
  );
};

export default DashboardLayout;

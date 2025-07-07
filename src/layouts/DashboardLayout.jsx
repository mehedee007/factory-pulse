// import Sidebar from '../components/Sidebar';
import ThemeToggle from '../components/ThemeToggle';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1 ml-64 p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

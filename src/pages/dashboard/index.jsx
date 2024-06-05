import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-10">
        <Topbar />
        <h1 className="text-2xl font-bold">
          Selamat datang di halaman dashboard
        </h1>
      </main>
    </div>
  );
}

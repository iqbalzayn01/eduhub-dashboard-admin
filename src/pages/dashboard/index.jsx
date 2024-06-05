// import { Navigate } from 'react-router-dom';

export default function Dashboard() {
  // const token = localStorage.getItem('token');

  // if (!token) return <Navigate to="/signin" replace={true} />;

  return (
    <main>
      <h1 className="text-2xl font-bold">
        Selamat datang di halaman dashboard
      </h1>
    </main>
  );
}

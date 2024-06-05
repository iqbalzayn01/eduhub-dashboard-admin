import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearToken } from '../../redux/authSlice';

export const SidebarNavItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(clearToken());
    navigate('/signin');
  };

  return (
    <ul className="space-y-2">
      <li className="hover:bg-gray-700 p-4">
        <Link to="/">Dashboard</Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link to="/categories">Daftar Event</Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link to="/products">Daftar User</Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link to="/customers">Daftar Talents</Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <Link to="/orders">History Pembayaran</Link>
      </li>
      <li className="hover:bg-gray-700 p-4">
        <button onClick={handleSignOut}>Sign Out</button>
      </li>
    </ul>
  );
};

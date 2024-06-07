import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import PageSignIn from '../pages/signin';
import RequireAuth from './requireAuth';
import Dashboard from '../pages/dashboard';
// import Topbar from '../components/Topbar';
// import Sidebar from '../components/Sidebar';
import Events from '../pages/events';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<PageSignIn />} />
      <Route element={<RequireAuth />}>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
      </Route>
    </>
  )
);

export default router;

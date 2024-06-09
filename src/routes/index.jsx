import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import PageSignIn from '../pages/signin';
import RequireAuth from './requireAuth';
import Dashboard from '../pages/dashboard';
import Events from '../pages/events';
import DaftarUser from '../pages/users';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<PageSignIn />} />
      <Route element={<RequireAuth />}>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/daftaruser" element={<DaftarUser />} />
      </Route>
    </>
  )
);

export default router;

/**
 * @deprecated /aios is now the React AiosLanding page.
 * Kept only so old imports don't break; prefer AiosLanding.
 */
import { Navigate } from 'react-router-dom';

const AiosCertified = () => <Navigate to="/aios" replace />;

export default AiosCertified;

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import AdminLayout from './AdminLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Pipeline from './pages/Pipeline';
import Content from './pages/Content';
import Certifications from './pages/Certifications';
import Testimonials from './pages/Testimonials';
import Media from './pages/Media';
import Users from './pages/Users';
import Settings from './pages/Settings';

export default function AdminPanel() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/content/*" element={<Content />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/media" element={<Media />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AdminLayout>
    </ThemeProvider>
  );
}
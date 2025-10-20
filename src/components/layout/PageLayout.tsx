import { ReactNode, useEffect } from 'react';
import { Header, Footer } from './index';
import { PAGE_METADATA, ROUTES } from '../../config/routes';

interface PageLayoutProps {
  children: ReactNode;
  currentPath?: string;
  onReportAdverseEvent: () => void;
  onNavigate: (page: string) => void;
}

export function PageLayout({
  children,
  currentPath = '/',
  onReportAdverseEvent,
  onNavigate
}: PageLayoutProps) {
  // Update page title and meta description based on current route
  useEffect(() => {
    const metadata = PAGE_METADATA[currentPath as keyof typeof PAGE_METADATA];

    if (metadata) {
      document.title = metadata.title;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', metadata.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = metadata.description;
        document.head.appendChild(meta);
      }
    }
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        onReportAdverseEvent={onReportAdverseEvent}
        currentPage={currentPath}
        onNavigate={onNavigate}
      />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
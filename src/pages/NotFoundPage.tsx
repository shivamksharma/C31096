import { motion } from 'framer-motion';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-8"
        >
          <AlertCircle className="w-12 h-12 text-red-500" strokeWidth={1.5} />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist. It might have been moved,
            deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 px-6 py-3"
          >
            <Home size={18} />
            Go Home
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="flex items-center gap-2 px-6 py-3"
          >
            <ArrowLeft size={18} />
            Go Back
          </Button>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-4">
            Need help finding something?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button
              onClick={() => onNavigate('/products')}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Browse Products
            </button>
            <button
              onClick={() => onNavigate('/contact/contact-us')}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Contact Us
            </button>
            <button
              onClick={() => onNavigate('/resources')}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Resources
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
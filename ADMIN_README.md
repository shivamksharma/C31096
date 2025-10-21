# EDIF Pharma Admin Panel

A premium, modern admin panel for managing EDIF Pharma's public website content and data.

## Features

### 🎨 Design & UI
- **Shadcn UI Components**: Clean, minimalist, highly professional interface
- **Enterprise-grade Design**: Calm whites, deep blues, and slate tones
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Dark/Light Mode**: Theme switching with next-themes
- **Smooth Animations**: Micro-interactions and transitions

### 🧩 Smart Routing System
- **Dashboard** (`/admin`): Overview with metrics, charts, and recent activity
- **Products** (`/admin/products`): Manage treatments and medicines with tabs for All Products, Categories, Add New
- **Pipeline** (`/admin/pipeline`): R&D innovation stages tracking
- **Content** (`/admin/content`): Full control over homepage blocks (Hero, Metrics, Treatments, etc.)
- **Certifications** (`/admin/certifications`): Upload and manage certificates with filtering
- **Testimonials** (`/admin/testimonials`): Manage and moderate user testimonials
- **Media** (`/admin/media`): Image and video library with upload, tagging, and organization
- **Users** (`/admin/users`): User management with roles, permissions, and activity logs
- **Settings** (`/admin/settings`): Brand settings, SEO, contact info, and system configuration

### 🛠️ Technical Stack
- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Theme**: next-themes
- **Build Tool**: Vite

### 📱 Layout Structure
- **Sidebar Navigation**: Collapsible with icons and grouped sections
- **Top Navbar**: Profile, search, notifications, and quick actions
- **Breadcrumb Navigation**: Clear page hierarchy
- **Responsive Design**: Mobile-friendly with sheet overlays

### 🔧 Key Features Implemented

#### Dashboard
- Summary cards with key metrics
- Interactive charts (bar charts, pie charts)
- Recent activity feed
- Quick action buttons

#### Products Management
- Tabbed interface (All Products, Categories, Add New)
- Sortable and filterable data tables
- Inline editing and bulk actions
- Product categorization

#### Pipeline Tracking
- Visual progress tracking for R&D stages
- Stage-based filtering
- Timeline views
- Budget and team management

#### Content Management
- Modular content blocks
- WYSIWYG editing capabilities
- Preview functionality
- Version control ready

#### Certifications
- File upload with drag-and-drop
- Status tracking (Active, Expiring, Expired)
- Category filtering
- Certificate validation

#### Testimonials
- Moderation workflow (Pending, Approved, Rejected)
- Rating system
- Bulk approval/rejection
- Author verification

#### Media Library
- Multi-format support (images, videos, documents)
- Tagging system
- Search and filter capabilities
- Usage tracking

#### User Management
- Role-based access control
- Permission management
- Activity logging
- User onboarding

#### Settings
- Comprehensive configuration options
- SEO optimization tools
- Brand asset management
- System maintenance tools

## Getting Started

1. **Access the Admin Panel**: Navigate to `/admin` in your browser
2. **Authentication**: Implement authentication as needed (currently open for development)
3. **Navigation**: Use the sidebar to navigate between different sections
4. **Theme**: Toggle between light and dark modes using the theme switcher

## Development

The admin panel is built with modern React patterns:
- Functional components with hooks
- TypeScript for type safety
- Modular component architecture
- Responsive design principles

## Future Enhancements

- Real-time notifications
- Advanced analytics dashboard
- Multi-language support
- API integration for data persistence
- Advanced user permissions
- Audit logging
- Automated backups
- Performance monitoring

## Security Considerations

- Implement proper authentication and authorization
- Add input validation and sanitization
- Enable HTTPS in production
- Regular security audits
- Data encryption for sensitive information

---

Built with ❤️ for EDIF Pharma's content management needs.
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Package, GitBranch, Award, MessageSquare, TrendingUp, Users, Activity } from 'lucide-react';

const stats = [
  {
    title: 'Total Products',
    value: '24',
    change: '+12%',
    icon: Package,
    color: 'text-blue-600'
  },
  {
    title: 'Active Pipelines',
    value: '8',
    change: '+4',
    icon: GitBranch,
    color: 'text-green-600'
  },
  {
    title: 'Certificates',
    value: '156',
    change: '+8',
    icon: Award,
    color: 'text-purple-600'
  },
  {
    title: 'Testimonials',
    value: '42',
    change: '+3',
    icon: MessageSquare,
    color: 'text-orange-600'
  }
];

const chartData = [
  { name: 'Jan', products: 12, visitors: 2400 },
  { name: 'Feb', products: 15, visitors: 1398 },
  { name: 'Mar', products: 18, visitors: 9800 },
  { name: 'Apr', products: 22, visitors: 3908 },
  { name: 'May', products: 24, visitors: 4800 },
  { name: 'Jun', products: 24, visitors: 3800 },
];

const pipelineData = [
  { name: 'Discovery', value: 35, color: '#3b82f6' },
  { name: 'Preclinical', value: 25, color: '#10b981' },
  { name: 'Clinical', value: 20, color: '#f59e0b' },
  { name: 'Launch', value: 20, color: '#ef4444' },
];

const recentActivities = [
  { id: 1, action: 'New product added', item: 'PC-2024-001', time: '2 hours ago', type: 'product' },
  { id: 2, action: 'Certificate uploaded', item: 'ISO 9001:2024', time: '4 hours ago', type: 'certificate' },
  { id: 3, action: 'Testimonial approved', item: 'Dr. Sarah Johnson', time: '6 hours ago', type: 'testimonial' },
  { id: 4, action: 'Pipeline updated', item: 'PC-2023-005', time: '1 day ago', type: 'pipeline' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your content.</p>
        </div>
        <Button>
          <TrendingUp className="mr-2 h-4 w-4" />
          View Analytics
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Product & Visitor Trends</CardTitle>
            <CardDescription>Monthly overview of products and website visitors</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="products" fill="#3b82f6" name="Products" />
                <Bar dataKey="visitors" fill="#10b981" name="Visitors" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pipeline Distribution</CardTitle>
            <CardDescription>Current status of R&D pipelines</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pipelineData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pipelineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="mr-2 h-5 w-5" />
            Recent Activity
          </CardTitle>
          <CardDescription>Latest updates and changes in your content management system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    {activity.type === 'product' && <Package className="h-4 w-4 text-blue-600" />}
                    {activity.type === 'certificate' && <Award className="h-4 w-4 text-purple-600" />}
                    {activity.type === 'testimonial' && <MessageSquare className="h-4 w-4 text-orange-600" />}
                    {activity.type === 'pipeline' && <GitBranch className="h-4 w-4 text-green-600" />}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}: <span className="font-normal">{activity.item}</span>
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <Badge variant="secondary">{activity.type}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
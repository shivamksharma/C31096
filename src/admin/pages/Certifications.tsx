import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Upload, Search, Edit, Trash2, Eye, FileText, Award, CheckCircle, XCircle } from 'lucide-react';

const certifications = [
  {
    id: '1',
    name: 'ISO 9001:2015',
    issuer: 'International Organization for Standardization',
    issueDate: '2023-06-15',
    expiryDate: '2026-06-15',
    status: 'Active',
    category: 'Quality Management',
    fileUrl: '/certificates/iso9001.pdf'
  },
  {
    id: '2',
    name: 'GMP Certificate',
    issuer: 'FDA',
    issueDate: '2023-08-20',
    expiryDate: '2025-08-20',
    status: 'Active',
    category: 'Manufacturing',
    fileUrl: '/certificates/gmp.pdf'
  },
  {
    id: '3',
    name: 'ISO 14001:2015',
    issuer: 'International Organization for Standardization',
    issueDate: '2022-12-10',
    expiryDate: '2025-12-10',
    status: 'Expiring Soon',
    category: 'Environmental',
    fileUrl: '/certificates/iso14001.pdf'
  }
];

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  const filteredCertifications = certifications.filter(cert =>
    cert.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedStatus === 'all' || cert.status === selectedStatus)
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
      case 'Expiring Soon':
        return <Badge className="bg-yellow-100 text-yellow-800"><XCircle className="w-3 h-3 mr-1" />Expiring Soon</Badge>;
      case 'Expired':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />Expired</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Certifications</h1>
          <p className="text-gray-600">Upload and manage certificates with filtering.</p>
        </div>
        <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
          <Button onClick={() => setIsUploadDialogOpen(true)}>
            <Upload className="mr-2 h-4 w-4" />
            Upload Certificate
          </Button>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Upload New Certificate</DialogTitle>
              <DialogDescription>
                Add a new certification to your portfolio.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="cert-name">Certificate Name</Label>
                <Input id="cert-name" placeholder="e.g., ISO 9001:2015" />
              </div>
              <div>
                <Label htmlFor="cert-issuer">Issuing Authority</Label>
                <Input id="cert-issuer" placeholder="e.g., International Organization for Standardization" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cert-issue-date">Issue Date</Label>
                  <Input id="cert-issue-date" type="date" />
                </div>
                <div>
                  <Label htmlFor="cert-expiry-date">Expiry Date</Label>
                  <Input id="cert-expiry-date" type="date" />
                </div>
              </div>
              <div>
                <Label htmlFor="cert-category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quality">Quality Management</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="environmental">Environmental</SelectItem>
                    <SelectItem value="safety">Safety</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="cert-file">Certificate File</Label>
                <Input id="cert-file" type="file" accept=".pdf,.jpg,.png" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsUploadDialogOpen(false)}>
                Upload Certificate
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search certificates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Expiring Soon">Expiring Soon</SelectItem>
                <SelectItem value="Expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Certifications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Certificates ({filteredCertifications.length})</CardTitle>
          <CardDescription>Manage your certification portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Certificate</TableHead>
                <TableHead>Issuer</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCertifications.map((cert) => (
                <TableRow key={cert.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span>{cert.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{cert.issuer}</TableCell>
                  <TableCell>{cert.category}</TableCell>
                  <TableCell>{cert.issueDate}</TableCell>
                  <TableCell>{cert.expiryDate}</TableCell>
                  <TableCell>{getStatusBadge(cert.status)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">Active Certificates</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <XCircle className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-gray-600">Expiring Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-600">Total Certificates</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
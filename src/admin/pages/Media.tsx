import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Upload, Search, Image, Video, FileText, Edit, Trash2, Tag, Download, Eye } from 'lucide-react';

const mediaItems = [
  {
    id: '1',
    name: 'Lab Equipment.jpg',
    type: 'image',
    size: '2.4 MB',
    uploadDate: '2024-01-15',
    tags: ['laboratory', 'equipment', 'manufacturing'],
    url: '/media/lab-equipment.jpg',
    alt: 'Modern laboratory equipment'
  },
  {
    id: '2',
    name: 'Product Showcase.mp4',
    type: 'video',
    size: '45.2 MB',
    uploadDate: '2024-01-20',
    tags: ['products', 'showcase', 'marketing'],
    url: '/media/product-showcase.mp4',
    alt: 'Product showcase video'
  },
  {
    id: '3',
    name: 'Research Team.jpg',
    type: 'image',
    size: '1.8 MB',
    uploadDate: '2024-01-10',
    tags: ['team', 'research', 'people'],
    url: '/media/research-team.jpg',
    alt: 'Research team in lab'
  }
];

const availableTags = [
  'laboratory', 'equipment', 'manufacturing', 'products', 'showcase', 'marketing',
  'team', 'research', 'people', 'facility', 'certificates', 'events', 'hero'
];

export default function Media() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  const filteredMedia = mediaItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedType === 'all' || item.type === selectedType) &&
    (selectedTag === 'all' || item.tags.includes(selectedTag))
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="h-8 w-8 text-blue-600" />;
      case 'video':
        return <Video className="h-8 w-8 text-red-600" />;
      default:
        return <FileText className="h-8 w-8 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Media Library</h1>
          <p className="text-gray-600">Image and video library for website use.</p>
        </div>
        <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
          <Button onClick={() => setIsUploadDialogOpen(true)}>
            <Upload className="mr-2 h-4 w-4" />
            Upload Media
          </Button>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Upload New Media</DialogTitle>
              <DialogDescription>
                Add images, videos, or documents to your media library.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="media-file">File</Label>
                <Input id="media-file" type="file" accept="image/*,video/*,.pdf,.doc,.docx" />
              </div>
              <div>
                <Label htmlFor="media-name">Display Name</Label>
                <Input id="media-name" placeholder="e.g., Lab Equipment Photo" />
              </div>
              <div>
                <Label htmlFor="media-alt">Alt Text</Label>
                <Input id="media-alt" placeholder="Description for accessibility" />
              </div>
              <div>
                <Label htmlFor="media-tags">Tags</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tags" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTags.map(tag => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="media-description">Description</Label>
                <Textarea id="media-description" placeholder="Optional description..." />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsUploadDialogOpen(false)}>
                Upload Media
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Image className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{mediaItems.filter(m => m.type === 'image').length}</p>
                <p className="text-sm text-gray-600">Images</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Video className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold">{mediaItems.filter(m => m.type === 'video').length}</p>
                <p className="text-sm text-gray-600">Videos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-gray-600" />
              <div>
                <p className="text-2xl font-bold">{mediaItems.filter(m => m.type === 'document').length}</p>
                <p className="text-sm text-gray-600">Documents</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Tag className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">{availableTags.length}</p>
                <p className="text-sm text-gray-600">Tags</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="image">Images</SelectItem>
                <SelectItem value="video">Videos</SelectItem>
                <SelectItem value="document">Documents</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All Tags" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tags</SelectItem>
                {availableTags.map(tag => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMedia.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              {getTypeIcon(item.type)}
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-medium text-sm truncate">{item.name}</h3>
                <p className="text-xs text-gray-600">{item.size} • {item.uploadDate}</p>
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{item.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMedia.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-gray-500">
              <Image className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No media items found matching your criteria.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
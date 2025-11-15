import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [tourists, setTourists] = useState('2');
  const { toast } = useToast();

  const tours = [
    {
      id: 1,
      title: 'Памирский тракт',
      city: 'Хорог',
      duration: '7 дней',
      price: '850$',
      image: 'https://cdn.poehali.dev/projects/f28127ae-a8b2-4afe-b659-2efab5b68826/files/fd35df2a-df7d-44d7-908e-fd0072bf5fff.jpg',
      description: 'Легендарная дорога через Памирские горы с захватывающими видами',
      type: 'adventure'
    },
    {
      id: 2,
      title: 'Исторический Хисар',
      city: 'Душанбе',
      duration: '3 дня',
      price: '350$',
      image: 'https://cdn.poehali.dev/projects/f28127ae-a8b2-4afe-b659-2efab5b68826/files/7fed3f36-ea71-46fa-a8a1-06e72cb3ca6c.jpg',
      description: 'Древняя крепость и знакомство с культурой Таджикистана',
      type: 'cultural'
    },
    {
      id: 3,
      title: 'Искандеркуль',
      city: 'Искандеркуль',
      duration: '2 дня',
      price: '280$',
      image: 'https://cdn.poehali.dev/projects/f28127ae-a8b2-4afe-b659-2efab5b68826/files/a59f13fe-007e-424b-a66d-8059ec11d253.jpg',
      description: 'Треккинг к озеру Александра Македонского в горах Фанских',
      type: 'nature'
    }
  ];

  const attractions = [
    { name: 'Крепость Хисар', location: 'Хисар', type: 'Историческое' },
    { name: 'Озеро Искандеркуль', location: 'Фанские горы', type: 'Природа' },
    { name: 'Памирский тракт', location: 'Памир', type: 'Маршрут' },
    { name: 'Национальный музей', location: 'Душанбе', type: 'Культура' },
    { name: 'Семь озёр', location: 'Маргузор', type: 'Природа' },
    { name: 'Мавзолей Ходжа Машхад', location: 'Худжанд', type: 'Историческое' }
  ];

  const handleBooking = () => {
    if (!selectedTour || !selectedDate) {
      toast({
        title: 'Заполните все поля',
        description: 'Выберите тур и дату',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Бронирование отправлено!',
      description: `Тур "${selectedTour.title}" на ${tourists} человек(а). Мы свяжемся с вами в ближайшее время.`
    });
    
    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Mountain" size={28} className="text-primary" />
            <span className="text-xl font-bold text-primary">Таджикистан</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#tours" className="text-sm font-medium hover:text-primary transition-colors">Туры</a>
            <a href="#attractions" className="text-sm font-medium hover:text-primary transition-colors">Достопримечательности</a>
            <a href="#culture" className="text-sm font-medium hover:text-primary transition-colors">Культура</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/f28127ae-a8b2-4afe-b659-2efab5b68826/files/fd35df2a-df7d-44d7-908e-fd0072bf5fff.jpg" 
            alt="Таджикистан" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Откройте для себя Таджикистан
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Величественные горы, древняя культура и незабываемые приключения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать тур
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section id="tours" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные туры</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите приключение по душе — от культурных маршрутов до горных экспедиций
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="adventure">Приключения</TabsTrigger>
              <TabsTrigger value="cultural">Культура</TabsTrigger>
              <TabsTrigger value="nature">Природа</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map((tour) => (
                  <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-64 overflow-hidden">
                      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                      <Badge className="absolute top-4 right-4 bg-secondary">{tour.duration}</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{tour.title}</CardTitle>
                        <span className="text-2xl font-bold text-primary">{tour.price}</span>
                      </div>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        {tour.city}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{tour.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full" onClick={() => setSelectedTour(tour)}>
                            <Icon name="Calendar" size={16} className="mr-2" />
                            Забронировать
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Бронирование тура: {selectedTour?.title}</DialogTitle>
                            <DialogDescription>
                              Заполните форму и мы свяжемся с вами для подтверждения
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="name">Имя</Label>
                                <Input id="name" placeholder="Ваше имя" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="phone">Телефон</Label>
                                <Input id="phone" placeholder="+992..." />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                            <div className="space-y-2">
                              <Label>Количество туристов</Label>
                              <Select value={tourists} onValueChange={setTourists}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1">1 человек</SelectItem>
                                  <SelectItem value="2">2 человека</SelectItem>
                                  <SelectItem value="3">3 человека</SelectItem>
                                  <SelectItem value="4">4 человека</SelectItem>
                                  <SelectItem value="5+">5+ человек</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label>Дата начала тура</Label>
                              <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                className="rounded-md border"
                              />
                            </div>
                            <div className="bg-muted p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm">Стоимость за человека:</span>
                                <span className="font-bold">{selectedTour?.price}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Итого ({tourists} чел.):</span>
                                <span className="text-xl font-bold text-primary">
                                  {selectedTour && parseInt(selectedTour.price) * parseInt(tourists || '1')}$
                                </span>
                              </div>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={handleBooking} className="w-full">
                              <Icon name="CheckCircle" size={16} className="mr-2" />
                              Подтвердить бронирование
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="adventure" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.filter(t => t.type === 'adventure').map((tour) => (
                  <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-64 overflow-hidden">
                      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                      <Badge className="absolute top-4 right-4 bg-secondary">{tour.duration}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{tour.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        {tour.city}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{tour.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cultural" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.filter(t => t.type === 'cultural').map((tour) => (
                  <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-64 overflow-hidden">
                      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                      <Badge className="absolute top-4 right-4 bg-secondary">{tour.duration}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{tour.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        {tour.city}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{tour.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nature" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.filter(t => t.type === 'nature').map((tour) => (
                  <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-64 overflow-hidden">
                      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                      <Badge className="absolute top-4 right-4 bg-secondary">{tour.duration}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{tour.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        {tour.city}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{tour.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="attractions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Достопримечательности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя богатое наследие и природные чудеса Таджикистана
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{attraction.name}</CardTitle>
                    <Badge variant="outline">{attraction.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Icon name="MapPin" size={14} />
                    {attraction.location}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Культура Таджикистана</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Познайте древние традиции и богатое культурное наследие
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Users" size={40} className="text-primary mb-4" />
                <CardTitle>Традиции</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Гостеприимство, семейные ценности и уважение к старшим — основа таджикской культуры
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="UtensilsCrossed" size={40} className="text-primary mb-4" />
                <CardTitle>Кухня</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Плов, шурпа, самбуса и ароматный зелёный чай — вкусы, которые запомнятся навсегда
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Music" size={40} className="text-primary mb-4" />
                <CardTitle>Искусство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Традиционная музыка, танцы и ремёсла передаются из поколения в поколение
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Красота Таджикистана в фотографиях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {tours.map((tour, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">{tour.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Mountain" size={24} />
                <span className="text-xl font-bold">Таджикистан</span>
              </div>
              <p className="text-white/80 text-sm">
                Ваш проводник в мир незабываемых путешествий по Таджикистану
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#tours" className="hover:text-white transition-colors">Туры</a></li>
                <li><a href="#attractions" className="hover:text-white transition-colors">Достопримечательности</a></li>
                <li><a href="#culture" className="hover:text-white transition-colors">Культура</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +992 123 456 789
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@tajikistan-tours.tj
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Душанбе, Таджикистан
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Следите за нами</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            © 2024 Туризм в Таджикистане. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

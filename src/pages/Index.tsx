import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const games = [
  {
    id: 'rivas',
    name: 'RIVAS',
    icon: 'Gamepad2',
    color: 'from-cyan-500 to-blue-500',
    glow: 'glow-cyan'
  },
  {
    id: 'grow-a-garden',
    name: 'GROW A GARDEN',
    icon: 'Flower2',
    color: 'from-green-500 to-emerald-500',
    glow: 'glow-cyan'
  },
  {
    id: 'adopt-me',
    name: 'ADOPT ME',
    icon: 'Heart',
    color: 'from-pink-500 to-rose-500',
    glow: 'glow-magenta'
  },
  {
    id: 'steal-a-brainrot',
    name: 'STEAL A BRAINROT',
    icon: 'Brain',
    color: 'from-purple-500 to-violet-500',
    glow: 'glow-purple'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="scan-line absolute inset-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-6 py-2 border border-primary/50 rounded-full bg-primary/10 backdrop-blur-sm">
              <Icon name="Zap" className="text-primary animate-pulse" size={24} />
              <span className="text-sm uppercase tracking-wider text-primary font-medium">Roblox Exploits Database</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-neon-cyan glow-cyan glitch">
            ROBLOX BUGS
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Технологическая база данных багов и эксплойтов
          </p>
          
          <div className="mt-8 h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {games.map((game, index) => (
            <Link
              key={game.id}
              to={`/game/${game.id}`}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                     style={{ background: `linear-gradient(to bottom right, hsl(var(--neon-cyan)), hsl(var(--neon-magenta)))` }}>
                </div>
                
                <CardContent className="p-8 text-center relative">
                  <div className="mb-6 inline-block p-4 rounded-2xl bg-primary/10 border border-primary/30 group-hover:border-primary/60 transition-all duration-300 group-hover:animate-pulse-glow">
                    <Icon 
                      name={game.icon as any} 
                      className="text-primary" 
                      size={48}
                    />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${game.glow} text-neon-cyan group-hover:scale-110 transition-transform duration-300`}>
                    {game.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <span>Открыть</span>
                    <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="uppercase tracking-widest">System Online</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </div>
  );
};

export default Index;

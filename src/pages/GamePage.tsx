import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const GamePage = () => {
  const { game } = useParams<{ game: string }>();
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [content, setContent] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const gameNames: Record<string, string> = {
    'rivas': 'RIVAS',
    'grow-a-garden': 'GROW A GARDEN',
    'adopt-me': 'ADOPT ME',
    'steal-a-brainrot': 'STEAL A BRAINROT'
  };

  const handlePasswordSubmit = () => {
    if (password === '3258') {
      setIsAuthenticated(true);
      setEditedContent(content);
    } else {
      alert('Неверный код доступа');
    }
  };

  const handleSave = () => {
    setContent(editedContent);
    setIsAuthenticated(false);
    setIsEditorOpen(false);
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="scan-line absolute inset-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-primary hover:text-primary/80 border border-primary/30 hover:border-primary/60">
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад к играм
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-neon-cyan glow-cyan glitch">
            {gameNames[game || ''] || 'GAME'}
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-neon rounded-lg p-8 bg-card/50 backdrop-blur-sm min-h-[400px]">
            {content ? (
              <div className="prose prose-invert max-w-none">
                <p className="whitespace-pre-wrap text-foreground/90">{content}</p>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground/50">
                <div className="text-center">
                  <Icon name="Zap" className="mx-auto mb-4 text-primary" size={48} />
                  <p className="text-xl">Содержимое пока не добавлено</p>
                  <p className="text-sm mt-2">Используйте редактор для добавления информации</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsEditorOpen(true)}
        className="fixed bottom-4 left-4 w-12 h-12 bg-primary/20 hover:bg-primary/40 border border-primary/50 rounded-lg flex items-center justify-center transition-all hover:animate-pulse-glow group z-50"
        title="Редактор"
      >
        <Icon name="Settings" className="text-primary group-hover:rotate-90 transition-transform duration-300" size={20} />
      </button>

      <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
        <DialogContent className="bg-card border-primary/50">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-neon-cyan">
              {isAuthenticated ? 'Редактор контента' : 'Доступ к редактору'}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {isAuthenticated ? 'Редактируйте содержимое страницы' : 'Введите код доступа для редактирования'}
            </DialogDescription>
          </DialogHeader>

          {!isAuthenticated ? (
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Введите код доступа"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                className="bg-background border-primary/30 focus:border-primary"
              />
              <Button
                onClick={handlePasswordSubmit}
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
              >
                Войти
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                placeholder="Введите содержимое страницы..."
                className="min-h-[300px] bg-background border-primary/30 focus:border-primary font-mono"
              />
              <div className="flex gap-2">
                <Button
                  onClick={handleSave}
                  className="flex-1 bg-primary hover:bg-primary/80 text-primary-foreground"
                >
                  <Icon name="Save" className="mr-2" size={16} />
                  Сохранить
                </Button>
                <Button
                  onClick={() => {
                    setIsAuthenticated(false);
                    setPassword('');
                  }}
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  Отмена
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GamePage;

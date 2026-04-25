import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-8xl font-display font-black text-primary">404</h1>
            <div className="h-0.5 w-16 bg-border mx-auto"></div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-foreground">
              Wrong Turn
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The page <span className="font-medium text-foreground">"{pageName}"</span> doesn't exist. Maybe the truck moved.
            </p>
          </div>
          <div className="pt-6">
            <button
              onClick={() => window.location.href = '/'}
              className="inline-flex items-center px-6 py-3 font-display font-bold uppercase tracking-wider text-sm text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

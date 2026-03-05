import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-6 ${className ?? ''}`}>
      <ol className="flex items-center gap-1.5 text-sm text-[#444950] flex-wrap">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-[#1877F2] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-[#CCCCCC]" />
            {item.path ? (
              <Link to={item.path} className="hover:text-[#1877F2] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#1D3C78] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

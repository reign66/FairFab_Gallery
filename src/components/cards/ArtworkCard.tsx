import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Artwork } from '@/data/artworks';

export default function ArtworkCard({ artwork, index = 0 }: { artwork: Artwork; index?: number }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('ffg-favorites') || '[]');
    setIsFavorite(favorites.includes(artwork.slug));
  }, [artwork.slug]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('ffg-favorites') || '[]');
    const updated = isFavorite
      ? favorites.filter((s: string) => s !== artwork.slug)
      : [...favorites, artwork.slug];
    localStorage.setItem('ffg-favorites', JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/portfolio/${artwork.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-xl bg-[#F2F3F5] aspect-[4/5]">
          <img
            src={artwork.image}
            alt={`${artwork.title} - Digital art by Fabien Ariel`}
            title={artwork.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={toggleFavorite}
              className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart className={`w-4 h-4 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-[#444950]'}`} />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#1D3C78]">
              <Eye className="w-3.5 h-3.5" />
              View Details
            </span>
          </div>
        </div>
        <div className="mt-3 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[#000000] group-hover:text-[#1877F2] transition-colors line-clamp-1">
              {artwork.title}
            </h3>
            <span className="text-xs text-[#444950]">{artwork.year}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#77A7FF] bg-[#ECF3FF] px-2 py-0.5 rounded-full">
              {artwork.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export const SITE_CONFIG = {
  name: 'Fair Fab Gallery',
  url: 'https://fair-fab-gallery.com',
  description: 'Contemporary digital art gallery by Fabien Ariel, based in Tel Aviv. Revisiting the standards of Pop Art and contemporary artistic trends.',
  artist: 'Fabien Ariel Abisror',
  artistShort: 'Fabien Ariel',
  email: 'fairfabgallery@gmail.com',
  phone: '+972 50 123 4567',
  location: 'Tel Aviv, Israel',
  instagram: 'https://www.instagram.com/fair_fab_gallery/',
  instagramHandle: '@fair_fab_gallery',
  themeColor: '#1D3C78',
} as const;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
] as const;

export const COLORS = {
  primary: {
    900: '#1D3C78',
    800: '#2851A3',
    700: '#1877F2',
    600: '#77A7FF',
    500: '#AAC9FF',
    400: '#ECF3FF',
  },
  neutral: {
    900: '#000000',
    700: '#444950',
    300: '#CCCCCC',
    100: '#F2F3F5',
  },
} as const;

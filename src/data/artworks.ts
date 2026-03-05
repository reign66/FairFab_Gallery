export interface Artwork {
  id: number;
  slug: string;
  title: string;
  year: number;
  category: 'Pop Art' | 'Contemporary' | 'Commissions' | 'Limited Edition';
  image: string;
  description: string;
  longDescription: string;
  techniques: string[];
  dimensions: string;
  available: boolean;
  featured: boolean;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    slug: 'neon-pop-portrait',
    title: 'Neon Pop Portrait',
    year: 2025,
    category: 'Pop Art',
    image: '/images/artworks/artwork-01.jpg',
    description: 'A vibrant neon-infused portrait that reimagines classic pop art iconography through a contemporary digital lens.',
    longDescription: 'Neon Pop Portrait is a bold exploration of color and identity in the digital age. Drawing inspiration from the masters of Pop Art while pushing the boundaries of what digital creation can achieve, this piece uses vivid neon palettes to create a striking visual impact. The artwork blends photographic elements with hand-drawn digital techniques, resulting in a composition that feels both familiar and entirely new. Each color choice was deliberate, designed to evoke the energy of urban nightlife while maintaining the graphic clarity that defines the Pop Art movement. This piece represents a bridge between the analog traditions of Warhol and Lichtenstein and the infinite possibilities of digital artistry.',
    techniques: ['Digital Painting', 'Photo Manipulation', 'Color Grading'],
    dimensions: '4000 x 5000 px',
    available: true,
    featured: true,
  },
  {
    id: 2,
    slug: 'urban-fragments',
    title: 'Urban Fragments',
    year: 2025,
    category: 'Contemporary',
    image: '/images/artworks/artwork-02.jpg',
    description: 'A fragmented urban landscape exploring the chaos and beauty of modern city life through digital collage.',
    longDescription: 'Urban Fragments captures the sensory overload of modern metropolitan life through a carefully constructed digital collage. Layering architectural photography with abstract geometric forms, this piece creates a visual rhythm that mirrors the pulse of the city. The composition deliberately breaks down recognizable urban elements into their essential shapes and colors, then reassembles them into a new visual language. This technique speaks to how we process and remember our urban experiences, always fragmentary, always in motion. The blue-dominated palette anchors the composition in a sense of depth and contemplation, while bursts of warmer tones suggest the human energy that animates every cityscape.',
    techniques: ['Digital Collage', 'Geometric Abstraction', 'Mixed Media'],
    dimensions: '5000 x 3500 px',
    available: true,
    featured: true,
  },
  {
    id: 3,
    slug: 'chrome-reflections',
    title: 'Chrome Reflections',
    year: 2024,
    category: 'Pop Art',
    image: '/images/artworks/artwork-03.jpg',
    description: 'Metallic surfaces and reflections transformed into a pop art statement about consumer culture.',
    longDescription: 'Chrome Reflections is a meditation on surface and substance in contemporary consumer culture. Using digital rendering techniques to create hyper-realistic metallic textures, this artwork transforms everyday objects into icons of desire and aspiration. The reflective surfaces serve as both literal and metaphorical mirrors, inviting viewers to see themselves in the glossy veneer of modern consumption. The piece draws heavily from the Pop Art tradition of elevating consumer objects to fine art status, while updating this concept for an era where digital surfaces and physical objects increasingly merge. The interplay of light and form creates a mesmerizing visual experience that rewards extended contemplation.',
    techniques: ['3D Rendering', 'Digital Painting', 'Light Simulation'],
    dimensions: '4500 x 4500 px',
    available: true,
    featured: true,
  },
  {
    id: 4,
    slug: 'pixel-dreams',
    title: 'Pixel Dreams',
    year: 2024,
    category: 'Contemporary',
    image: '/images/artworks/artwork-04.jpg',
    description: 'A dreamlike digital landscape where pixels dissolve into organic forms, blending technology with nature.',
    longDescription: 'Pixel Dreams exists at the intersection of the digital and the organic, creating a surreal landscape where technology and nature coexist in unexpected harmony. The piece begins with a grid of precise pixels that gradually dissolves into fluid, natural forms, suggesting the way digital tools can be used to recreate and reimagine the natural world. The color palette transitions from cool digital blues to warm organic greens and golds, reinforcing the visual narrative of transformation. This artwork reflects on the increasingly blurred boundary between our digital and physical experiences, proposing that rather than opposing forces, technology and nature can create something beautiful together.',
    techniques: ['Pixel Art', 'Digital Painting', 'Generative Elements'],
    dimensions: '6000 x 4000 px',
    available: true,
    featured: true,
  },
  {
    id: 5,
    slug: 'retro-wave-series',
    title: 'Retro Wave Series I',
    year: 2024,
    category: 'Pop Art',
    image: '/images/artworks/artwork-05.jpg',
    description: 'A nostalgic yet forward-looking piece combining 80s aesthetics with modern digital art techniques.',
    longDescription: 'Retro Wave Series I is the first in a collection that reinterprets the visual language of the 1980s through contemporary digital artistry. Bold gradients, neon color schemes, and geometric patterns create an atmosphere of nostalgic futurism, a vision of tomorrow as imagined by yesterday. The piece channels the optimistic energy of early digital culture while employing sophisticated modern techniques that were unimaginable in that era. This tension between past and future, between simple and complex, gives the work its unique emotional resonance. It is simultaneously a tribute to and a transcendence of its source material.',
    techniques: ['Vector Art', 'Gradient Design', 'Neon Effects'],
    dimensions: '4000 x 4000 px',
    available: true,
    featured: false,
  },
  {
    id: 6,
    slug: 'abstract-identity',
    title: 'Abstract Identity',
    year: 2024,
    category: 'Contemporary',
    image: '/images/artworks/artwork-06.jpg',
    description: 'An exploration of identity through abstract forms and bold color blocks in the digital medium.',
    longDescription: 'Abstract Identity deconstructs the concept of personal identity into its most fundamental visual elements: color, form, and spatial relationship. Moving away from figurative representation, this piece uses abstract shapes to suggest the complexity of how we define ourselves in an increasingly digital world. Each color block represents a different facet of identity, social, cultural, personal, and digital, while the ways they overlap and interact speak to the fluid nature of selfhood. The composition is deliberately asymmetric, reflecting the beautiful imperfection of real human experience against the perfect symmetry that digital tools make possible.',
    techniques: ['Abstract Digital Art', 'Color Field Theory', 'Composition Design'],
    dimensions: '5000 x 5000 px',
    available: true,
    featured: false,
  },
  {
    id: 7,
    slug: 'cultural-remix',
    title: 'Cultural Remix',
    year: 2023,
    category: 'Pop Art',
    image: '/images/artworks/artwork-07.jpg',
    description: 'A pop art mashup of cultural icons and symbols from around the world, celebrating global diversity.',
    longDescription: 'Cultural Remix is a vibrant celebration of global cultural diversity, rendered through the democratic lens of Pop Art. Drawing symbols, icons, and visual motifs from cultures around the world, this piece creates a kaleidoscopic composition that speaks to the interconnectedness of our global community. Each element has been carefully researched and respectfully reinterpreted through digital art techniques, creating a visual conversation between traditions that spans centuries and continents. The bold, saturated color palette unifies diverse elements into a cohesive whole, suggesting that despite our differences, there is a universal human aesthetic sensibility that connects us all.',
    techniques: ['Digital Collage', 'Icon Design', 'Cultural Illustration'],
    dimensions: '6000 x 4500 px',
    available: true,
    featured: false,
  },
  {
    id: 8,
    slug: 'digital-genesis',
    title: 'Digital Genesis',
    year: 2023,
    category: 'Limited Edition',
    image: '/images/artworks/artwork-08.jpg',
    description: 'A limited edition piece exploring the birth of digital consciousness through swirling abstract forms.',
    longDescription: 'Digital Genesis is a limited edition artwork that explores the metaphorical birth of digital consciousness. Swirling abstract forms emerge from a dark void, suggesting the moment of creation in a digital universe. The piece uses carefully choreographed color transitions to guide the eye through a visual narrative of emergence and growth. Starting from deep blues and purples at the edges, the composition builds toward a luminous center of whites and golds, evoking the energy of a creative spark. This artwork is available as a limited edition of 25 signed prints, each accompanied by a certificate of authenticity.',
    techniques: ['Generative Art', 'Digital Painting', 'Particle Simulation'],
    dimensions: '5000 x 7000 px',
    available: true,
    featured: false,
  },
  {
    id: 9,
    slug: 'tel-aviv-nights',
    title: 'Tel Aviv Nights',
    year: 2023,
    category: 'Contemporary',
    image: '/images/artworks/artwork-09.jpg',
    description: 'The vibrant nightlife of Tel Aviv captured through an expressionist digital painting style.',
    longDescription: 'Tel Aviv Nights is an homage to the city that serves as both home and muse. This piece captures the electric energy of Tel Aviv after dark, transforming its iconic skyline and bustling streets into an expressionist digital painting that pulses with life and color. The Mediterranean blue of the sea blends with the warm amber of street lights and the neon glow of Rothschild Boulevard, creating a palette that is uniquely Tel Aviv. Every brushstroke, though digital, carries the emotional weight of lived experience, translating the sounds, smells, and sensations of the city into pure visual form.',
    techniques: ['Digital Expressionism', 'Urban Photography Blend', 'Light Painting'],
    dimensions: '7000 x 4000 px',
    available: true,
    featured: false,
  },
  {
    id: 10,
    slug: 'synthetic-nature',
    title: 'Synthetic Nature',
    year: 2023,
    category: 'Contemporary',
    image: '/images/artworks/artwork-10.jpg',
    description: 'Where digital creation meets organic beauty, a surreal botanical artwork in vivid digital colors.',
    longDescription: 'Synthetic Nature imagines a world where digital creation and organic growth are indistinguishable. Hyper-detailed botanical forms are rendered in impossible colors and configurations, creating a garden that could only exist in the digital realm. Each plant and flower is a hybrid of real botanical references and pure digital invention, suggesting a future where nature and technology evolve together. The meticulous attention to detail rewards close inspection, revealing fractal patterns and hidden geometries within each organic form. This piece challenges viewers to reconsider the boundary between natural and artificial beauty.',
    techniques: ['Botanical Illustration', 'Fractal Design', 'Color Theory'],
    dimensions: '4500 x 6000 px',
    available: true,
    featured: false,
  },
  {
    id: 11,
    slug: 'pop-architecture',
    title: 'Pop Architecture',
    year: 2025,
    category: 'Pop Art',
    image: '/images/artworks/artwork-11.jpg',
    description: 'Architectural marvels reimagined through a bold pop art filter with striking color contrasts.',
    longDescription: 'Pop Architecture transforms iconic building facades and structural elements into bold graphic compositions that celebrate the art inherent in architectural design. By stripping away photographic realism and replacing it with flat colors, strong outlines, and dramatic contrasts, this piece reveals the hidden beauty of geometric forms that we pass by every day without truly seeing. The pop art treatment democratizes architecture, taking it from the realm of specialists and placing it squarely in popular visual culture. The piece invites viewers to look up, look around, and discover the art that surrounds them in the built environment.',
    techniques: ['Architectural Illustration', 'Pop Art Treatment', 'Vector Design'],
    dimensions: '5000 x 4000 px',
    available: true,
    featured: false,
  },
  {
    id: 12,
    slug: 'emotional-spectrum',
    title: 'Emotional Spectrum',
    year: 2025,
    category: 'Limited Edition',
    image: '/images/artworks/artwork-12.jpg',
    description: 'A limited edition series mapping human emotions onto a vivid color spectrum in digital form.',
    longDescription: 'Emotional Spectrum is an ambitious project that attempts to visualize the full range of human emotional experience through pure color and abstract form. Each section of the composition corresponds to a different emotional state, from the deep purples of melancholy to the bright yellows of joy, the aggressive reds of anger to the serene greens of peace. The transitions between these zones are deliberately ambiguous, reflecting the complex way emotions bleed into one another in real experience. This limited edition piece is available as a series of 15 signed prints, making it a rare and valuable addition to any contemporary art collection.',
    techniques: ['Color Psychology', 'Abstract Expressionism', 'Digital Gradient Art'],
    dimensions: '8000 x 4000 px',
    available: true,
    featured: false,
  },
];

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworks.find((a) => a.slug === slug);
};

export const getFeaturedArtworks = (): Artwork[] => {
  return artworks.filter((a) => a.featured);
};

export const getRelatedArtworks = (currentSlug: string, category?: string, limit = 4): Artwork[] => {
  if (!category) {
    const current = getArtworkBySlug(currentSlug);
    if (!current) return artworks.slice(0, limit);
    category = current.category;
  }
  return artworks
    .filter((a) => a.slug !== currentSlug && a.category === category)
    .slice(0, limit);
};

export const categories = ['All', 'Pop Art', 'Contemporary', 'Commissions', 'Limited Edition'] as const;

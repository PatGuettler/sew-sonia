const bridalModules = import.meta.glob('/public/images/bridal/*', { eager: true, import: 'default' });
const formalModules = import.meta.glob('/public/images/formal/*', { eager: true, import: 'default' });
const alterationsModules = import.meta.glob('/public/images/alterations/*', { eager: true, import: 'default' });

export const bridalImages = Object.values(bridalModules);
export const formalImages = Object.values(formalModules);
export const alterationsImages = Object.values(alterationsModules);

function findImage(modules, filename) {
  const match = Object.entries(modules).find(([path]) =>
    path.endsWith(`/${filename}`)
  );
  return match ? match[1] : null;
}

export const galleryPreviews = {
  bridal: findImage(bridalModules, 'IMG_4289.JPG'),
  formal: findImage(alterationsModules, 'IMG_3460.JPG'),
  alterations: findImage(bridalModules, 'bride-4.jpg'),
};

export const featuredImages = [
  { src: findImage(formalModules, 'bm-fg.jpg'), alt: 'Special Occasion', caption: 'Special Occasion' },
  { src: findImage(bridalModules, 'SA-0072.jpg'), alt: 'Custom Bustle', caption: 'Custom Bustle' },
  { src: findImage(alterationsModules, '1534574339164211092.png'), alt: 'Mother of the bride', caption: 'Mother of the bride' },
];

export const perfectFitImages = [
  { src: findImage(bridalModules, 'IMG_1923.JPG'), alt: 'Lace Wedding Gowns', caption: 'Lace Wedding Gowns' },
  { src: findImage(bridalModules, 'IMG_3893.jpg'), alt: 'Custom Corset Back', caption: 'Custom Corset Back' },
  { src: findImage(alterationsModules, 'IMG_8130.JPEG'), alt: 'Elegant Evening Gowns', caption: 'Elegant Evening Gowns' },
];

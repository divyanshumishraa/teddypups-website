const image = (path) => `/images/media/${path.split('/').pop()}`;

// Puppy inventory copied from the supplied reference page (15 cards).
const puppyRecords = [
  ['Max', 'Maltipoo', 'boy', '3 months', 'Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp', true, 'maltipoo-max-male'],
  ['Korean Teacup Maltipoo', 'Korean Teacup Maltipoo', 'girl', '2 months', 'gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg', true, 'korean-teacup-maltipoo-female'],
  ['Korean Teacup Poodle', 'Korean Teacup Poodle', 'girl', '2 months', 'xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg', false, 'korean-teacup-poodle-female'],
  ['Maltipoo & Cavapoo', 'Maltipoo & Cavapoo', 'boy', '3 months', 'YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg', true, 'maltipoo-cavapoo-male'],
  ['Toy Poodle', 'Toy Poodle', 'boy & girl', '2 months', 'vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg', false, 'toy-poodle-male-female'],
  ['Maltipoo', 'Maltipoo', 'girl', '3 months', '3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg', true, 'maltipoo-female-2'],
  ['Pomeranian', 'Pomeranian', 'girl', '3 months', '3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg', false, 'pomeranian-female'],
  ['Copper', 'Cavapoo', 'boy', '2 months', 'O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg', false, 'copper-male'],
  ['Shih Tzu', 'Shih Tzu', 'girl', '2 months', 'qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg', false, 'shitzu-female'],
  ['Shih Tzu', 'Shih Tzu', 'boy', '2 months', 'crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg', false, 'shitzu-male'],
  ['Maltipoo', 'Maltipoo', 'girl', '2.5 months', 'wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg', false, 'maltipoo-female-1'],
  ['Maltipoo', 'Maltipoo', 'girl', '2 months', 'lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg', false, 'maltipoo-female'],
  ['Korean Teacup Pomeranian', 'Korean Teacup Pomeranian', 'girl', '2 months', 'EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg', false, 'korean-teacup-pomeranian-1'],
  ['Korean Teacup Pomeranian', 'Korean Teacup Pomeranian', 'girl', '2 months', 'vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg', false, 'korean-teacup-pomeranian'],
  ['Korean Teacup Pomeranian', 'Korean Teacup Pomeranian', 'boy', '2 months', 'nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg', false, 'korean-teacup-pomeranian-male'],
];

export const puppies = puppyRecords.map(([name, breed, gender, age, path, video, slug], index) => ({
  id: index + 1,
  name,
  breed,
  gender,
  age,
  slug,
  image: image(path),
  video,
  available: true,
}));

// Four puppy-story frames used around the showroom / concierge sections.
const showroomRecords = [
  ['FHyoHcIosLZE/60f6e7e00a/27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg', 'A tiny apricot teddy bear puppy held up in the TeddyPups showroom'],
  ['Vi-kzyvemRl4/e740ed8a24/27b888_323008bb0f6a41d4bde2a0da7206cd98f001.jpg', 'The apricot teddy bear puppy from the showroom, close up'],
  ['g_e4ebbc7fyG/8276289ae7/27b888_323008bb0f6a41d4bde2a0da7206cd98f002.jpg', 'The apricot teddy bear puppy looking up'],
  ['skvodl2NZiKq/cefab5eee9/27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg', 'The puppy saying hello'],
];
export const showroomImages = showroomRecords.map(([path, alt]) => ({ src: image(path), alt }));

// All eight distinct family-gallery photographs present in the supplied reference HTML.
const familyRecords = [
  ['dI8Jv0KRTiLJ/d2d7e5375b/27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg', 'A happy TeddyPups family with their new puppy'],
  ['TI-WtaFssfQt/c41fb2a387/27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg', 'A happy TeddyPups family with their new puppy'],
  ['j6T9eswP2eS8/59c6879a1d/27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg', 'A happy TeddyPups family with their new puppy'],
  ['HJgL4rRnmReV/533701358f/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg', 'A happy TeddyPups family with their new puppy'],
  ['uc5ANs5jm7r7/7160d8b7b1/27b888_f7f4966e59e94db591784d4ec546682f-mv2.jpg', 'A happy TeddyPups family with their new puppy'],
  ['pRJubyqHw8p7/d58c4c07ee/27b888_b073c5815f7c4f92ad9a57741a653663-mv2.jpg', 'A happy TeddyPups family with their new puppy'],
  ['4wOJk9azop_-/65ecf66bf0/27b888_cfe895dbcc2d4bff85f890be9b496543-mv2.jpg', 'A happy TeddyPups family with their new puppy'],
  ['3h20rIasJCOa/10c307cb1c/27b888_a7e7ab6a931e4c79a798bab9927d396e-mv2.jpg', 'A happy TeddyPups family with their new puppy'],
];
export const families = familyRecords.map(([path, alt]) => ({ src: image(path), alt }));
export const brandLogo = '/images/media/brand-logo.png';

// Contact endpoints are taken from the supplied reference HTML, not placeholders.
export const whatsappFor = (message = "Hi Insta Biz Web, I'd like to discuss a project.") => 'https://wa.me/919898124987?text=' + encodeURIComponent(message);
export const whatsapp = whatsappFor();
export const contactPhone = '+971500000000';
export const contactEmail = 'info@instabizweb.com';
export const socialUrl = 'https://www.instabizweb.com/';

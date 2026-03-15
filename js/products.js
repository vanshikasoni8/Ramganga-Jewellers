// ============================================================
// PRODUCT DATA - Edit names, descriptions, weights here easily
// ============================================================
const PRODUCTS = [
  // ===================== NECKLACES =====================
  { id: 1, name: "Rivaah Kundan Choker", description: "Traditional Kundan choker with intricate gold work and meenakari detailing", category: "necklaces", image: "product-images/img1.webp", material: "22K Gold", gemstone: "Kundan", weight: "45g", featured: true },
  { id: 7, name: "Mangalsutra Chain", description: "Traditional black bead mangalsutra with gold pendant", category: "necklaces", image: "product-images/img7-chain.webp", material: "22K Gold", gemstone: null, weight: "18g", featured: true },
  { id: 9, name: "Ruby Pendant Set", description: "Elegant ruby pendant with matching earrings in gold setting", category: "necklaces", image: "product-images/img9-neck.webp", material: "18K Gold", gemstone: "Ruby", weight: "22g", featured: false },
  { id: 10, name: "Polki Diamond Necklace", description: "Uncut diamond polki necklace in traditional Rajasthani design", category: "necklaces", image: "product-images/img10.jpg", material: "22K Gold", gemstone: "Polki Diamond", weight: "65g", featured: true },
  { id: 17, name: "Layered Chain Necklace", description: "Multi-layered gold chain necklace set with modern appeal", category: "necklaces", image: "product-images/img17-neck.jpg", material: "18K Gold", gemstone: null, weight: "28g", featured: false },
  { id: 18, name: "Choker Necklace Set", description: "Elegant velvet choker with crystal pendant", category: "necklaces", image: "product-images/img18-neck.webp", material: "18K Gold", gemstone: "Crystal", weight: "15g", featured: false },
  { id: 19, name: "Statement Pearl Necklace", description: "Multi-strand pearl necklace with gold clasp", category: "necklaces", image: "product-images/img19-neck.jpg", material: "18K Gold", gemstone: "Pearl", weight: "35g", featured: false },
  { id: 20, name: "Pendant Chain Necklace", description: "Delicate chain with heart-shaped pendant", category: "necklaces", image: "product-images/img20.jpg", material: "Sterling Silver", gemstone: "Cubic Zirconia", weight: "12g", featured: false },
  { id: 21, name: "Beaded Necklace", description: "Colorful beaded necklace with tassel detailing", category: "necklaces", image: "product-images/img21.jpg", material: "Gold & Beads", gemstone: null, weight: "20g", featured: false },
  { id: 37, name: "Minimalist Bar Necklace", description: "Simple gold bar pendant necklace for everyday elegance", category: "necklaces", image: "product-images/img36-neck.webp", material: "14K Gold", gemstone: null, weight: "8g", featured: false },
  { id: 38, name: "Birthstone Necklace", description: "Personalized birthstone pendant necklace", category: "necklaces", image: "product-images/img37.webp", material: "Sterling Silver", gemstone: "Birthstone", weight: "10g", featured: false },
  { id: 39, name: "Lariat Necklace", description: "Adjustable lariat style gold necklace", category: "necklaces", image: "product-images/img38.webp", material: "18K Gold", gemstone: null, weight: "14g", featured: false },

  // ===================== EARRINGS =====================
  { id: 3, name: "Temple Jhumka Earrings", description: "Traditional South Indian temple design jhumkas with ruby drops", category: "earrings", image: "product-images/img3 - jhumka.jpg", material: "22K Gold", gemstone: "Ruby", weight: "18g", featured: false },
  { id: 6, name: "Pearl Chandelier Earrings", description: "Elegant pearl drop earrings with gold detailing", category: "earrings", image: "product-images/img6-ring.webp", material: "18K Gold", gemstone: "Pearl", weight: "12g", featured: true },
  { id: 12, name: "Gold Hoop Earrings", description: "Classic medium-sized gold hoop earrings", category: "earrings", image: "product-images/img12-earings.jpg", material: "18K Gold", gemstone: null, weight: "15g", featured: false },
  { id: 13, name: "Diamond Stud Earrings", description: "Brilliant cut diamond studs in white gold", category: "earrings", image: "product-images/img13 -ear.jpg", material: "18K White Gold", gemstone: "Diamond", weight: "6g", featured: true },
  { id: 14, name: "Chandbali Earrings", description: "Traditional crescent-shaped gold earrings with pearls", category: "earrings", image: "product-images/img14.webp", material: "22K Gold", gemstone: "Pearl", weight: "20g", featured: false },
  { id: 15, name: "Ear Cuff Set", description: "Modern minimalist ear cuff with chain", category: "earrings", image: "product-images/img15.webp", material: "Sterling Silver", gemstone: null, weight: "5g", featured: false },
  { id: 16, name: "Tassel Drop Earrings", description: "Bohemian style tassel earrings with beads", category: "earrings", image: "product-images/img16.webp", material: "Gold Plated", gemstone: "Beads", weight: "10g", featured: false },
  { id: 40, name: "Geometric Stud Earrings", description: "Modern geometric shaped stud earrings", category: "earrings", image: "product-images/img39-ear.jpg", material: "Sterling Silver", gemstone: null, weight: "4g", featured: false },
  { id: 41, name: "Threader Earrings", description: "Delicate chain threader earrings", category: "earrings", image: "product-images/img40.webp", material: "14K Gold", gemstone: null, weight: "3g", featured: false },
  { id: 42, name: "Mismatched Earrings", description: "Trendy mismatched earring pair", category: "earrings", image: "product-images/img41.webp", material: "Mixed Metals", gemstone: null, weight: "7g", featured: false },
  { id: 43, name: "Huggie Hoop Earrings", description: "Small huggie hoops with diamond pave", category: "earrings", image: "product-images/img42.webp", material: "18K Gold", gemstone: "Diamond", weight: "8g", featured: false },
  { id: 44, name: "Climber Earrings", description: "Modern ear climber with crystal trail", category: "earrings", image: "product-images/img44.png", material: "Sterling Silver", gemstone: "Crystal", weight: "5g", featured: false },
  { id: 45, name: "Chandelier Drop Earrings", description: "Elaborate chandelier earrings with multiple tiers", category: "earrings", image: "product-images/img45.webp", material: "22K Gold", gemstone: "Emerald", weight: "25g", featured: false },
  { id: 46, name: "Button Stud Earrings", description: "Classic button-style pearl studs", category: "earrings", image: "product-images/img46.webp", material: "14K Gold", gemstone: "Pearl", weight: "4g", featured: false },
  { id: 47, name: "Dangle Chain Earrings", description: "Long chain dangle earrings with charms", category: "earrings", image: "product-images/img47.jpg", material: "18K Gold", gemstone: null, weight: "9g", featured: false },
  { id: 48, name: "Teardrop Earrings", description: "Elegant teardrop shaped gemstone earrings", category: "earrings", image: "product-images/img48.webp", material: "18K Gold", gemstone: "Sapphire", weight: "11g", featured: false },

  // ===================== RINGS =====================
  { id: 2, name: "Diamond Solitaire Ring", description: "Classic 1 carat diamond solitaire in platinum setting", category: "rings", image: "product-images/img2.jpg", material: "Platinum", gemstone: "Diamond", weight: "8g", featured: true },
  { id: 5, name: "Emerald Cocktail Ring", description: "Statement emerald ring with diamond accents", category: "rings", image: "product-images/img5-ring.webp", material: "18K White Gold", gemstone: "Emerald", weight: "10g", featured: false },
  { id: 11, name: "Sapphire Engagement Ring", description: "Blue sapphire ring with diamond halo setting", category: "rings", image: "product-images/img11.webp", material: "Platinum", gemstone: "Sapphire", weight: "7g", featured: false },
  { id: 34, name: "Rose Gold Band Ring", description: "Minimalist rose gold wedding band", category: "rings", image: "product-images/img34-ring ring.webp", material: "18K Rose Gold", gemstone: null, weight: "5g", featured: false },
  { id: 35, name: "Stackable Ring Set", description: "Set of 3 stackable gold rings with gems", category: "rings", image: "product-images/img34-ring.jpg", material: "14K Gold", gemstone: "Mixed Gems", weight: "12g", featured: false },
  { id: 36, name: "Infinity Ring", description: "Elegant infinity symbol ring with diamonds", category: "rings", image: "product-images/img35.webp", material: "White Gold", gemstone: "Diamond", weight: "6g", featured: false },

  // ===================== BRACELETS =====================
  { id: 4, name: "Antique Gold Bangles", description: "Set of 2 traditional antique finish gold bangles with temple motifs", category: "bracelets", image: "product-images/img4 - bangal.webp", material: "22K Gold", gemstone: null, weight: "40g", featured: true },
  { id: 8, name: "Diamond Tennis Bracelet", description: "Classic diamond tennis bracelet in white gold", category: "bracelets", image: "product-images/img8.webp", material: "18K White Gold", gemstone: "Diamond", weight: "18g", featured: false },
  { id: 49, name: "Rivaah Gold Kada", description: "Traditional 22K gold kada with intricate carved patterns", category: "bracelets", image: "product-images/img49-kada.webp", material: "22K Gold", gemstone: null, weight: "55g", featured: false },
  { id: 50, name: "Mia Diamond Tennis Bracelet", description: "Elegant diamond tennis bracelet with brilliant cut diamonds", category: "bracelets", image: "product-images/img50.webp", material: "18K White Gold", gemstone: "Diamond", weight: "22g", featured: false },
  { id: 51, name: "Virasat Antique Bracelet", description: "Heritage collection antique finish gold bracelet", category: "bracelets", image: "product-images/img51.webp", material: "22K Gold", gemstone: null, weight: "35g", featured: false },
  { id: 52, name: "Divyam Rose Gold Bracelet", description: "Contemporary rose gold chain bracelet with modern design", category: "bracelets", image: "product-images/img52.webp", material: "18K Rose Gold", gemstone: null, weight: "15g", featured: false },
  { id: 53, name: "Ziah Gemstone Bracelet", description: "Colorful gemstone bracelet with emerald and ruby accents", category: "bracelets", image: "product-images/img53.jpg", material: "18K Gold", gemstone: "Emerald, Ruby", weight: "20g", featured: false },
  { id: 54, name: "Mangalsutra Style Bracelet", description: "Traditional black bead and gold bracelet design", category: "bracelets", image: "product-images/img54.jpg", material: "22K Gold", gemstone: null, weight: "12g", featured: false },
  { id: 55, name: "Tanishq Charm Bracelet", description: "Delicate charm bracelet with traditional Indian motifs", category: "bracelets", image: "product-images/img55.webp", material: "18K Gold", gemstone: null, weight: "14g", featured: false },
  { id: 56, name: "Bandhan Gold Link Bracelet", description: "Sophisticated gold link bracelet with secure clasp", category: "bracelets", image: "product-images/img56.webp", material: "22K Gold", gemstone: null, weight: "30g", featured: false },
  { id: 57, name: "Celestial Star Bracelet", description: "Star-themed bracelet with diamond accents", category: "bracelets", image: "product-images/img57.webp", material: "18K White Gold", gemstone: "Diamond", weight: "16g", featured: false },
  { id: 58, name: "Paisley Pattern Cuff", description: "Traditional paisley pattern gold cuff bracelet", category: "bracelets", image: "product-images/img58.webp", material: "22K Gold", gemstone: null, weight: "38g", featured: false },
  { id: 59, name: "Infinity Love Bracelet", description: "Romantic infinity symbol bracelet with heart details", category: "bracelets", image: "product-images/img59.webp", material: "18K Rose Gold", gemstone: null, weight: "10g", featured: false },
  { id: 60, name: "Temple Jewelry Bracelet", description: "South Indian temple style gold bracelet with goddess motifs", category: "bracelets", image: "product-images/img60.webp", material: "22K Gold", gemstone: null, weight: "42g", featured: false },

  // ===================== TOE RINGS =====================
  { id: 22, name: "Silver Toe Rings Set", description: "Set of 6 adjustable silver toe rings with floral design", category: "toerings", image: "product-images/img22 - toe.jpg", material: "Sterling Silver", gemstone: null, weight: "12g", featured: false },
  { id: 23, name: "Gold Toe Rings Pair", description: "Traditional gold toe rings with floral design", category: "toerings", image: "product-images/img23.webp", material: "18K Gold", gemstone: null, weight: "6g", featured: false },
  { id: 24, name: "Kundan Toe Rings", description: "Elegant kundan studded toe rings", category: "toerings", image: "product-images/img24.jpg", material: "Gold Plated", gemstone: "Kundan", weight: "8g", featured: false },
  { id: 25, name: "Minimalist Toe Rings", description: "Simple modern toe rings set of 4", category: "toerings", image: "product-images/img25.webp", material: "Sterling Silver", gemstone: null, weight: "5g", featured: false },
  { id: 62, name: "Braided Silver Toe Ring", description: "Handcrafted braided rope design adjustable toe ring", category: "toerings", image: "product-images/img62.jpg", material: "Sterling Silver", gemstone: null, weight: "3g", featured: false },

  // ===================== PAYAL (ANKLETS) =====================
  { id: 26, name: "Silver Payal with Ghungroo", description: "Traditional silver payal with ghungroo bells", category: "payal", image: "product-images/img26-payal.jpg", material: "Sterling Silver", gemstone: null, weight: "50g", featured: false },
  { id: 27, name: "Elegant Payal", description: "Elegant silver anklets with charms", category: "payal", image: "product-images/img27.webp", material: "Silver", gemstone: null, weight: "35g", featured: false },
  { id: 28, name: "Beaded Ankle Chain", description: "Colorful beaded ankle chain with tassels", category: "payal", image: "product-images/img28.webp", material: "Silver", gemstone: null, weight: "20g", featured: false },
  { id: 29, name: "Pearl Anklet", description: "Delicate pearl anklet with gold chain", category: "payal", image: "product-images/img29.webp", material: "Silver & Pearls", gemstone: "Pearl", weight: "15g", featured: false },
  { id: 61, name: "Oxidized Silver Anklet", description: "Heavy oxidized silver anklet with ghungroo bell danglers", category: "payal", image: "product-images/img61.webp", material: "Oxidized Silver", gemstone: null, weight: "40g", featured: false },

  // ===================== WAIST BANDS =====================
  { id: 30, name: "Gold Kamarbandh", description: "Traditional gold waist belt with motifs for bridal wear", category: "waistband", image: "product-images/img30- kamar.webp", material: "22K Gold", gemstone: null, weight: "120g", featured: true },
  { id: 31, name: "Silver Waist Chain", description: "Elegant silver waist chain with charms", category: "waistband", image: "product-images/img31.jpg", material: "Sterling Silver", gemstone: null, weight: "60g", featured: false },
  { id: 32, name: "Kundan Waist Belt", description: "Royal kundan waist belt for special occasions", category: "waistband", image: "product-images/img32.webp", material: "Gold Plated", gemstone: "Kundan", weight: "80g", featured: false },
  { id: 33, name: "Beaded Waist Chain", description: "Bohemian beaded waist chain with tassels", category: "waistband", image: "product-images/img33.webp", material: "Thread & Beads", gemstone: null, weight: "25g", featured: false },
  { id: 63, name: "Silver Kamarbandh with Jhumka", description: "Elegant silver waist chain with jhumka danglers and floral medallion", category: "waistband", image: "product-images/img63.jpg", material: "Sterling Silver", gemstone: null, weight: "60g", featured: false },

  // ===================== MAANG TIKKA (NEW) =====================
  { id: 101, name: "Kundan Maang Tikka", description: "Traditional kundan-studded maang tikka with pearl drops and antique gold finish", category: "maangtikka", image: "product-images/maangtikka-1.jpg", material: "Gold Plated", gemstone: "Kundan", weight: "15g", featured: true },
  { id: 102, name: "Bridal Matha Patti", description: "Elaborate bridal matha patti with side chains and forehead centerpiece", category: "maangtikka", image: "product-images/maangtikka-2.jpg", material: "22K Gold", gemstone: "Pearl", weight: "35g", featured: false },
  { id: 103, name: "Pearl Drop Maang Tikka", description: "Minimalist pearl drop maang tikka with delicate gold chain", category: "maangtikka", image: "product-images/maangtikka-3.jpg", material: "18K Gold", gemstone: "Pearl", weight: "8g", featured: false },
  { id: 104, name: "Rajasthani Borla Tikka", description: "Heavy Rajasthani borla style tikka with meenakari work and emerald center", category: "maangtikka", image: "product-images/maangtikka-4.jpg", material: "22K Gold", gemstone: "Emerald", weight: "22g", featured: false },
  { id: 105, name: "Contemporary Tikka Set", description: "Modern minimal maang tikka with American diamond and rose gold finish", category: "maangtikka", image: "product-images/maangtikka-5.jpg", material: "Rose Gold Plated", gemstone: "American Diamond", weight: "10g", featured: false },

  // ===================== NOSE RINGS / NATH (NEW) =====================
  { id: 201, name: "Bridal Nath with Chain", description: "Traditional oversized bridal nath with pearl chain connecting to hair", category: "noserings", image: "product-images/nosering-1.jpg", material: "22K Gold", gemstone: "Pearl", weight: "12g", featured: true },
  { id: 202, name: "Diamond Nose Pin", description: "Delicate single diamond nose pin in white gold prong setting", category: "noserings", image: "product-images/nosering-2.jpg", material: "18K White Gold", gemstone: "Diamond", weight: "1.5g", featured: false },
  { id: 203, name: "Kundan Nath Ring", description: "Statement kundan nath with intricate filigree and ruby center stone", category: "noserings", image: "product-images/nosering-3.jpg", material: "Gold Plated", gemstone: "Kundan, Ruby", weight: "8g", featured: false },
  { id: 204, name: "Septum Ring Gold", description: "Elegant gold septum ring with tribal-inspired carved pattern", category: "noserings", image: "product-images/nosering-4.jpg", material: "14K Gold", gemstone: null, weight: "3g", featured: false },
  { id: 205, name: "Clip-on Nose Ring", description: "No-pierce clip-on nose ring with pearl drop and oxidized finish", category: "noserings", image: "product-images/nosering-5.jpg", material: "Sterling Silver", gemstone: "Pearl", weight: "4g", featured: false },

  // ===================== PENDANTS (NEW) =====================
  { id: 301, name: "Ganesh Gold Pendant", description: "Handcrafted Lord Ganesh pendant with temple-style detailing in pure gold", category: "pendants", image: "product-images/pendant-1.jpg", material: "22K Gold", gemstone: null, weight: "10g", featured: true },
  { id: 302, name: "Solitaire Diamond Pendant", description: "Classic round solitaire diamond pendant on delicate white gold chain", category: "pendants", image: "product-images/pendant-2.jpg", material: "18K White Gold", gemstone: "Diamond", weight: "5g", featured: false },
  { id: 303, name: "Evil Eye Pendant", description: "Trendy evil eye pendant with blue sapphire center and diamond halo", category: "pendants", image: "product-images/pendant-3.jpg", material: "14K Gold", gemstone: "Sapphire", weight: "6g", featured: false },
  { id: 304, name: "Heart Locket Pendant", description: "Openable heart locket pendant with photo compartment and engraving", category: "pendants", image: "product-images/pendant-4.jpg", material: "Sterling Silver", gemstone: null, weight: "8g", featured: false },
  { id: 305, name: "Om Pendant with Chain", description: "Sacred Om symbol pendant with diamond-cut finish and matching rope chain", category: "pendants", image: "product-images/pendant-5.jpg", material: "22K Gold", gemstone: null, weight: "12g", featured: false },

  // ===================== CHAINS (NEW) =====================
  { id: 401, name: "Bismark Gold Chain", description: "Heavy bismark pattern gold chain with high polish and secure clasp", category: "chains", image: "product-images/chain-1.jpg", material: "22K Gold", gemstone: null, weight: "30g", featured: false },
  { id: 402, name: "Rope Chain Necklace", description: "Classic twisted rope chain in yellow gold, perfect for pendants", category: "chains", image: "product-images/chain-2.jpg", material: "18K Gold", gemstone: null, weight: "18g", featured: true },
  { id: 403, name: "Box Chain Silver", description: "Modern square box chain in sterling silver with rhodium plating", category: "chains", image: "product-images/chain-3.jpg", material: "Sterling Silver", gemstone: null, weight: "15g", featured: false },
  { id: 404, name: "Cuban Link Chain", description: "Bold Cuban link chain with diamond-cut facets for extra sparkle", category: "chains", image: "product-images/chain-4.jpg", material: "22K Gold", gemstone: null, weight: "45g", featured: false },
  { id: 405, name: "Figaro Chain", description: "Italian-style figaro chain with alternating link pattern and lobster clasp", category: "chains", image: "product-images/chain-5.jpg", material: "18K Gold", gemstone: null, weight: "22g", featured: false },

  // ===================== BROOCHES & PINS (NEW) =====================
  { id: 501, name: "Peacock Saree Brooch", description: "Ornate peacock-shaped brooch with enamel work, ideal for draping sarees", category: "brooches", image: "product-images/brooch-1.jpg", material: "Gold Plated", gemstone: "Emerald, Ruby", weight: "18g", featured: true },
  { id: 502, name: "Diamond Cluster Brooch", description: "Vintage-inspired diamond cluster brooch with floral motif", category: "brooches", image: "product-images/brooch-2.jpg", material: "18K White Gold", gemstone: "Diamond", weight: "12g", featured: false },
  { id: 503, name: "Turban Pin Kalgi", description: "Traditional groom's turban pin kalgi with pearl and kundan work", category: "brooches", image: "product-images/brooch-3.jpg", material: "Gold Plated", gemstone: "Kundan, Pearl", weight: "20g", featured: false },

  // ===================== HAIR ACCESSORIES (NEW) =====================
  { id: 601, name: "Bridal Juda Pin Set", description: "Set of 3 decorative juda pins with kundan stones for bridal bun hairstyle", category: "hairaccessories", image: "product-images/hairpin-1.jpg", material: "Gold Plated", gemstone: "Kundan", weight: "25g", featured: false },
  { id: 602, name: "Pearl Hair Chain", description: "Elegant pearl-studded hair chain that drapes along the parting with side combs", category: "hairaccessories", image: "product-images/hairpin-2.jpg", material: "18K Gold", gemstone: "Pearl", weight: "18g", featured: true },
];

// Category display config
const CATEGORIES = [
  { slug: "necklaces", name: "Necklaces", icon: "fas fa-gem", description: "Elegant necklaces & chokers" },
  { slug: "earrings", name: "Earrings", icon: "fas fa-star", description: "Jhumkas, studs & drops" },
  { slug: "rings", name: "Rings", icon: "fas fa-ring", description: "Engagement & fashion rings" },
  { slug: "bracelets", name: "Bracelets", icon: "fas fa-circle-notch", description: "Bangles, kadas & chains" },
  { slug: "maangtikka", name: "Maang Tikka", icon: "fas fa-sun", description: "Forehead jewelry & matha patti" },
  { slug: "noserings", name: "Nose Rings", icon: "fas fa-circle", description: "Nath, nose pins & septum rings" },
  { slug: "pendants", name: "Pendants", icon: "fas fa-heart", description: "Religious & fashion pendants" },
  { slug: "chains", name: "Chains", icon: "fas fa-link", description: "Gold & silver chains" },
  { slug: "toerings", name: "Toe Rings", icon: "fas fa-adjust", description: "Traditional & modern designs" },
  { slug: "payal", name: "Payal", icon: "fas fa-bell", description: "Anklets with ghungroo" },
  { slug: "waistband", name: "Waist Bands", icon: "fas fa-ribbon", description: "Kamarbandh & belly chains" },
  { slug: "brooches", name: "Brooches", icon: "fas fa-thumbtack", description: "Saree pins & kalgi" },
  { slug: "hairaccessories", name: "Hair Accessories", icon: "fas fa-crown", description: "Juda pins & hair chains" },
];

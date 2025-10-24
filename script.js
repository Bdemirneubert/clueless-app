// Coordinated outfit sets for each style profile
const outfitData = {
    'y2k': {
        outfits: [
            {
                top: { 
                    name: 'Shimmery halter top with holographic details', 
                    emoji: '✨', 
                    color: '#ff9a9e',
                    store: 'Urban Outfitters',
                    suggestion: 'UO Sparkle Mesh Halter Top',
                    price: '$39'
                },
                bottom: { 
                    name: 'Low-rise baggy jeans with rhinestone belt', 
                    emoji: '👖', 
                    color: '#87ceeb',
                    store: 'SHEIN',
                    suggestion: 'Y2K Low Rise Baggy Jeans',
                    price: '$25'
                },
                shoes: { 
                    name: 'Chunky platform sneakers in white', 
                    emoji: '👟', 
                    color: '#ffffff',
                    store: 'Dolls Kill',
                    suggestion: 'Platform Dad Sneakers',
                    price: '$85'
                },
                accessories: { 
                    name: 'Butterfly hair clips + tinted sunglasses + body glitter', 
                    emoji: '🦋', 
                    color: '#ffd700',
                    store: 'Claire\'s',
                    suggestion: 'Y2K Butterfly Clip Set + Retro Sunnies',
                    price: '$15'
                }
            },
            {
                top: { 
                    name: 'Baby tee with butterfly print', 
                    emoji: '🦋', 
                    color: '#ffb6c1',
                    store: 'Brandy Melville',
                    suggestion: 'Butterfly Baby Tee',
                    price: '$20'
                },
                bottom: { 
                    name: 'Pleated mini skirt in holographic fabric', 
                    emoji: '👗', 
                    color: '#dda0dd',
                    store: 'Depop',
                    suggestion: 'Holographic Pleated Skirt',
                    price: '$30'
                },
                shoes: { 
                    name: 'Platform flip-flops with rhinestones', 
                    emoji: '🩴', 
                    color: '#ff69b4',
                    store: 'ASOS',
                    suggestion: 'Rhinestone Platform Slides',
                    price: '$45'
                },
                accessories: { 
                    name: 'Hair tinsel + holographic choker + ring collection', 
                    emoji: '💍', 
                    color: '#40e0d0',
                    store: 'Hot Topic',
                    suggestion: 'Y2K Holographic Accessories Set',
                    price: '$22'
                }
            },
            {
                top: { 
                    name: 'Mesh long-sleeve over colorful bralette', 
                    emoji: '🕸️', 
                    color: '#ff6347',
                    store: 'PacSun',
                    suggestion: 'Mesh Long Sleeve + Neon Bralette',
                    price: '$35'
                },
                bottom: { 
                    name: 'Cargo pants with chain details', 
                    emoji: '⛓️', 
                    color: '#dcdcdc',
                    store: 'Zumiez',
                    suggestion: 'Chain Detail Cargo Pants',
                    price: '$55'
                },
                shoes: { 
                    name: 'Futuristic sneakers with LED lights', 
                    emoji: '💡', 
                    color: '#00ffff',
                    store: 'Adidas',
                    suggestion: 'NMD R1 V2 with LED Accents',
                    price: '$140'
                },
                accessories: { 
                    name: 'Face gems + platform hair ties + iridescent nail polish', 
                    emoji: '💎', 
                    color: '#9370db',
                    store: 'Sephora',
                    suggestion: 'Euphoria Face Gem Kit',
                    price: '$18'
                }
            },
            {
                top: { 
                    name: 'Cropped zip-up hoodie in pastel pink', 
                    emoji: '🎀', 
                    color: '#ffc0cb',
                    store: 'Princess Polly',
                    suggestion: 'Pastel Pink Cropped Zip Hoodie',
                    price: '$42'
                },
                bottom: { 
                    name: 'Flare jeans with embroidered flowers', 
                    emoji: '🌸', 
                    color: '#4169e1',
                    store: 'Free People',
                    suggestion: 'Embroidered Flare Jeans',
                    price: '$98'
                },
                shoes: { 
                    name: 'Knee-high boots with metallic finish', 
                    emoji: '👢', 
                    color: '#c0c0c0',
                    store: 'Steve Madden',
                    suggestion: 'Metallic Knee High Boots',
                    price: '$120'
                },
                accessories: { 
                    name: 'Chunky silver chain necklace + colorful phone case', 
                    emoji: '📱', 
                    color: '#32cd32',
                    store: 'Mejuri',
                    suggestion: 'Chunky Chain Necklace',
                    price: '$65'
                }
            },
            {
                top: { 
                    name: 'Metallic tube top with Y2K graphics', 
                    emoji: '🤖', 
                    color: '#ffd700',
                    store: 'iAM GIA',
                    suggestion: 'Metallic Logo Tube Top',
                    price: '$60'
                },
                bottom: { 
                    name: 'Colorful track pants with side stripes', 
                    emoji: '🏃', 
                    color: '#ff4500',
                    store: 'Adidas',
                    suggestion: 'Adicolor 3-Stripes Track Pants',
                    price: '$70'
                },
                shoes: { 
                    name: 'Colorful Crocs with fun charms', 
                    emoji: '🐊', 
                    color: '#lime',
                    store: 'Crocs',
                    suggestion: 'Classic Clog in Electric Pink',
                    price: '$50'
                },
                accessories: { 
                    name: 'Bucket hat + tiny shoulder bag + mood ring', 
                    emoji: '👜', 
                    color: '#ff1493',
                    store: 'JD Sports',
                    suggestion: 'Y2K Bucket Hat + Mini Bag Set',
                    price: '$28'
                }
            }
        ]
    },
    'dark-academia': {
        outfits: [
            {
                top: { name: 'Cream cable-knit sweater vest', emoji: '🧥', color: '#f5f5dc' },
                bottom: { name: 'High-waisted wide-leg trousers', emoji: '👔', color: '#8b4513' },
                shoes: { name: 'Classic Doc Martens in black', emoji: '🥾', color: '#000000' },
                accessories: { name: 'Wire-rim glasses + leather satchel + vintage watch', emoji: '👓', color: '#654321' }
            },
            {
                top: { name: 'Oxford button-down in crisp white', emoji: '👔', color: '#ffffff' },
                bottom: { name: 'Pleated wool skirt in plaid', emoji: '🏫', color: '#800000' },
                shoes: { name: 'Leather oxfords in brown', emoji: '👞', color: '#8b4513' },
                accessories: { name: 'Pearl earrings + wool beret + classic fountain pen', emoji: '🖋️', color: '#2f4f4f' }
            },
            {
                top: { name: 'Oversized blazer in tweed', emoji: '🎓', color: '#696969' },
                bottom: { name: 'Straight-leg jeans in dark wash', emoji: '👖', color: '#191970' },
                shoes: { name: 'Vintage-style loafers', emoji: '👞', color: '#8b4513' },
                accessories: { name: 'Gold signet ring + tweed newsboy cap + leather journal', emoji: '📚', color: '#8b4513' }
            },
            {
                top: { name: 'Turtleneck in rich burgundy', emoji: '🍷', color: '#800020' },
                bottom: { name: 'Corduroy pants in forest green', emoji: '🌲', color: '#228b22' },
                shoes: { name: 'Knee-high boots in cognac leather', emoji: '👢', color: '#a0522d' },
                accessories: { name: 'Tortoiseshell hair clip + canvas tote + antique brooch', emoji: '📖', color: '#8b4513' }
            },
            {
                top: { name: 'Vintage band tee tucked into high-waisted pants', emoji: '🎵', color: '#2f4f4f' },
                bottom: { name: 'A-line midi skirt in camel', emoji: '🐪', color: '#c19a6b' },
                shoes: { name: 'Canvas sneakers in cream', emoji: '👟', color: '#f5f5dc' },
                accessories: { name: 'Vintage scarf + leather gloves + classic wristwatch', emoji: '⌚', color: '#8b4513' }
            }
        ]
    },
    'cottagecore': {
        outfits: [
            {
                top: { name: 'Puff-sleeve blouse with floral embroidery', emoji: '🌺', color: '#fff8dc' },
                bottom: { name: 'Flowing midi skirt with tiny florals', emoji: '🌼', color: '#f0e68c' },
                shoes: { name: 'Canvas sneakers in cream', emoji: '👟', color: '#f5f5dc' },
                accessories: { name: 'Wicker basket bag + floral headband + delicate rings', emoji: '🧺', color: '#deb887' }
            },
            {
                top: { name: 'Gingham crop top with tie front', emoji: '🎀', color: '#87ceeb' },
                bottom: { name: 'High-waisted mom jeans', emoji: '👖', color: '#4682b4' },
                shoes: { name: 'Mary Jane shoes in brown leather', emoji: '👠', color: '#8b4513' },
                accessories: { name: 'Straw hat + linen scrunchie + pearl necklace', emoji: '👒', color: '#f4a460' }
            },
            {
                top: { name: 'Vintage band tee in soft pastels', emoji: '🎵', color: '#e6e6fa' },
                bottom: { name: 'Linen wide-leg pants in cream', emoji: '👖', color: '#faf0e6' },
                shoes: { name: 'Ankle boots with floral embroidery', emoji: '👢', color: '#8b4513' },
                accessories: { name: 'Cottagecore tote bag + daisy chain bracelet + natural lip balm', emoji: '🌻', color: '#98fb98' }
            },
            {
                top: { name: 'Linen button-up in sage green', emoji: '🌿', color: '#9caf88' },
                bottom: { name: 'Prairie-style maxi skirt', emoji: '🌾', color: '#f5deb3' },
                shoes: { name: 'Birkenstock sandals', emoji: '🩴', color: '#8b4513' },
                accessories: { name: 'Vintage cardigan + flower crown + hemp jewelry', emoji: '👑', color: '#ffb6c1' }
            },
            {
                top: { name: 'Crochet vest over white cotton tee', emoji: '🧶', color: '#f0f8ff' },
                bottom: { name: 'Corduroy overalls in dusty pink', emoji: '👖', color: '#d8bfd8' },
                shoes: { name: 'Ballet flats in soft pink', emoji: '🩰', color: '#ffc0cb' },
                accessories: { name: 'Crochet bag + botanical hair clips + essential oil rollerball', emoji: '🌸', color: '#98fb98' }
            }
        ]
    },
    'streetwear': {
        outfits: [
            {
                top: { 
                    name: 'Oversized graphic hoodie', 
                    emoji: '👕', 
                    color: '#2c2c2c',
                    store: 'Stussy',
                    suggestion: 'World Tour Hoodie',
                    price: '$120'
                },
                bottom: { 
                    name: 'Baggy cargo pants with multiple pockets', 
                    emoji: '👖', 
                    color: '#556b2f',
                    store: 'Dickies',
                    suggestion: 'Carpenter Pants',
                    price: '$65'
                },
                shoes: { 
                    name: 'High-top Converse in classic black', 
                    emoji: '👟', 
                    color: '#000000',
                    store: 'Converse',
                    suggestion: 'Chuck 70 High Top',
                    price: '$85'
                },
                accessories: { 
                    name: 'Snapback cap + chain necklace + crossbody bag', 
                    emoji: '🧢', 
                    color: '#ff4500',
                    store: 'Supreme',
                    suggestion: 'Logo Snapback + Chain Set',
                    price: '$95'
                }
            },
            {
                top: { 
                    name: 'Cropped band tee with vintage wash', 
                    emoji: '🎸', 
                    color: '#696969',
                    store: 'Vintage Band Tees',
                    suggestion: 'Nirvana Cropped Tee',
                    price: '$35'
                },
                bottom: { 
                    name: 'Wide-leg jeans with distressed details', 
                    emoji: '👖', 
                    color: '#4682b4',
                    store: 'Dr. Denim',
                    suggestion: 'Echo Wide Leg Jeans',
                    price: '$90'
                },
                shoes: { 
                    name: 'Chunky dad sneakers', 
                    emoji: '👟', 
                    color: '#ffffff',
                    store: 'Balenciaga',
                    suggestion: 'Triple S Sneakers (dupes at SHEIN)',
                    price: '$60'
                },
                accessories: { 
                    name: 'Beanie + hoop earrings + belt bag', 
                    emoji: '🎧', 
                    color: '#000000',
                    store: 'Carhartt',
                    suggestion: 'Watch Beanie + Accessories',
                    price: '$45'
                }
            },
            {
                top: { 
                    name: 'Baggy long-sleeve with bold graphics', 
                    emoji: '🎨', 
                    color: '#ff6347',
                    store: 'Golf Wang',
                    suggestion: 'Tyler the Creator Long Sleeve',
                    price: '$75'
                },
                bottom: { 
                    name: 'Track pants with side stripes', 
                    emoji: '🏃', 
                    color: '#2f4f4f',
                    store: 'Nike',
                    suggestion: 'Sportswear Club Fleece Joggers',
                    price: '$55'
                },
                shoes: { 
                    name: 'Skate shoes with gum sole', 
                    emoji: '🛹', 
                    color: '#8b4513',
                    store: 'Vans',
                    suggestion: 'Old Skool Pro Gum Sole',
                    price: '$65'
                },
                accessories: { 
                    name: 'Bucket hat + layered chains + phone case with grip', 
                    emoji: '📱', 
                    color: '#ffd700',
                    store: 'Palace',
                    suggestion: 'Logo Bucket Hat',
                    price: '$70'
                }
            }
        ]
    },
    'vsco': {
        outfits: [
            {
                top: { 
                    name: 'Oversized vintage band tee', 
                    emoji: '🎵', 
                    color: '#f0e68c',
                    store: 'Depop',
                    suggestion: 'Vintage Eagles Tour Tee',
                    price: '$40'
                },
                bottom: { 
                    name: 'High-waisted mom jeans', 
                    emoji: '👖', 
                    color: '#4682b4',
                    store: 'Levi\'s',
                    suggestion: '501 Original Mom Jeans',
                    price: '$98'
                },
                shoes: { 
                    name: 'White Vans Old Skool sneakers', 
                    emoji: '👟', 
                    color: '#ffffff',
                    store: 'Vans',
                    suggestion: 'Old Skool Classic White',
                    price: '$60'
                },
                accessories: { 
                    name: 'Shell necklace + scrunchie + reusable water bottle', 
                    emoji: '🐚', 
                    color: '#87ceeb',
                    store: 'Pura Vida',
                    suggestion: 'Shell Necklace + Vsco Girl Pack',
                    price: '$25'
                }
            },
            {
                top: { 
                    name: 'Cropped sweatshirt in sage green', 
                    emoji: '🌿', 
                    color: '#9caf88',
                    store: 'Garage',
                    suggestion: 'Cropped Crew Neck Sweatshirt',
                    price: '$35'
                },
                bottom: { 
                    name: 'Nike running shorts', 
                    emoji: '�', 
                    color: '#2f4f4f',
                    store: 'Nike',
                    suggestion: 'Tempo Luxe Running Shorts',
                    price: '$45'
                },
                shoes: { 
                    name: 'Birkenstock sandals', 
                    emoji: '🩴', 
                    color: '#8b4513',
                    store: 'Birkenstock',
                    suggestion: 'Arizona Soft Footbed',
                    price: '$135'
                },
                accessories: { 
                    name: 'Puka shell bracelet + friendship bracelets + lip balm', 
                    emoji: '💋', 
                    color: '#ffb6c1',
                    store: 'Glossier',
                    suggestion: 'Balm Dotcom + Vsco Accessories',
                    price: '$20'
                }
            }
        ]
    },
    'egirl': {
        outfits: [
            {
                top: { name: 'Black mesh long-sleeve over colorful bralette', emoji: '🕸️', color: '#000000' },
                bottom: { name: 'Plaid mini skirt with chains', emoji: '⛓️', color: '#8b0000' },
                shoes: { name: 'Platform boots with buckles', emoji: '👢', color: '#000000' },
                accessories: { name: 'Chunky chain necklace + colored hair clips + dark lipstick', emoji: '💋', color: '#800080' }
            },
            {
                top: { name: 'Oversized band tee with safety pins', emoji: '📌', color: '#2f4f4f' },
                bottom: { name: 'Ripped black skinny jeans', emoji: '👖', color: '#000000' },
                shoes: { name: 'Chunky black sneakers', emoji: '👟', color: '#000000' },
                accessories: { name: 'Choker collection + LED strip lights + face gems', emoji: '💎', color: '#ff00ff' }
            },
            {
                top: { name: 'Cropped black hoodie', emoji: '🖤', color: '#000000' },
                bottom: { name: 'Cargo pants with straps and buckles', emoji: '⚡', color: '#2f4f4f' },
                shoes: { name: 'Doc Martens with colorful laces', emoji: '🥾', color: '#000000' },
                accessories: { name: 'Hair ribbons + platform hair ties + bold eyeliner', emoji: '🎀', color: '#ff1493' }
            },
            {
                top: { name: 'Fishnet top over black camisole', emoji: '🕷️', color: '#000000' },
                bottom: { name: 'High-waisted black shorts', emoji: '🩳', color: '#000000' },
                shoes: { name: 'Platform Mary Janes', emoji: '👠', color: '#8b0000' },
                accessories: { name: 'Safety pin earrings + mesh bag + colored contacts', emoji: '👁️', color: '#00ffff' }
            },
            {
                top: { name: 'Graphic tee with anime or goth imagery', emoji: '👹', color: '#4b0082' },
                bottom: { name: 'Layered skirts in different lengths', emoji: '👗', color: '#800080' },
                shoes: { name: 'Combat boots with studs', emoji: '🥾', color: '#000000' },
                accessories: { name: 'Collar necklace + anime pins + glittery eyeshadow', emoji: '✨', color: '#ff69b4' }
            }
        ]
    },
    'minimalist': {
        outfits: [
            {
                top: { name: 'White cotton t-shirt', emoji: '👕', color: '#ffffff' },
                bottom: { name: 'High-waisted straight-leg jeans', emoji: '👖', color: '#4682b4' },
                shoes: { name: 'White leather sneakers', emoji: '👟', color: '#ffffff' },
                accessories: { name: 'Gold thin chain necklace + leather watch + structured bag', emoji: '⌚', color: '#ffd700' }
            },
            {
                top: { name: 'Beige cashmere sweater', emoji: '🧥', color: '#f5f5dc' },
                bottom: { name: 'Black tailored trousers', emoji: '👔', color: '#000000' },
                shoes: { name: 'Beige loafers', emoji: '👞', color: '#f5deb3' },
                accessories: { name: 'Simple gold hoops + minimalist ring + neutral tote', emoji: '👜', color: '#daa520' }
            },
            {
                top: { name: 'Black turtleneck', emoji: '🖤', color: '#000000' },
                bottom: { name: 'Beige wide-leg pants', emoji: '👖', color: '#f5deb3' },
                shoes: { name: 'Black ankle boots', emoji: '👢', color: '#000000' },
                accessories: { name: 'Delicate bracelet + classic sunglasses + clean phone case', emoji: '🕶️', color: '#c0c0c0' }
            },
            {
                top: { name: 'Cream silk blouse', emoji: '👔', color: '#fff8dc' },
                bottom: { name: 'White denim in classic cut', emoji: '👖', color: '#ffffff' },
                shoes: { name: 'Nude flats', emoji: '🩰', color: '#ddbea9' },
                accessories: { name: 'Single gold chain + structured crossbody + simple hair tie', emoji: '💼', color: '#daa520' }
            },
            {
                top: { name: 'Gray crew neck sweatshirt', emoji: '👕', color: '#808080' },
                bottom: { name: 'Neutral midi skirt', emoji: '👗', color: '#f5f5dc' },
                shoes: { name: 'Minimalist white sandals', emoji: '🩴', color: '#ffffff' },
                accessories: { name: 'Thin gold rings + leather wallet + neutral scrunchie', emoji: '💍', color: '#daa520' }
            }
        ]
    },
    'grunge': {
        outfits: [
            {
                top: { name: 'Oversized flannel shirt in plaid', emoji: '👔', color: '#8b0000' },
                bottom: { name: 'Ripped black skinny jeans', emoji: '👖', color: '#000000' },
                shoes: { name: 'Classic black Doc Martens', emoji: '🥾', color: '#000000' },
                accessories: { name: 'Leather choker + band patches + dark nail polish', emoji: '🖤', color: '#000000' }
            },
            {
                top: { name: 'Vintage band tee with holes', emoji: '🎸', color: '#2f4f4f' },
                bottom: { name: 'Plaid mini skirt with safety pins', emoji: '📌', color: '#8b0000' },
                shoes: { name: 'Worn-in Converse high-tops', emoji: '👟', color: '#000000' },
                accessories: { name: 'Multiple ear piercings + chain wallet + vintage pins', emoji: '📎', color: '#c0c0c0' }
            },
            {
                top: { name: 'Black leather jacket', emoji: '🧥', color: '#000000' },
                bottom: { name: 'Distressed denim with patches', emoji: '🩹', color: '#4682b4' },
                shoes: { name: 'Combat boots with chains', emoji: '⛓️', color: '#000000' },
                accessories: { name: 'Spiked bracelet + ripped tights + bold dark lipstick', emoji: '💋', color: '#8b0000' }
            },
            {
                top: { name: 'Ripped sweater with patches', emoji: '🕳️', color: '#696969' },
                bottom: { name: 'Black leather pants', emoji: '👖', color: '#000000' },
                shoes: { name: 'Platform shoes with studs', emoji: '👠', color: '#000000' },
                accessories: { name: 'Safety pin jewelry + mesh bag + temporary tattoos', emoji: '🎨', color: '#000000' }
            },
            {
                top: { name: 'Tie-dye long-sleeve in dark colors', emoji: '🌀', color: '#2f4f4f' },
                bottom: { name: 'Torn fishnet tights under shorts', emoji: '🕸️', color: '#000000' },
                shoes: { name: 'Vintage band merch sneakers', emoji: '👟', color: '#8b0000' },
                accessories: { name: 'Skull rings + studded belt + dramatic dark eyeliner', emoji: '💀', color: '#000000' }
            }
        ]
    }
};

// DOM elements
const styleSelector = document.getElementById('style-selector');
const outfitGenerator = document.getElementById('outfit-generator');
const outfitTop = document.getElementById('outfit-top');
const outfitBottom = document.getElementById('outfit-bottom');
const outfitShoes = document.getElementById('outfit-shoes');
const outfitAccessories = document.getElementById('outfit-accessories');
const outfitTopVisual = document.getElementById('outfit-top-visual');
const outfitBottomVisual = document.getElementById('outfit-bottom-visual');
const outfitShoesVisual = document.getElementById('outfit-shoes-visual');
const outfitAccessoriesVisual = document.getElementById('outfit-accessories-visual');
const regenerateBtn = document.getElementById('regenerate-btn');
const backBtn = document.getElementById('back-btn');

let currentStyle = '';
let currentOutfitIndex = 0;
let currentOutfit = null;

// Add event listeners to style buttons
document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentStyle = btn.dataset.style;
        generateOutfit(currentStyle);
        showOutfitGenerator();
    });
});

// Add event listeners to action buttons
regenerateBtn.addEventListener('click', () => {
    generateOutfit(currentStyle);
});

backBtn.addEventListener('click', () => {
    showStyleSelector();
});

// Add event listener for shop all button
document.getElementById('shop-all-btn').addEventListener('click', () => {
    if (currentOutfit) {
        shopAllItems(currentOutfit);
    }
});

// Function to shop all items at once
function shopAllItems(outfit) {
    const items = [outfit.top, outfit.bottom, outfit.shoes, outfit.accessories];
    const button = document.getElementById('shop-all-btn');
    
    // Show feedback
    const originalText = button.textContent;
    button.textContent = '🛍️ Opening Stores...';
    button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
    
    // Open each store with a small delay
    items.forEach((item, index) => {
        setTimeout(() => {
            searchProduct(item.store, item.suggestion);
        }, index * 500); // 500ms delay between each store opening
    });
    
    // Reset button after all stores are opened
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }, 2500);
};

// Function to get random outfit from style
function getRandomOutfit(style) {
    const styleData = outfitData[style];
    return styleData.outfits[Math.floor(Math.random() * styleData.outfits.length)];
}

// Function to generate outfit
function generateOutfit(style) {
    const outfit = getRandomOutfit(style);
    currentOutfit = outfit; // Store current outfit for shopping
    
    // Update text content
    outfitTop.textContent = outfit.top.name;
    outfitBottom.textContent = outfit.bottom.name;
    outfitShoes.textContent = outfit.shoes.name;
    outfitAccessories.textContent = outfit.accessories.name;
    
    // Update visual elements
    outfitTopVisual.textContent = outfit.top.emoji;
    outfitBottomVisual.textContent = outfit.bottom.emoji;
    outfitShoesVisual.textContent = outfit.shoes.emoji;
    outfitAccessoriesVisual.textContent = outfit.accessories.emoji;
    
    // Update visual colors to match the outfit pieces
    outfitTopVisual.style.backgroundColor = outfit.top.color;
    outfitBottomVisual.style.backgroundColor = outfit.bottom.color;
    outfitShoesVisual.style.backgroundColor = outfit.shoes.color;
    outfitAccessoriesVisual.style.backgroundColor = outfit.accessories.color;
    
    // Update shopping information
    updateShoppingInfo('top', outfit.top);
    updateShoppingInfo('bottom', outfit.bottom);
    updateShoppingInfo('shoes', outfit.shoes);
    updateShoppingInfo('accessories', outfit.accessories);
    
    // Calculate and display total price
    updateTotalPrice(outfit);
    
    // Ensure good contrast for the emoji
    adjustTextColor(outfitTopVisual, outfit.top.color);
    adjustTextColor(outfitBottomVisual, outfit.bottom.color);
    adjustTextColor(outfitShoesVisual, outfit.shoes.color);
    adjustTextColor(outfitAccessoriesVisual, outfit.accessories.color);
    
    // Add subtle animation to indicate new outfit
    [outfitTopVisual, outfitBottomVisual, outfitShoesVisual, outfitAccessoriesVisual].forEach(visual => {
        visual.style.transform = 'scale(0.8)';
        setTimeout(() => {
            visual.style.transform = 'scale(1)';
        }, 150);
    });
}

// Function to calculate and update total price
function updateTotalPrice(outfit) {
    const prices = [
        parseFloat(outfit.top.price.replace('$', '')),
        parseFloat(outfit.bottom.price.replace('$', '')),
        parseFloat(outfit.shoes.price.replace('$', '')),
        parseFloat(outfit.accessories.price.replace('$', ''))
    ];
    
    const total = prices.reduce((sum, price) => sum + price, 0);
    document.getElementById('total-cost').textContent = `$${total}`;
}

// Function to update shopping information
function updateShoppingInfo(category, item) {
    const storeElement = document.getElementById(`outfit-${category}-store`);
    const priceElement = document.getElementById(`outfit-${category}-price`);
    const suggestionElement = document.getElementById(`outfit-${category}-suggestion`);
    const shopBtn = document.getElementById(`shop-${category}-btn`);
    
    if (storeElement && priceElement && suggestionElement) {
        storeElement.textContent = item.store;
        priceElement.textContent = item.price;
        suggestionElement.textContent = `"${item.suggestion}"`;
        
        // Update shop button with store-specific action
        shopBtn.onclick = () => {
            searchProduct(item.store, item.suggestion);
        };
    }
}

// Function to search for product (opens search in new tab)
function searchProduct(store, productName) {
    const searchQueries = {
        'Urban Outfitters': `https://www.urbanoutfitters.com/search?q=${encodeURIComponent(productName)}`,
        'SHEIN': `https://us.shein.com/search.html?keywords=${encodeURIComponent(productName)}`,
        'Dolls Kill': `https://www.dollskill.com/search?q=${encodeURIComponent(productName)}`,
        'Claire\'s': `https://www.claires.com/us/search?q=${encodeURIComponent(productName)}`,
        'Brandy Melville': `https://www.brandymelvilleusa.com/search?q=${encodeURIComponent(productName)}`,
        'Depop': `https://www.depop.com/search/?q=${encodeURIComponent(productName)}`,
        'ASOS': `https://www.asos.com/search/?q=${encodeURIComponent(productName)}`,
        'Hot Topic': `https://www.hottopic.com/search?q=${encodeURIComponent(productName)}`,
        'PacSun': `https://www.pacsun.com/search?q=${encodeURIComponent(productName)}`,
        'Zumiez': `https://www.zumiez.com/search?q=${encodeURIComponent(productName)}`,
        'Adidas': `https://www.adidas.com/us/search?q=${encodeURIComponent(productName)}`,
        'Sephora': `https://www.sephora.com/search?keyword=${encodeURIComponent(productName)}`,
        'Princess Polly': `https://us.princesspolly.com/search?q=${encodeURIComponent(productName)}`,
        'Free People': `https://www.freepeople.com/search/?q=${encodeURIComponent(productName)}`,
        'Steve Madden': `https://www.stevemadden.com/search?q=${encodeURIComponent(productName)}`,
        'Mejuri': `https://mejuri.com/shop/search?q=${encodeURIComponent(productName)}`,
        'iAM GIA': `https://iamgia.com/search?q=${encodeURIComponent(productName)}`,
        'Crocs': `https://www.crocs.com/search.html?q=${encodeURIComponent(productName)}`,
        'JD Sports': `https://www.jdsports.com/search/${encodeURIComponent(productName)}`,
        'Stussy': `https://www.stussy.com/search?q=${encodeURIComponent(productName)}`,
        'Dickies': `https://www.dickies.com/search?q=${encodeURIComponent(productName)}`,
        'Converse': `https://www.converse.com/search?q=${encodeURIComponent(productName)}`,
        'Supreme': `https://www.supremenewyork.com/search/${encodeURIComponent(productName)}`,
        'Vintage Band Tees': `https://www.google.com/search?q=${encodeURIComponent(productName + ' vintage band tee')}`,
        'Dr. Denim': `https://drdenim.com/search?q=${encodeURIComponent(productName)}`,
        'Balenciaga': `https://www.balenciaga.com/en-us/search?q=${encodeURIComponent(productName)}`,
        'Carhartt': `https://www.carhartt.com/search?q=${encodeURIComponent(productName)}`,
        'Golf Wang': `https://golfwang.com/search?q=${encodeURIComponent(productName)}`,
        'Nike': `https://www.nike.com/w?q=${encodeURIComponent(productName)}`,
        'Vans': `https://www.vans.com/search.html?q=${encodeURIComponent(productName)}`,
        'Palace': `https://palaceskateboards.com/search/?q=${encodeURIComponent(productName)}`,
        'Levi\'s': `https://www.levi.com/US/en_US/search?q=${encodeURIComponent(productName)}`,
        'Pura Vida': `https://www.puravidabracelets.com/search?q=${encodeURIComponent(productName)}`,
        'Garage': `https://www.garageclothing.com/us/search?q=${encodeURIComponent(productName)}`,
        'Birkenstock': `https://www.birkenstock.com/us/search/?q=${encodeURIComponent(productName)}`,
        'Glossier': `https://www.glossier.com/search?q=${encodeURIComponent(productName)}`
    };
    
    const searchUrl = searchQueries[store] || `https://www.google.com/search?q=${encodeURIComponent(store + ' ' + productName)}`;
    
    // Show user feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '🔍 Searching...';
    button.style.background = '#4CAF50';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'rgba(255, 255, 255, 0.9)';
    }, 1500);
    
    // Open search in new tab
    window.open(searchUrl, '_blank');
}

// Function to adjust text color for better contrast
function adjustTextColor(element, backgroundColor) {
    // Convert hex to RGB to determine if background is light or dark
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Use dark text on light backgrounds, light text on dark backgrounds
    element.style.color = luminance > 0.5 ? '#2c2c2c' : '#ffffff';
}

// Function to show outfit generator
function showOutfitGenerator() {
    styleSelector.style.display = 'none';
    outfitGenerator.style.display = 'block';
}

// Function to show style selector
function showStyleSelector() {
    outfitGenerator.style.display = 'none';
    styleSelector.style.display = 'block';
}

// Add some fun interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects and animations
    document.querySelectorAll('.style-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
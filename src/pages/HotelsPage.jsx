import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const corbettResorts = [
  {
    slug: 'aamaghati-wildlife-resort',
    title: 'Aamaghati Wildlife Resort',
    starRating: '5',
    ratingLabel: '5-Star',
    starCount: 5,
    price: '₹18,719',
    priceUnit: '/night',
    image: '/images/Overview.webp',
    description: 'A wildlife resort in Ranthambore, designed in harmony with nature and close to the national park.'
  },
  {
    slug: 'the-jungle-book-corbett',
    title: 'The Jungle Book Corbett',
    starRating: '3',
    ratingLabel: '3-Star',
    starCount: 3,
    price: '₹3,999',
    priceUnit: '/night',
    image: '/images/Jungle-Book-4.webp',
    description: 'Nature resort in Semal Khalia, offering spacious rooms and cottages amid peaceful surroundings with easy access to Dhela and Jhirna safari zones.'
  },
  {
    slug: 'tiaraa-corbett',
    title: 'Tiaraa Corbett',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹4,799',
    priceUnit: '/night',
    image: '/images/Tiaraa-2.webp',
    description: 'Luxury resort in Shivlalpur, Ramnagar, offering premium rooms, landscaped surroundings, a spa and curated nature experiences near Jim Corbett.'
  },
  {
    slug: 'serenity-corbett-resort',
    title: 'Serenity Corbett Resort',
    starRating: '3',
    ratingLabel: '3-Star',
    starCount: 3,
    price: '₹4,799',
    priceUnit: '/night',
    image: '/images/Serenity-7.webp',
    description: 'Nature resort in Dhikuli, set amid a mango orchard near the Kosi River with forest views and convenient access to Bijrani and Dhikala safari zones.'
  },
  {
    slug: 'clarissa-resort',
    title: 'Clarissa Resort',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹4,999',
    priceUnit: '/night',
    image: '/images/Clarissa-2.webp',
    description: 'Forest-side resort on Jhirna Road, offering spacious rooms and cottages amid lush greenery with convenient access to nearby safari zones.'
  },
  {
    slug: 'the-maasai-mara',
    title: 'The Maasai Mara',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹5,499',
    priceUnit: '/night',
    image: '/images/98f6da4f-8f4d-4ece-908c-c7feb7bbf4cc-2.webp',
    description: 'A fun-filled resort in Chhoi, Jim Corbett, combining comfortable stays with a swimming pool, water park and adventure activities for families and groups.'
  },
  {
    slug: 'silvanza-resort-by-nivanta',
    title: 'Silvanza Resort by Nivanta',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹5,499',
    priceUnit: '/night',
    image: '/images/Silvanza.webp',
    description: 'Nature-focused resort in Dhikuli, offering comfortable rooms and cottages, landscaped spaces and a relaxed stay near Jim Corbett.'
  },
  {
    slug: 'alaya-resort-corbett',
    title: 'Alaya Resort Corbett',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹5,499',
    priceUnit: '/night',
    image: '/images/Alaya-2.webp',
    description: 'Nature resort in Kyari Kham, surrounded by dense greenery and mountain landscapes, with spacious rooms and outdoor adventure activities.'
  },
  {
    slug: 'tiger-camp-resort',
    title: 'Tiger Camp Resort',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹5,499',
    priceUnit: '/night',
    image: '/images/Tiger-3.webp',
    description: 'Riverside nature resort in Dhikuli, uniquely set between the Kosi River and Corbett’s forest, with cottages and scenic wilderness views'
  },
  {
    slug: 'the-river-edge-corbett',
    title: 'The River Edge Corbett',
    starRating: '3',
    ratingLabel: '3-Star',
    starCount: 3,
    price: '₹5,499',
    priceUnit: '/night',
    image: '/images/River-Edge-3.webp',
    description: 'Boutique riverside resort in Dhikuli, set directly on the Kosi River with intimate river views and just 16 well-appointed rooms.'
  },
  {
    slug: 'corbett-machaan-resort',
    title: 'Corbett Machaan Resort',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹5,999',
    priceUnit: '/night',
    image: '/images/Savanna-Cottage-07.webp',
    description: 'Nature resort in Teda Village, set beside the reserve forest with cottage-style stays, lush greenery and a true wilderness atmosphere.'
  },
  {
    slug: 'abn-sarovar-portico',
    title: 'ABN Sarovar Portico, Jim Corbett',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹6,599',
    priceUnit: '/night',
    image: '/images/bdd86e32-f7ab-41a1-a97f-889bb2a1b7c3-2.webp',
    description: 'Modern stay in Dhikuli, offering spacious rooms and cottages along with a swimming pool, spa and recreation facilities for a comfortable Corbett getaway.'
  },
  {
    slug: 'evara-spa-resort',
    title: 'Evara Spa & Resort',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹6,999',
    priceUnit: '/night',
    image: '/images/6d4d24fd-0ebf-4b95-8eed-e82d5f0a368e-2.webp',
    description: 'A peaceful Corbett resort with comfortable stays, a spa, swimming pool and private pool villas.'
  },
  {
    slug: 'bel-la-monde-corbett',
    title: 'Bel La Monde Corbett',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹6,999',
    priceUnit: '/night',
    image: '/images/Bel-La-2.webp',
    description: 'Luxury riverside resort in Dhikuli, set along the Kosi River with spacious rooms, cottages and scenic riverfront surroundings.'
  },
  {
    slug: 'anantum-gateway-resorts',
    title: 'Anantum Gateway Resort',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹6,999',
    priceUnit: '/night',
    image: '/images/Anantum-2.webp',
    description: 'Luxury resort on Dhela Road, offering spacious rooms, premium cottages, private plunge pools and extensive green surroundings.'
  },
  {
    slug: 'corbett-river-creek',
    title: 'Corbett River Creek',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹6,999',
    priceUnit: '/night',
    image: '/images/CRC-2.webp',
    description: 'Luxury riverside resort in Marchula, set along the Ramganga River with mountain views, spacious stays and peaceful forest surroundings.'
  },
  {
    slug: 'twamev-corbett',
    title: 'Twamev Corbett',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹7,499',
    priceUnit: '/night',
    image: '/images/30d35657-2a28-4418-b0dc-71a6352f0aad.webp',
    description: 'Luxury nature retreat in Patkote, offering spacious stays and private plunge pool rooms amid peaceful forest surroundings.'
  },
  {
    slug: 'infinity-resort-corbett',
    title: 'Infinity Resort Corbett',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹7,999',
    priceUnit: '/night',
    image: '/images/Infinity-2.webp',
    description: 'Established nature resort in Dhikuli, spread across 22 acres with Kosi River views, landscaped gardens and Himalayan surroundings.'
  },
  {
    slug: 'corbett-elegant-retreat',
    title: 'Corbett Elegant Retreat',
    starRating: '5',
    ratingLabel: '5-Star',
    starCount: 5,
    price: '₹8,999',
    priceUnit: '/night',
    image: '/images/d57a390e-695f-4078-b686-bdad9a25c799-2.webp',
    description: 'A spacious luxury resort in Chhoi with 110 rooms and suites, a swimming pool, spa and large event spaces, suited to family holidays, group stays and destination celebrations.'
  },
  {
    slug: 'the-golden-tusk-resort',
    title: 'The Golden Tusk Resort',
    starRating: '5',
    ratingLabel: '5-Star',
    starCount: 5,
    price: '₹9,750',
    priceUnit: '/night',
    image: '/images/Golden-2.webp',
    description: 'Luxury resort in Dhela, set beside the reserve forest with easy access to Dhela and Jhirna safari zones.'
  },
  {
    slug: 'bellmont-caves-resort',
    title: 'Bellmont Caves Resort',
    starRating: '5',
    ratingLabel: '5-Star',
    starCount: 5,
    price: '₹9,999',
    priceUnit: '/night',
    image: '/images/Bellmont-3.webp',
    description: 'Unique cave-themed luxury resort in Bhakrakot, offering spacious cave-style rooms, forest surroundings and easy access towards Dhikala.'
  },
  {
    slug: 'hridayesh-resort',
    title: 'Hridayesh Resort',
    starRating: '5',
    ratingLabel: '5-Star',
    starCount: 5,
    price: '₹10,499',
    priceUnit: '/night',
    image: '/images/the-hridayesh-wilderness-4.webp',
    description: 'Luxury riverside resort in Dhikuli, spread across 8.25 acres along the Kosi River with premium villas and lush green surroundings.'
  },
  {
    slug: 'tarangi-resort-corbett',
    title: 'Tarangi Resort',
    starRating: '5',
    ratingLabel: '5-Star',
    starCount: 5,
    price: '₹10,750',
    priceUnit: '/night',
    image: '/images/Tarangi-2.webp',
    description: 'Luxury riverside resort in Dhikuli, offering Kosi River and Sitabani forest views with premium cottages and villas.'
  },
  {
    slug: 'manu-maharani-resort',
    title: 'Manu Maharani',
    starRating: '4',
    ratingLabel: '4-Star',
    starCount: 4,
    price: '₹12,499',
    priceUnit: '/night',
    image: '/images/90c58ab6-b0c7-4c7e-b4dc-889322141d30-2-1.webp',
    description: 'Luxury riverside resort in Dhikuli, set along the Kosi River with scenic forest and hill views in Jim Corbett.'
  },
  {
    slug: 'aahana-resort',
    title: 'Aahana Resort',
    starRating: '5',
    ratingLabel: '5-Star',
    starCount: 5,
    price: 'Dynamic rates',
    priceUnit: '',
    image: '/images/Aahana-3.webp',
    description: 'Luxury forest resort on the boundary of Jim Corbett, known for nature-focused stays, premium villas and easy access to Dhela and Jhirna safari zones.'
  }
];

export default function HotelsPage() {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedPriceTier, setSelectedPriceTier] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');
  const [searchQuery, setSearchQuery] = useState('');

  const parsePrice = (priceStr) => {
    if (!priceStr || priceStr.toLowerCase().includes('dynamic')) return 99999;
    const num = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    return isNaN(num) ? 99999 : num;
  };

  const filteredResorts = useMemo(() => {
    let list = corbettResorts.filter((r) => {
      const matchesRating = selectedRating === 'all' || r.starRating === selectedRating;
      const numPrice = parsePrice(r.price);
      const matchesPrice = selectedPriceTier === 'all' ||
        (selectedPriceTier === 'under-5k' && numPrice < 5000) ||
        (selectedPriceTier === '5k-8k' && numPrice >= 5000 && numPrice <= 8000) ||
        (selectedPriceTier === 'above-8k' && numPrice > 8000);

      const matchesSearch = !searchQuery.trim() ||
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRating && matchesPrice && matchesSearch;
    });

    if (sortBy === 'price-low') {
      list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === 'price-high') {
      list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortBy === 'rating') {
      list = [...list].sort((a, b) => b.starCount - a.starCount);
    }

    return list;
  }, [selectedRating, selectedPriceTier, sortBy, searchQuery]);

  return (
    <div className="atl-page-wrap">
      {/* Hero Section Container */}
      <div className="atl-hero-wrap" style={{ padding: '16px 16px 0' }}>
        <div
          className="atl-hero-card"
          style={{
            background: '#f8f4ea',
            borderRadius: '32px',
            padding: '20px 24px 40px',
            border: '1px solid rgba(58, 43, 20, 0.15)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.03)'
          }}
        >
          <Header />
          <div className="atl-page-title" style={{ textAlign: 'left', padding: '24px 8px 8px' }}>
            <nav className="atl-breadcrumb" style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link to="/" style={{ color: 'inherit' }}>Home</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="atl-shrink-0">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="atl-breadcrumb-current">Resorts in Jim Corbett</span>
            </nav>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(58, 43, 20, 0.16)', border: '1px solid rgba(58, 43, 20, 0.4)', padding: '4px 12px', borderRadius: '9999px', marginBottom: '8px' }}>
              <Sparkles size={13} style={{ color: '#3a2b14' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#785300' }}>
                Handpicked 25+ Properties
              </span>
            </div>
            <h1 className="atl-page-title-heading" style={{ textAlign: 'left', margin: '8px 0 12px' }}>
              Resorts in Jim Corbett
            </h1>
            <div className="atl-page-title-text" style={{ textAlign: 'left', margin: 0, maxWidth: '640px' }}>
              <p style={{ textAlign: 'left' }}>
                GTI Travels Pvt. Ltd. works closely with resorts in Jim Corbett and helps travellers choose their stay based on budget, location, safari plans and the type of holiday they are looking for.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Filter Bar Section: Star Rating, Price Tiers, Search & Sort */}
        <section className="atl-container" style={{ paddingTop: '36px' }}>
          <div className="atl-filter-bar">

            {/* Top Row: Star Ratings & Price Tiers */}
            <div className="atl-filter-top-row">
              {/* Star Rating Group */}
              <div className="atl-hotel-filter-group">
                {/* <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--atl-ink-700)', marginRight: '4px', flexShrink: 0 }}>Rating:</span> */}
                <button
                  type="button"
                  className={`atl-hotel-filter-chip ${selectedRating === 'all' ? 'is-active' : ''}`}
                  onClick={() => setSelectedRating('all')}
                >
                  <span>All</span>
                  <span style={{ fontSize: '10.5px', opacity: 0.85 }}>({corbettResorts.length})</span>
                </button>
                <button
                  type="button"
                  className={`atl-hotel-filter-chip ${selectedRating === '3' ? 'is-active' : ''}`}
                  onClick={() => setSelectedRating('3')}
                >
                  <div  style={{color:'#ffc107', fontSize:'14px',lineHeight:1}}>
                    ★★★
                  </div>
                </button>
                <button
                  type="button"
                  className={`atl-hotel-filter-chip ${selectedRating === '4' ? 'is-active' : ''}`}
                  onClick={() => setSelectedRating('4')}
                >
                 <div  style={{color:'#ffc107', fontSize:'14px',lineHeight:1}}>
                    ★★★★
                  </div>
                </button>
                <button
                  type="button"
                  className={`atl-hotel-filter-chip ${selectedRating === '5' ? 'is-active' : ''}`}
                  onClick={() => setSelectedRating('5')}
                >
                <div  style={{color:'#ffc107', fontSize:'14px',lineHeight:1}}>
                    ★★★★★
                  </div>
                </button>
              </div>

              {/* Price Range Filter */}
              <div className="atl-hotel-filter-group">
                {/* <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--atl-ink-700)', marginRight: '4px', flexShrink: 0 }}>Budget:</span> */}
                <button
                  type="button"
                  className={`atl-hotel-filter-chip ${selectedPriceTier === 'all' ? 'is-active' : ''}`}
                  onClick={() => setSelectedPriceTier('all')}
                >
                  Budget
                </button>
                <button
                  type="button"
                  className={`atl-hotel-filter-chip ${selectedPriceTier === 'under-5k' ? 'is-active' : ''}`}
                  onClick={() => setSelectedPriceTier('under-5k')}
                >
                  Under ₹5k
                </button>
                <button
                  type="button"
                  className={`atl-hotel-filter-chip ${selectedPriceTier === '5k-8k' ? 'is-active' : ''}`}
                  onClick={() => setSelectedPriceTier('5k-8k')}
                >
                  ₹5k – ₹9k
                </button>
                <button
                  type="button"
                  className={`atl-hotel-filter-chip ${selectedPriceTier === 'above-8k' ? 'is-active' : ''}`}
                  onClick={() => setSelectedPriceTier('above-8k')}
                >
                  ₹9k+ 
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 25 Jim Corbett Resorts Grid with Elevated Hover & Action Controls */}
        <section className="atl-container" style={{ paddingTop: '32px', paddingBottom: '96px' }}>
          <div id="atl-hotel-grid" className="atl-grid atl-gap-6">
            {filteredResorts.map((resort) => (
              <div
                key={resort.slug}
                className="atl-col-12 atl-md-col-6 atl-lg-col-4 atl-lift-card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Link
                  to={`/hotel/${resort.slug}/`}
                  aria-label={resort.title}
                  className="atl-hotel-card-media"
                >
                  <img
                    width="1024"
                    height="683"
                    src={resort.image}
                    className="atl-img-cover wp-post-image"
                    alt={resort.title}
                    loading="lazy"
                  />
                  <span className="atl-star-badge">
                    <span className="atl-star-badge-stars">
                      {Array.from({ length: resort.starCount }).map((_, i) => (
                        <svg
                          key={i}
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="#eab308"
                          stroke="#eab308"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15 9 22 9.5 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.5 9 9" />
                        </svg>
                      ))}
                    </span>
                    {resort.ratingLabel}
                  </span>
                </Link>
                <div className="atl-hotel-card-body">
                  <div className="atl-hotel-card-title-row">
                    <h3 className="atl-hotel-card-title">{resort.title}</h3>
                    <span className="atl-hotel-card-price" style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.15 }}>
                      {resort.price}
                      {resort.priceUnit && <span style={{ fontSize: '13px', fontWeight: 500, opacity: 0.75 }}>{resort.priceUnit}</span>}
                    </span>
                  </div>

                  {/* Location Context Badge: Riverside / Cityside */}
                  <div style={{ margin: '8px 0 10px' }}>
                    <span
                      style={{
                        background: 'rgba(58, 43, 20, 0.08)',
                        color: '#3a2b14',
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(58, 43, 20, 0.2)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {resort.title.toLowerCase().includes('river') ||
                        resort.description.toLowerCase().includes('kosi') ||
                        resort.description.toLowerCase().includes('ramganga') ||
                        resort.description.toLowerCase().includes('riverside') ||
                        ['tiger-camp-resort', 'the-river-edge-corbett', 'serenity-corbett-resort', 'bel-la-monde-corbett', 'corbett-river-creek', 'infinity-resort-corbett', 'hridayesh-resort', 'tarangi-resort-corbett', 'manu-maharani-resort'].includes(resort.slug)
                        ? 'Riverside'
                        : 'Cityside'}
                    </span>
                  </div>

                  <p className="atl-hotel-card-text">{resort.description}</p>

                  {/* Dual Action Row: Details + 1-Click WhatsApp Quote */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(208, 197, 175, 0.35)' }}>
                    <Link to={`/hotel/${resort.slug}/`} className="atl-hotel-card-cta" style={{ margin: 0 }}>
                      <span>Explore Details</span>
                      <ArrowRight size={15} />
                    </Link>
                    {/* <a
                      href={`https://wa.me/919315517530?text=Hello%20GTI%20Travels%20Pvt.%20Ltd.!%20Please%20share%20room%20availability%20and%20rates%20for%20${encodeURIComponent(resort.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="atl-card-whatsapp-quick"
                      title="Instant WhatsApp Quote"
                    >
                      <span>WhatsApp</span>
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResorts.length === 0 && (
            <div id="atl-hotel-empty" className="atl-empty-state">
              <p>No resorts match your search or filter — try another keyword or star rating.</p>
            </div>
          )}
        </section>

        {/* About These Stays Section */}
        <section className="atl-bg-white atl-border-t atl-full-bleed" style={{ padding: '56px 0 96px' }}>
          <div className="atl-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', textAlign: 'left' }}>
            <span className="atl-kicker-caps">About These Stays</span>
            <h2 className="atl-section-title" style={{ fontSize: '28px' }}>
              How to Choose the Right Resort in Jim Corbett
            </h2>
            <div style={{ color: 'var(--atl-ink-700)', fontSize: '16px', lineHeight: '27px', margin: 0, width: '100%' }}>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                Choosing the right resort in Jim Corbett depends on more than its star category. Location, safari plans, travelling companions and the kind of experience you want can make a significant difference to your stay.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                If jungle safari is the main purpose of your trip, consider your safari zone while selecting the resort. Travellers looking for a relaxing holiday may instead prioritise a riverside location, forest surroundings, resort activities or easy access to the main Corbett tourism areas.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                Families travelling with children can look for resorts with open lawns, swimming pools, kids' activities and recreational facilities, while couples may prefer quieter riverside or nature-focused properties. For groups and corporate trips, room inventory, common spaces, dining arrangements and activity options become more important.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '28px' }}>
                Our recommendation is simple: choose your Corbett resort according to how you plan to spend your trip, rather than selecting on star rating alone.
              </p>

              <h2 style={{ textAlign: 'left', fontSize: '24px', margin: '28px 0 14px', color: 'var(--atl-ink-900)' }}>
                Best Areas to Stay in Jim Corbett
              </h2>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                Jim Corbett is spread across different tourism areas, and the location of your resort can influence your overall experience.
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ textAlign: 'left' }}>
                  <strong>Dhikuli :</strong> Dhikuli is one of the most popular resort belts in Jim Corbett, with several established properties along and around the Kosi River. It is a good choice for travellers looking for riverside stays, restaurants and convenient access to the main Corbett tourism belt.
                </li>
                <li style={{ textAlign: 'left' }}>
                  <strong>Dhela &amp; Jhirna Side :</strong> This area is particularly useful for travellers whose safari is booked in the Dhela or Jhirna zones. Several resorts here combine a quieter setting with convenient access towards the safari entry points.
                </li>
                <li style={{ textAlign: 'left' }}>
                  <strong>Kyari :</strong> Kyari is suited to travellers looking for a more nature-oriented stay away from the busier resort belt. Properties in and around this area are often chosen for peaceful surroundings and outdoor experiences.
                </li>
                <li style={{ textAlign: 'left' }}>
                  <strong>Ramnagar : </strong>Ramnagar is the main gateway town for Jim Corbett and offers convenient access to transport, markets and essential services. It can work well for travellers who prioritise accessibility and value over a secluded resort setting.
                </li>
                <li style={{ textAlign: 'left' }}>
                  <strong>Mohan &amp; Marchula Side : </strong>For travellers who prefer quieter landscapes and are comfortable staying farther from the central Corbett tourism belt, the Mohan and Marchula side offers a more secluded experience surrounded by forest, hills and river landscapes.
                </li>
              </ul>

              <h2 style={{ textAlign: 'left', fontSize: '24px', margin: '28px 0 14px', color: 'var(--atl-ink-900)' }}>
                Find a Jim Corbett Resort by Your Travel Style
              </h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ textAlign: 'left' }}>
                  <strong>Riverside Resorts in Jim Corbett :</strong> If staying close to a river is important to you, Corbett has several resorts along the Kosi and Ramganga rivers. Riverside properties are particularly popular with couples, families and leisure travellers who want to spend more time at the resort rather than using it only as a base for safari.
                </li>
                <li style={{ textAlign: 'left' }}>
                  <strong>Family Resorts in Jim Corbett :</strong> Families should look beyond star ratings and compare open spaces, kids' activities, swimming pools, indoor and outdoor games, room configuration and meal options. Resorts with enough on-property activities are particularly useful when travelling with younger children.
                </li>
                <li style={{ textAlign: 'left' }}>
                  <strong>Luxury Resorts in Jim Corbett :</strong> Luxury stays in Jim Corbett range from established riverside resorts to nature retreats with premium rooms, villas, landscaped grounds, spas and curated dining experiences. The right choice depends on whether you value location, room quality, river access, activities or a quieter setting.
                </li>
                <li style={{ textAlign: 'left' }}>
                  <strong>Resorts Near Safari Zones :</strong> If safari is the priority, first confirm your allotted safari zone and then consider the location of your resort. A property closer to the relevant side of Corbett can make early-morning safari departures more convenient and reduce unnecessary road travel.
                </li>
              </ul>

              <h2 style={{ textAlign: 'left', fontSize: '24px', margin: '28px 0 14px', color: 'var(--atl-ink-900)' }}>
                How Much Do Resorts in Jim Corbett Cost?
              </h2>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                Resort prices in Jim Corbett vary considerably depending on the property, room category, meal plan, travel date and season. Budget and comfortable stays can start below ₹5,000 per night, while premium and luxury resorts may range from approximately ₹7,000 to ₹15,000+ per night. High-demand weekends, festive dates and holiday periods can be significantly more expensive.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '28px' }}>
                <strong>Tip:</strong> Compare the meal plan along with the room rate. A lower room-only price may not always offer better overall value than a package including breakfast or all meals.
              </p>

              <h2 style={{ textAlign: 'left', fontSize: '24px', margin: '28px 0 14px', color: 'var(--atl-ink-900)' }}>
                Local Tips Before Booking a Resort in Jim Corbett
              </h2>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                <strong>Confirm your safari zone before choosing the resort.</strong><br />
                If safari is an important part of your trip, knowing the zone can help you select a more convenient location.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                <strong>Don't choose only by star rating.</strong><br />
                Two resorts in the same category can offer very different experiences in terms of location, room size, activities, river setting and overall atmosphere.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                <strong>Check exactly what “riverside” means.</strong><br />
                River-facing, river-adjacent and direct river access are not necessarily the same experience. Confirm what the property actually offers before booking.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                <strong>Families should check resort activities.</strong><br />
                If you're travelling with children, lawns, games, kids' activities and evening entertainment can matter as much as the room itself.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                <strong>Expect seasonal pricing.</strong><br />
                Corbett resort rates can change considerably on weekends, long weekends, festive dates and during high-demand travel periods.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '12px', fontWeight: 700, color: 'var(--atl-ink-900)' }}>
                GTI Travels Pvt. Ltd.'s Corbett Stay Tip
              </p>
              <p style={{ textAlign: 'left', marginBottom: '16px' }}>
                <strong>For a safari-focused trip:</strong> Choose your safari zone first and resort location second.<br />
                <strong>For a family holiday:</strong> Prioritise resort activities, open spaces and meal options.<br />
                <strong>For a couple's getaway:</strong> Consider quieter nature or riverside properties.<br />
                <strong>For a luxury break:</strong> Compare the actual room category, location and resort experience rather than relying only on the star rating.
              </p>
              <p style={{ textAlign: 'left', marginTop: '18px', color: 'var(--atl-ink-900)' }}>
                <strong>Need help choosing? Talk to our Jim Corbett team for recommendations based on your travel dates, budget and safari plans.</strong>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

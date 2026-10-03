import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPage() {
  const articles = [
    {
      slug: 'riverside-resorts-in-jim-corbett',
      title: 'Riverside Resorts in Jim Corbett: Top Handpicked Stays by the Kosi River',
      date: 'September 19, 2026',
      author: 'GTI TRAVELS PVT LTD Editorial Desk',
      image: '/images/home_hero_image_1.webp',
      excerpt: 'Discover why listening to the gentle murmur of the Kosi river while sitting in your private balcony is the ultimate wilderness luxury. Here are our top handpicked riverside lodges in Jim Corbett.'
    },
    {
      slug: 'jim-corbett-safari-zones-guide',
      title: 'Which Safari Zone Has the Highest Tiger Sighting Chance in Corbett?',
      date: 'August 28, 2026',
      author: 'Senior Wildlife Naturalist',
      image: '/images/home_hero_image_3.webp',
      excerpt: 'From the grasslands of Dhikala to the thick sal canopy of Bijrani and Jhirna, we compare the top zones in Jim Corbett National Park to help you plan your safari dates.'
    },
    {
      slug: 'nainital-vs-bhimtal-where-to-stay',
      title: 'Nainital vs Bhimtal: Choosing the Right Lake Town for Your Mountain Holiday',
      date: 'August 14, 2026',
      author: 'Travel Concierge',
      image: '/images/fba300e0-8988-4170-9e14-3e06ef193c12-2-1.webp',
      excerpt: 'Should you pick the lively colonial charm of Nainital or the tranquil serenity of Bhimtal? Here is our comprehensive comparison on views, resorts, and accessibility.'
    }
  ];

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
          <div className="atl-page-title" style={{ textAlign: 'center', padding: '24px 8px 8px' }}>
            <nav className="atl-breadcrumb" style={{ justifyContent: 'center', marginBottom: '14px' }}>
              <Link to="/">Home</Link>
              <span style={{ opacity: 0.5 }}>/</span>
              <span className="atl-breadcrumb-current">Blog</span>
            </nav>
            <span className="atl-kicker-caps">Blog</span>
            <h1 className="atl-page-title-heading" style={{ margin: '8px auto 12px' }}>News &amp; Articles From GTI TRAVELS PVT LTD</h1>
            <p className="atl-page-title-text" style={{ margin: '0 auto', maxWidth: '640px' }}>
              Real stories from travelers, and notes from our team, on the magic of heritage travel.
            </p>
          </div>
        </div>
      </div>

      <div className="atl-container" style={{ padding: '60px 20px 90px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
          {articles.map((art, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(208, 197, 175, 0.4)',
                boxShadow: 'var(--atl-shadow-card)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={art.image}
                  alt={art.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: 'var(--atl-ink-500)', marginBottom: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {art.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <User size={13} /> {art.author}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', lineHeight: 1.35, marginBottom: '12px', fontFamily: 'Playfair Display, serif' }}>
                    {art.title}
                  </h3>

                  <p style={{ color: 'var(--atl-ink-700)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                    {art.excerpt}
                  </p>
                </div>

                <Link
                  to="/riverside-resorts-in-jim-corbett/"
                  style={{ color: 'var(--atl-gold-deep)', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

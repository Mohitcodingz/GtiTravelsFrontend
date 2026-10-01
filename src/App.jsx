import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationSinglePage from './pages/DestinationSinglePage';
import HotelsPage from './pages/HotelsPage';
import HotelListingPage from './pages/HotelListingPage';
import HotelDetailPage from './pages/HotelDetailPage';
import TourPackagesPage from './pages/TourPackagesPage';
import TourDetailPage from './pages/TourDetailPage';
import SafariBookingPage from './pages/SafariBookingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PaymentDetailsPage from './pages/PaymentDetailsPage';
import BlogPage from './pages/BlogPage';
import LegalPage from './pages/LegalPage';
import HotelDashboardPage from './pages/HotelDashboardPage';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/admin/"
        element={import.meta.env.DEV ? <HotelDashboardPage /> : <Navigate to="/" replace />}
      />
      <Route
        path="/admin"
        element={import.meta.env.DEV ? <HotelDashboardPage /> : <Navigate to="/" replace />}
      />

      {/* Destinations */}
      <Route path="/destinations/" element={<DestinationsPage />} />
      <Route path="/destinations" element={<DestinationsPage />} />
      <Route path="/destinations/:slug/" element={<DestinationSinglePage />} />
      <Route path="/destinations/:slug" element={<DestinationSinglePage />} />

      {/* Master Hotels Directory */}
      <Route path="/hotels/" element={<HotelsPage />} />
      <Route path="/hotels" element={<HotelsPage />} />
      <Route path="/hotel/" element={<HotelsPage />} />
      <Route path="/hotel" element={<HotelsPage />} />

      {/* Destination-specific Hotel Listing Pages */}
      <Route
        path="/resorts-in-jim-corbett/"
        element={
          <HotelListingPage
            destinationName="Jim Corbett"
            title="Resorts in Jim Corbett"
            subtitle="Luxury jungle lodges, riverside retreats, and family vacation resorts near Jim Corbett National Park."
          />
        }
      />
      <Route
        path="/resorts-in-jim-corbett"
        element={<Navigate to="/resorts-in-jim-corbett/" replace />}
      />

      <Route
        path="/resorts-in-ranthambore/"
        element={
          <HotelListingPage
            destinationName="Ranthambore"
            title="Best Resorts in Ranthambore"
            subtitle="Regal heritage palaces, luxury camps, and jungle retreats near Ranthambore Tiger Reserve."
          />
        }
      />
      <Route
        path="/resorts-in-ranthambore"
        element={<Navigate to="/resorts-in-ranthambore/" replace />}
      />

      <Route
        path="/hotels-in-bhimtal/"
        element={
          <HotelListingPage
            destinationName="Bhimtal"
            title="Hotels in Bhimtal"
            subtitle="Lake view resorts and tranquil boutique hotels overlooking the scenic waters of Bhimtal Lake."
          />
        }
      />
      <Route
        path="/hotels-in-bhimtal"
        element={<Navigate to="/hotels-in-bhimtal/" replace />}
      />

      <Route
        path="/hotels-in-nainital/"
        element={
          <HotelListingPage
            destinationName="Nainital"
            title="Best Hotels in Nainital"
            subtitle="Heritage estates, mountain-view villas, and colonial retreats overlooking the Naini valley."
          />
        }
      />
      <Route
        path="/hotels-in-nainital"
        element={<Navigate to="/hotels-in-nainital/" replace />}
      />

      <Route
        path="/hotels-in-mukteshwar/"
        element={
          <HotelListingPage
            destinationName="Mukteshwar"
            title="Best Hotels in Mukteshwar"
            subtitle="Unobstructed Himalayan panorama retreats, apple orchard cottages, and peaceful valley lodges."
          />
        }
      />
      <Route
        path="/hotels-in-mukteshwar"
        element={<Navigate to="/hotels-in-mukteshwar/" replace />}
      />

      <Route
        path="/riverside-resorts-in-jim-corbett/"
        element={
          <HotelListingPage
            destinationName="Jim Corbett"
            isRiverside={true}
            title="Riverside Resorts in Jim Corbett"
            subtitle="Handpicked resorts directly positioned along the tranquil banks of the Kosi river."
          />
        }
      />
      <Route
        path="/riverside-resorts-in-jim-corbett"
        element={<Navigate to="/riverside-resorts-in-jim-corbett/" replace />}
      />

      {/* Single Hotel Detail Pages (47 properties) */}
      <Route path="/hotel/:slug/" element={<HotelDetailPage />} />
      <Route path="/hotel/:slug" element={<HotelDetailPage />} />

      {/* Safari Booking */}
      <Route path="/jim-corbett-safari-booking/" element={<SafariBookingPage />} />
      <Route path="/jim-corbett-safari-booking" element={<SafariBookingPage />} />

      {/* Tour Packages */}
      <Route path="/tour-packages/" element={<TourPackagesPage />} />
      <Route path="/tour-packages" element={<TourPackagesPage />} />
      <Route path="/tour/:slug/" element={<TourDetailPage />} />
      <Route path="/tour/:slug" element={<TourDetailPage />} />

      {/* Company Pages */}
      <Route path="/about/" element={<AboutPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact/" element={<ContactPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/payment-details/" element={<PaymentDetailsPage />} />
      <Route path="/payment-details" element={<PaymentDetailsPage />} />

      {/* Blog / Journal */}
      <Route path="/blog/" element={<BlogPage />} />
      <Route path="/blog" element={<BlogPage />} />

      {/* Legal */}
      <Route path="/terms-conditions/" element={<LegalPage type="terms" />} />
      <Route path="/terms-conditions" element={<LegalPage type="terms" />} />
      <Route path="/privacy-policy/" element={<LegalPage type="privacy" />} />
      <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    {!pathname.startsWith('/admin') && <MobileStickyBar />}
    </>
  );
}

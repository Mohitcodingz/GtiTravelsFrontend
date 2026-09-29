import React from 'react';
import { Search } from 'lucide-react';

export default function FilterBar({
  selectedRating,
  onSelectRating,
  selectedDestination,
  onSelectDestination,
  destinationsList,
  searchQuery,
  onSearchChange,
  totalResults
}) {
  const ratings = [
    { label: 'All Stays', value: 'all' },
    { label: '5-Star Luxury', value: '5-star' },
    { label: '4-Star Premium', value: '4-star' },
    { label: '3-Star Comfort', value: '3-star' }
  ];

  return (
    <div
      className="atl-filter-bar"
      style={{
        background: '#ffffff',
        borderRadius: '24px',
        padding: '24px',
        boxShadow: 'var(--atl-shadow-card)',
        border: '1px solid rgba(58, 43, 20, 0.4)',
        marginBottom: '36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      {/* Top row: Search and count */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        <div style={{ position: 'relative', flex: '1', minWidth: 'min(100%, 240px)', maxWidth: '450px' }}>
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--atl-ink-500)'
            }}
          />
          <input
            type="text"
            placeholder="Search stays by name or amenity..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px 12px 42px',
              borderRadius: '9999px',
              border: '1px solid rgba(58, 43, 20, 0.6)',
              fontSize: '14px',
              fontFamily: 'inherit',
              outline: 'none',
              background: 'var(--atl-surface)'
            }}
          />
        </div>

        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--atl-gold-deep)' }}>
          Showing <strong>{totalResults}</strong> {totalResults === 1 ? 'retreat' : 'retreats'}
        </div>
      </div>

      {/* Rating Filter Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--atl-ink-700)', marginRight: '4px' }}>
          Rating:
        </span>
        {ratings.map((r) => {
          const isActive = selectedRating === r.value;
          return (
            <button
              key={r.value}
              type="button"
              onClick={() => onSelectRating(r.value)}
              className={`atl-filter-btn ${isActive ? 'is-active' : ''}`}
              style={{
                padding: '7px 16px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: isActive ? 700 : 500,
                background: isActive ? 'var(--atl-gold)' : 'var(--atl-surface)',
                color: isActive ? '#ffffff' : 'var(--atl-ink-700)',
                border: isActive ? '1px solid var(--atl-gold)' : '1px solid rgba(58, 43, 20, 0.5)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              {r.label}
            </button>
          );
        })}
      </div>

      {/* Destination Pills (if available) */}
      {destinationsList && destinationsList.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--atl-ink-700)', marginRight: '4px' }}>
            Destination:
          </span>
          <button
            type="button"
            onClick={() => onSelectDestination('all')}
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: selectedDestination === 'all' ? 700 : 500,
              background: selectedDestination === 'all' ? 'var(--atl-ink-900)' : 'transparent',
              color: selectedDestination === 'all' ? '#ffffff' : 'var(--atl-ink-700)',
              border: '1px solid rgba(58, 43, 20, 0.6)',
              cursor: 'pointer'
            }}
          >
            All Regions
          </button>
          {destinationsList.map((dest) => {
            const isSelected = selectedDestination === dest;
            return (
              <button
                key={dest}
                type="button"
                onClick={() => onSelectDestination(dest)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: isSelected ? 700 : 500,
                  background: isSelected ? 'var(--atl-ink-900)' : 'transparent',
                  color: isSelected ? '#ffffff' : 'var(--atl-ink-700)',
                  border: '1px solid rgba(58, 43, 20, 0.6)',
                  cursor: 'pointer'
                }}
              >
                {dest}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

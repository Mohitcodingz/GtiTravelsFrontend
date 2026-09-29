import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export function formatDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function shiftDateValue(value, days) {
  const date = value ? new Date(`${value}T12:00:00`) : new Date();
  date.setDate(date.getDate() + days);
  return formatDateValue(date);
}

function parseDateValue(value) {
  if (!value) return null;
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDisplayDate(value) {
  if (!value) return '';
  const [year, month, day] = value.split('-');
  return `${day}-${month}-${year}`;
}

export default function DatePicker({
  value,
  onChange,
  min,
  max,
  placeholder = 'Select date',
  required = false,
  error = false,
  className = '',
  style,
  align = 'left'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const selected = parseDateValue(value);
    const minimum = parseDateValue(min);
    return new Date((selected || minimum || new Date()).getFullYear(), (selected || minimum || new Date()).getMonth(), 1);
  });
  const rootRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const selected = parseDateValue(value);
    const minimum = parseDateValue(min);
    const initialMonth = selected || minimum;
    if (initialMonth) {
      setVisibleMonth(new Date(initialMonth.getFullYear(), initialMonth.getMonth(), 1));
    }
  }, [min, value]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const calendarDays = useMemo(() => {
    const firstOfMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
    const firstDay = firstOfMonth.getDay();
    const start = new Date(firstOfMonth);
    start.setDate(1 - firstDay);
    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return date;
    });
  }, [visibleMonth]);

  const minDate = parseDateValue(min);
  const maxDate = parseDateValue(max);
  const minimumMonth = minDate && new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  const maximumMonth = maxDate && new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
  const previousMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
  const nextMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
  const monthLabel = visibleMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const selectDate = (date) => {
    const nextValue = formatDateValue(date);
    onChange(nextValue);
    setVisibleMonth(new Date(date.getFullYear(), date.getMonth(), 1));
    setIsOpen(false);
  };

  return (
    <div className={`atl-date-picker${align === 'right' ? ' atl-date-picker-align-right' : ''}`} ref={rootRef}>
      <input
        ref={inputRef}
        type="text"
        value={formatDisplayDate(value)}
        placeholder={placeholder}
        readOnly
        required={required}
        aria-invalid={error || undefined}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsOpen((open) => !open);
          }
        }}
        className={`atl-date-picker-input${error ? ' has-error' : ''} ${className}`.trim()}
        style={style}
      />
      <Calendar className="atl-date-picker-icon" size={16} aria-hidden="true" />
      {isOpen && (
        <div className="atl-date-picker-popover" role="dialog" aria-label={`Choose ${placeholder.toLowerCase()}`}>
          <div className="atl-date-picker-header">
            <button
              type="button"
              aria-label="Previous month"
              disabled={minimumMonth && previousMonth < minimumMonth}
              onClick={() => setVisibleMonth(previousMonth)}
            >
              <ChevronLeft size={18} />
            </button>
            <strong>{monthLabel}</strong>
            <button
              type="button"
              aria-label="Next month"
              disabled={maximumMonth && nextMonth > maximumMonth}
              onClick={() => setVisibleMonth(nextMonth)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="atl-date-picker-grid" role="grid">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <span className="atl-date-picker-weekday" role="columnheader" key={day}>{day}</span>
            ))}
            {calendarDays.map((date) => {
              const dateValue = formatDateValue(date);
              const isCurrentMonth = date.getMonth() === visibleMonth.getMonth();
              const isDisabled = (minDate && date < minDate) || (maxDate && date > maxDate);
              const isSelected = dateValue === value;
              const isToday = dateValue === formatDateValue(new Date());
              return (
                <button
                  type="button"
                  key={dateValue}
                  role="gridcell"
                  aria-label={date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  aria-pressed={isSelected}
                  disabled={isDisabled}
                  className={[
                    'atl-date-picker-day',
                    !isCurrentMonth && 'is-outside-month',
                    isSelected && 'is-selected',
                    isToday && 'is-today'
                  ].filter(Boolean).join(' ')}
                  onClick={() => selectDate(date)}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

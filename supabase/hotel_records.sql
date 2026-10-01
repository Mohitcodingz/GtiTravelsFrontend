create table if not exists public.hotel_records (
  slug text primary key,
  data jsonb not null,
  constraint hotel_records_slug_matches_data
    check (data ->> 'slug' = slug)
);

alter table public.hotel_records enable row level security;

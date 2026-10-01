# Live hotel dashboard setup

Production dashboard edits are stored in Supabase and are read by the hotel
pages and listings directly. After the initial deployment and setup, editing
hotel data does not require a rebuild or redeploy. Pages that are already open
refresh hotel data automatically within about 10 seconds.

## One-time setup

1. Create a Supabase project and run [`hotel_records.sql`](./hotel_records.sql)
   in its SQL Editor.
2. Seed the current hotel catalog from the project root. In PowerShell:

   ```powershell
   $env:SUPABASE_URL = "https://YOUR-PROJECT.supabase.co"
   $env:SUPABASE_SERVICE_ROLE_KEY = "YOUR-SERVICE-ROLE-KEY"
   npm run seed:hotels
   ```

   Keep the service-role key private. Do not add it to frontend code or commit it.
   This is a one-time import; running it again replaces the database records
   with the JSON file contents.
3. In the Vercel project settings, add these environment variables for
   Production (and Preview if needed):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `HOTEL_ADMIN_PASSWORD` — a strong password for the dashboard
4. Deploy the app once to publish the API. Open `/admin/` on the deployed site
   and enter `HOTEL_ADMIN_PASSWORD` to edit hotels.

The API uses the service-role key only on the server. Public hotel pages can
read hotel data; changing it requires the dashboard password. Never use the
Supabase service-role key as a browser environment variable.

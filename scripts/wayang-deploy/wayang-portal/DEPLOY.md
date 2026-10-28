# How to publish WAYANG under your own domain (no z.ai in the link)

This guide walks you through deploying the Wayang Kulit game portal to a real
public URL. The `https://preview-*.space-z.ai/` URL you've been using is just
the sandbox preview — it only works while that chat session is running.

There are several hosting options. The easiest is **Vercel** (the company
behind Next.js). It's free, takes 5 minutes, and gives you either a free
`*.vercel.app` subdomain or a custom domain you own.

---

## Option A — Vercel (recommended, free, fastest)

### Step 1 — Push the code to GitHub

1. Go to **github.com** and sign in (or sign up — it's free).
2. Click the **+** in the top-right → **New repository**.
3. Name it `wayang-portal`, set it to **Public** or **Private** (either works).
4. Check **"Add a README"** so the repo isn't empty.
5. Click **Create repository**.
6. On your computer, **unzip** `wayang-portal.zip` (the file you just
   downloaded from this sandbox).
7. In the unzipped folder, initialise git and push to GitHub:

   ```bash
   cd wayang-portal
   git init
   git add .
   git commit -m "Wayang Kulit game portal"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/wayang-portal.git
   git push -u origin main
   ```

   (Replace `YOUR-USERNAME` with your GitHub username.)

### Step 2 — Deploy to Vercel

1. Go to **vercel.com** → **Sign Up** → **Continue with GitHub** (free).
2. Click **Add New…** → **Project**.
3. Find `wayang-portal` in your repo list → click **Import**.
4. Vercel auto-detects Next.js — leave everything default.
5. Click **Deploy**. (Build takes ~2 minutes.)
6. When it finishes, you'll get a public URL like:
   `https://wayang-portal.vercel.app`

   **This is your published site — no `z.ai` in the link.**

### Step 3 (optional) — Add a custom domain

If you own a domain like `wayang.com` or `my-game-arcade.com`:

1. Buy one from **Namecheap**, **Cloudflare**, or **Porkbun** (~$10–15/year
   for a `.com`).
2. In Vercel: open your project → **Settings** → **Domains** → paste your
   domain → click **Add**.
3. Vercel shows you DNS records to add at your registrar. Copy them into
   your domain registrar's DNS panel:
   - Usually an `A` record pointing to `76.76.21.21`, **OR**
   - A `CNAME` record pointing to `cname.vercel-dns.com`.
4. Wait 5–30 minutes for DNS to propagate (can take up to 24h).
5. Vercel provisions HTTPS automatically — your site loads at
   `https://yourdomain.com` with a real SSL certificate.

---

## Option B — Netlify (free, similar to Vercel)

1. Sign up at **netlify.com** (GitHub login).
2. **Add new site** → **Import an existing project** → pick the GitHub repo.
3. Build command: `next build` (auto-detected)
4. Publish directory: `.next` (auto-detected)
5. Click **Deploy site**.
6. You get a `*.netlify.app` URL — no `z.ai`.
7. To add a custom domain: **Site settings** → **Domains** → **Add a domain**.

---

## Option C — Cloudflare Pages (free, very generous)

1. Sign up at **pages.cloudflare.com** (free, no credit card needed).
2. **Create a project** → connect your GitHub account.
3. Pick the `wayang-portal` repo.
4. Framework preset: **Next.js**.
5. Build command: `npx next build` — Cloudflare handles the rest.
6. You get a `*.pages.dev` URL — no `z.ai`.
7. Custom domains: **Custom domains** tab → **Set up a custom domain**.

---

## Option D — Self-host (for tinkerers)

If you have a VPS (DigitalOcean, Hetzner, etc.) and want full control:

```bash
# On the server:
git clone https://github.com/YOUR-USERNAME/wayang-portal.git
cd wayang-portal
bun install
bun run build
bun run start    # runs on port 3000

# Or use PM2 to keep it running:
bun install -g pm2
pm2 start "bun run start" --name wayang
pm2 save && pm2 startup
```

Then point a domain at the server's IP with an `A` record, and put
**Caddy** in front for automatic HTTPS:

```caddyfile
yourdomain.com {
  reverse_proxy localhost:3000
}
```

---

## What you DON'T need to worry about

- **The two game links still work** — both the puzzle (Google Sites) and the
  rhythm + quiz game (your other space-z.ai preview URL) are external
  `<a target="_blank">` links. They'll open in a new tab exactly as before
  on the deployed site.

  > Note: the rhythm game link `https://y1b3g91bbq41-d.space-z.ai` is
  > itself a Z.ai sandbox preview URL. If you want *that* game to also live
  > on a permanent URL, you'll need to deploy its code separately using the
  > same flow. As long as that session stays alive, the link works — but if
  > it expires, the link in the Wayang portal will break.

- **No database is needed** — this site is fully client-side. The Prisma
  schema in the project is left over from the scaffold; the page doesn't
  read or write to the DB. The `.env` file in this ZIP is just there so
  `next build` doesn't complain about a missing `DATABASE_URL`.

- **No build errors** — this exact code passes ESLint cleanly and the
  production build (`next build`) runs without warnings. Vercel/Netlify/
  Cloudflare will build it identically.

---

## If the deploy fails — quick troubleshooting

If Vercel/Netlify/Cloudflare shows "Build Failed", check the build log
for the exact error. The most common ones and their fixes:

### 1. `Error: Cannot find module 'next'` or similar missing-dependency errors

→ The `bun.lock` and `node_modules` are NOT supposed to be committed.
   Vercel runs install itself. If you committed `node_modules/` to
   GitHub by mistake, delete it and re-push:

   ```bash
   rm -rf node_modules
   rm -rf .next
   git rm -rf --cached node_modules .next 2>/dev/null
   git add .gitignore
   git commit -m "Remove committed build artifacts"
   git push
   ```

   Then re-trigger the deploy on Vercel (Deployments → ⋮ → Redeploy).

### 2. `Environment Variable "DATABASE_URL" not found` during build

→ Prisma needs `DATABASE_URL` to exist even though the site doesn't use
   the DB. In Vercel: **Project Settings → Environment Variables → Add**:
   - Key: `DATABASE_URL`
   - Value: `file:./dev.db`
   - Environment: check Production, Preview, and Development
   - Click Save, then redeploy.

### 3. `Module not found: Can't resolve '@/components/wayang/decor'`

→ The `src/components/wayang/decor.tsx` file is missing from your git
   push. Verify it's actually on GitHub: open your repo and navigate to
   `src/components/wayang/decor.tsx`. If it's not there, the initial
   `git add .` missed it. Re-run:

   ```bash
   git add src/components/wayang/decor.tsx
   git commit -m "Add missing wayang decor component"
   git push
   ```

### 4. The build succeeds but the page shows 404 or blank screen

→ Wait 1–2 minutes after "Deployed" status. Vercel needs time to
   propagate. Then hard-refresh (Cmd+Shift+R / Ctrl+Shift+R). If still
   blank, open the deployed URL with `?_r=1` to bypass any cache.

### 5. The build is using the wrong Node version

→ Vercel auto-detects from the `engines` field in `package.json`
   (set to `>=18.18.0` in this project). If you see a Node-version
   error, go to **Project Settings → General → Node.js Version** and
   set it to `20.x` (the recommended stable version for Next.js 16).

### 6. Build hangs or runs out of memory

→ On Vercel free tier this shouldn't happen for a site this small.
   If it does, go to **Project Settings → Functions → Function Memory**
   and bump to `1024 MB` (still free).

### 7. Domain shows "Invalid Configuration" or never issues an SSL cert

→ DNS propagation can take up to 24 hours, but usually 5–30 minutes.
   Verify your `A` record points to `76.76.21.21` and that no other
   `A` records or `CNAME`s conflict at the apex. Vercel issues the
   cert automatically once DNS resolves.

### 8. Other errors

→ Copy the first red error line from the Vercel build log and paste it
   back into the chat. I'll diagnose and fix.

---

## Which option should I pick?

| Goal | Pick |
|------|------|
| "I want this live in 5 minutes, free" | **Vercel** |
| "I want a domain like `wayang.com`" | **Vercel + custom domain** |
| "I already use Netlify/Cloudflare" | Same flow, different host |
| "I want to host it myself" | Self-host (Option D) |

The fastest path is **Vercel with a `*.vercel.app` subdomain** — it costs
nothing, takes 5 minutes, and the URL will be something like
`https://wayang-portal.vercel.app` (no `z.ai` anywhere).

---

## After publishing

- Each time you `git push` to `main`, Vercel/Netlify/Cloudflare will
  **automatically rebuild and redeploy** the site. No need to do anything
  else.
- If you want to make changes, just edit the code, commit, push — the site
  updates within ~2 minutes.

Good luck, dalang.

# 🚀 Quick Setup Guide - Movies Club

## Prerequisites Check

Before you begin, ensure you have:
- ✅ Node.js 18 or higher installed
- ✅ npm, yarn, pnpm, or bun package manager
- ✅ A code editor (VS Code recommended)
- ✅ Git installed (optional, for version control)

## Step-by-Step Setup

### 1. Get Your TMDB API Token

1. Visit [The Movie Database (TMDB)](https://www.themoviedb.org/)
2. Create a free account or log in
3. Go to Settings → API
4. Request an API key (choose "Developer" option)
5. Fill out the required form
6. Copy your **API Read Access Token** (not the API Key)

### 2. Configure Environment Variables

1. Locate the `.env.local.example` file in the project root
2. Create a new file named `.env.local` (this file is gitignored for security)
3. Copy the content from `.env.local.example` to `.env.local`
4. Replace `your_api_token_here` with your actual TMDB API token:

```env
NEXT_PUBLIC_TMDB_API_TOKEN=eyJhbGc...your_actual_token_here
```

**Important**: 
- Use the **Bearer Token** (starts with "eyJhbG...")
- NOT the API Key (shorter alphanumeric string)
- Keep this token secure and never commit it to version control

### 3. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Or use your preferred package manager:
```bash
yarn install
# or
pnpm install
# or
bun install
```

### 4. Run Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 5. Verify Setup

Check that everything works:
- ✅ Homepage loads with trending movies
- ✅ Search functionality works
- ✅ Movie/TV show cards display properly
- ✅ Detail pages load with full information
- ✅ No console errors in browser dev tools

## Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub (without .env.local!)
2. Import project to Vercel
3. Add environment variable in Vercel dashboard:
   - Key: `NEXT_PUBLIC_TMDB_API_TOKEN`
   - Value: Your TMDB token
4. Deploy!

### Other Platforms

For other platforms (Netlify, Railway, etc.):
- Ensure you add the `NEXT_PUBLIC_TMDB_API_TOKEN` environment variable
- Configure build command: `npm run build`
- Configure start command: `npm start`
- Set Node.js version to 18 or higher

## Troubleshooting

### Issue: "Failed to fetch"
- **Solution**: Check your TMDB API token is correct
- Verify you're using the Bearer Token, not API Key
- Ensure `.env.local` is in the project root

### Issue: Images not loading
- **Solution**: Check TMDB image URLs are accessible
- Verify Next.js image configuration in `next.config.ts`

### Issue: Build fails
- **Solution**: Run `npm install` again
- Clear Next.js cache: `rm -rf .next`
- Check Node.js version: `node --version` (should be 18+)

### Issue: Slow loading
- **Solution**: This is normal on first load as images are optimized
- Subsequent loads will be much faster due to caching

## Project Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Customization

### Update Personal Information

1. **README.md**: Replace placeholder information with your details
2. **Footer Component** (`app/components/Footer.tsx`): Update social links
3. **Metadata** (`app/layout.tsx`): Update author name

### Customize Styling

- **Colors**: Edit `app/globals.css` and `tailwind.config.ts`
- **Fonts**: Change in `app/layout.tsx`
- **Layout**: Modify components in `app/components/`

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TMDB API Documentation](https://developer.themoviedb.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Need Help?

If you encounter issues:
1. Check this guide again
2. Review the main README.md
3. Check the IMPROVEMENTS.md for technical details
4. Verify all prerequisites are met
5. Ensure environment variables are set correctly

---

**Ready to impress recruiters!** 🎉

Your professional movie discovery platform is now ready to showcase your skills in modern web development, UI/UX design, and performance optimization.

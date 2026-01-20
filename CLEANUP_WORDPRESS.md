# WordPress Files Cleanup

## Status

WordPress files are now **ignored in git** (added to `.gitignore`), but they still exist in your local directory.

## Options

### Option 1: Keep for Reference (Recommended Initially)
- Files are ignored by git, so they won't be committed
- You can reference old content if needed
- Delete manually later when migration is complete

### Option 2: Delete Now
If you want to remove WordPress files immediately, run:

```bash
# Remove WordPress directories
rm -rf wp-content/ wp-includes/ wp-json/

# Remove old HTML pages
rm -rf about-us/ contact-us/ terms-conditions/ home/ category/ hello-world/ feed/ comments/

# Remove old index.html (keep CNAME for domain)
rm -f index.html

# Remove npm lock file (using yarn)
rm -f package-lock.json
```

**⚠️ Warning**: This is permanent! Make sure you've extracted all needed assets (logos, images, content) before deleting.

## What's Already Extracted

✅ **Logos**: Copied to `public/images/logos/`
- logo-white.png
- logo-dark.png  
- favicon.png

✅ **Contact Info**: Extracted to `lib/constants.ts`
- Email: tech@thardigital.in
- Phone: +91 75684 48891
- Address: B-3, 339, Rajmata Sudarshana Nagar, Bikaner, Rajasthan - 334001

## What to Keep

✅ **CNAME** - Keep this file (needed for GitHub Pages custom domain)

## Next Steps

1. Review extracted content in `lib/constants.ts`
2. Check if any images from `wp-content/uploads/` are needed
3. Once migration is complete, delete WordPress files
4. Or keep them ignored in git for reference

# 💰 Cheapest Setup Guide - Quick Reference

## 🎯 Best Value: ₹500-600/year (~$6-7/year)

### What You Get:
- ✅ Professional `.com` domain
- ✅ Free hosting (Vercel)
- ✅ Free SSL certificate
- ✅ Free CDN (fast worldwide)
- ✅ Unlimited bandwidth
- ✅ Automatic deployments

---

## ⚡ Quick Setup (15 minutes)

### Step 1: Get Domain (5 min)
1. Go to: https://dash.cloudflare.com/sign-up
2. Domain Registration → Register Domains
3. Search: `draparana.com` (or your choice)
4. Add to cart → Checkout
5. **Cost**: ₹500-600/year

### Step 2: Deploy Website (5 min)
1. Push to GitHub (if not done):
   ```bash
   git push -u origin main
   ```
2. Go to: https://vercel.com
3. Sign up with GitHub
4. Import repository → Deploy
5. **Cost**: FREE

### Step 3: Connect Domain (5 min)
1. Vercel → Project → Settings → Domains
2. Add domain: `draparana.com`
3. Cloudflare → DNS → Add CNAME:
   - Name: `@`
   - Target: `cname.vercel-dns.com`
4. Wait 5-10 minutes
5. **Cost**: FREE

---

## 💵 Cost Comparison

| Option | Domain | Hosting | Total/Year |
|-------|--------|---------|-----------|
| **Recommended** | Cloudflare (₹500) | Vercel (FREE) | **₹500** |
| Alternative | Namecheap (₹700) | Vercel (FREE) | **₹700** |
| **Free** | Freenom (FREE) | Vercel (FREE) | **₹0** |

---

## 🆓 Completely Free Option

If you want **zero cost**:

1. **Domain**: https://www.freenom.com
   - Get `.tk`, `.ml`, `.ga`, or `.cf` domain
   - **Cost**: FREE
   - Example: `draparana.tk`

2. **Hosting**: Vercel (FREE)

3. **Total**: **₹0/year**

**Note**: Free domains are less professional.

---

## ✅ Recommendation

**Spend ₹500-600/year** for a professional `.com` domain:
- More trustworthy
- Better for SEO
- Professional appearance
- Easy to remember

**Total cost**: Less than ₹50/month (~$0.50/month)

---

## 📚 Detailed Guides

- **Full Guide**: See `DOMAIN_HOSTING_GUIDE.md`
- **Deployment**: See `QUICK_DEPLOY.md`
- **GitHub Setup**: See `GITHUB_SETUP.md`

---

## 🎉 That's It!

**Total Setup Time**: 15 minutes
**Total Cost**: ₹500-600/year (~$6-7/year)
**Result**: Professional website with custom domain!


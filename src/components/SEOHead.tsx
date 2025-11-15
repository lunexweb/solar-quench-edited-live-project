import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  robots?: string;
  structuredData?: object | object[];
}

const SEOHead = ({
  title = "SOLARQUENCH - Premium Solar Energy Solutions",
  description = "Transform your home or business with SOLARQUENCH's premium solar energy solutions. Expert installation, 25-year warranty, and up to 70% savings on energy bills.",
  keywords = "solar energy, solar panels, renewable energy, solar installation",
  image = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961795/WhatsApp_Image_2025-10-19_at_19.55.52_wluvdj.jpg",
  url = "https://solarquench.com",
  type = "website",
  robots = "index, follow",
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', robots);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', image);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', url);
    
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute('content', type);
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', image);
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);
    
  }, [title, description, keywords, image, url, type, robots]);

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default SEOHead;

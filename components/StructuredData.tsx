export default function StructuredData() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "PCOS Friendly",
    "operatingSystem": "iOS",
    "applicationCategory": "HealthApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "100"
    },
    "description": "AI-powered food scanner app for PCOS management. Instantly analyze any food's sugar content, glycemic index, hormone impact, inflammatory score, fiber content, and processing level.",
    "screenshot": "https://pcosfriendly.com/demo-result.jpg",
    "featureList": [
      "AI Food Analysis",
      "Glycemic Index Scanner",
      "Sugar Content Analysis",
      "Hormone Impact Score",
      "Inflammatory Score",
      "Fiber Content Analysis",
      "Processing Level Detection",
      "Scan History",
      "PCOS Diet Guidance"
    ],
    "downloadUrl": "https://apps.apple.com/app/id6756167013"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PCOS Friendly",
    "url": "https://pcosfriendly.com",
    "logo": "https://pcosfriendly.com/logo.png",
    "sameAs": [
      "https://instagram.com/pcosfriendly",
      "https://tiktok.com/@pcosfriendly"
    ],
    "description": "PCOS Friendly helps women with polycystic ovary syndrome make better food choices through AI-powered food analysis."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PCOS Friendly",
    "url": "https://pcosfriendly.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pcosfriendly.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is PCOS Friendly app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PCOS Friendly is an AI-powered food scanner app that helps women with polycystic ovary syndrome (PCOS) make informed food choices. Simply snap a photo of any food to instantly see its sugar content, glycemic index, hormone impact, inflammatory score, fiber content, and processing level."
        }
      },
      {
        "@type": "Question",
        "name": "How does PCOS Friendly help manage PCOS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PCOS Friendly analyzes foods based on factors that affect PCOS symptoms, including glycemic index (which affects insulin resistance), inflammatory scores (inflammation worsens PCOS), hormone impact, and sugar content. This helps you choose foods that support hormonal balance."
        }
      },
      {
        "@type": "Question",
        "name": "What foods should I avoid with PCOS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With PCOS, it's generally recommended to limit high-glycemic foods, processed foods, sugary drinks, and inflammatory foods. PCOS Friendly app helps you identify these foods by scanning them and showing their impact scores."
        }
      },
      {
        "@type": "Question",
        "name": "Is PCOS Friendly app free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PCOS Friendly is free to download on the iOS App Store. The app includes AI-powered food scanning, analysis results, and scan history features."
        }
      },
      {
        "@type": "Question",
        "name": "What metrics does PCOS Friendly analyze?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PCOS Friendly analyzes six key metrics for each food: Glycemic Index, Sugar Content, Fiber Content, Inflammatory Score, Hormone Impact, and Processing Level. Each metric is color-coded to show if it's good, moderate, or should be limited for PCOS."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

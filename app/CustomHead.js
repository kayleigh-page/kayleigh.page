export default function Head() {
  const updatedDate = "2025-04-14";
  const updatedTime = "15:00:00";
  const timeOffset = "+02:00"; // WINTER = +01:00, SUMMER = +02:00
  const lastUpdated = `${updatedDate}T${updatedTime}${timeOffset}`;

  const robots = "index, follow";

  const hostname = "https://kayleigh.page";
  const firstName = "Kayleigh";
  const lastName = "Page";
  const fullName = `${firstName} ${lastName}`;
  const twitterUser = "@kayleigh_page_";
  const locale = "en_US";
  const facebookUrl = "https://facebook.com/kayleigh.page.developer";
  const gender = "female";
  const canonical = "https://kayleigh.page";

  const title =
    "Kayleigh Page - Full-Stack Developer, Server Architect, DevOps Consultant, Security Expert, Brand Builder, Coach";
  const description =
    "Full-Stack Developer, Server Architect, DevOps Consultant, Security Expert, Brand Builder and Coach from Belgium. Helping your brand succeed since 2008.";
  const descriptionWebsite =
    "Full-Stack Developer, Server Architect, DevOps Consultant, Security Expert, Brand Builder and Coach from Belgium. Helping your brand succeed since 2008.";
  const imageLogoCaption =
    "Kayleigh Page, a consultant, developer and system administrator";
  const imagePersonCaption =
    "Kayleigh Page, a consultant, developer and system administrator";
  const imagePersonAbstract =
    "Kayleigh Page, a consultant, developer and system administrator";
  const imagePersonAlternativeHeadline =
    "Kayleigh Page, a consultant, developer and system administrator";
  const imagePersonIsFamilyFriendly = "true";
  const imagePersonKeywords =
    "Kayleigh, Page, consultant, developer, system, administrator";
  const imagePageCaption =
    "Kayleigh Page - Full-Stack Developer, Server Architect, DevOps Consultant, Security Expert, Brand Builder, Coach";
  const imagePageAbstract =
    "Kayleigh Page - Full-Stack Developer, Server Architect, DevOps Consultant, Security Expert, Brand Builder, Coach";
  const imagePageAlternativeHeadline =
    "Kayleigh Page - Full-Stack Developer, Server Architect, DevOps Consultant, Security Expert, Brand Builder, Coach";
  const imagePageIsFamilyFriendly = "true";
  const imagePageKeywords =
    "Kayleigh, Page, devops, seo, javascript, php, linux, nodejs, laravel, react, nextjs, graphql, security, consultant, developer, system, administrator";
  const keywords =
    "Full-Stack Developer, Server Architect, DevOps Consultant, Security Expert, Brand Builder, Coach, Belgium, JavaScript, Typescript, PHP, Next.js, React, React Native, Node.js, GraphQL, Laravel, Linux, DevOps, Security, Marketing";
  const keywordsWebsite =
    "Full-Stack Developer, Server Architect, DevOps Consultant, Security Expert, Brand Builder, Coach, Belgium, JavaScript, Typescript, PHP, Next.js, React, React Native, Node.js, GraphQL, Laravel, Linux, DevOps, Security, Marketing";

  const imagePage = "https://kayleigh.page/kayleigh-page-1.jpg";
  const imagePageUploadDate = "2025-04-14";
  const imagePerson = "https://kayleigh.page/kayleigh-page-1.jpg";
  const imagePersonUploadDate = "2025-04-14";
  const imageLogo = "https://kayleigh.page/logo/kayleigh-page-512x512.png";
  const imageLogoWidth = "512";
  const imageLogoHeight = "512";

  const twitterLabel1 = "Role";
  const twitterData1 =
    "Full-Stack Developer, DevOps, Security, Marketing, Coach";
  const twitterLabel2 = "Technologies";
  const twitterData2 =
    "Javascript, PHP, Linux, React, Next.js, GraphQL, Laravel, Node.js";

  /*
  Can be used like this:
  Label	          Data Example
  --------------------------------
  Reading time	  5 mins
  Word count	    1,200 words
  Published	      April 13, 2025
  Last updated	  2 days ago
  Category	      Linux Tweaks
  Difficulty	    Intermediate
  Author	        Kayleigh Page
  Price	          €12.99
  Tag	            #Nextjs, #FullStackDev
  */

  const ogType = "website";

  const articleSection = "Kayleigh Page";
  const $articleTag1 = "JavaScript and PHP full-stack developer";
  const $articleTag2 = "Linux server administrator and architect";
  const $articleTag3 = "DevOps and cloud consultant";
  const $articleTag4 = "Computer security expert";
  const $articleTag5 = "Brand and SEO expert";

  const numberOfEmployees = 1;
  const foundingDate = "2008";
  const areaServed = "Worldwide";
  const openTime = "10:00";
  const closeTime = "16:00";
  const latitude = "51.219448";
  const longitude = "4.402464";

  const sameAs = [
    "https://www.linkedin.com/in/kayleigh-page",
    "https://github.com/kayleigh-page",
    "https://bsky.app/profile/kayleigh.page",
    "https://x.com/kayleigh_page_",
    "https://instagram.com/kayleigh_page_developer",
    "https://facebook.com/kayleigh.page.developer",
    "https://orcid.org/0009-0001-8517-0599",
    "https://g.dev/kayleigh-page",
  ];

  const currenciesAccepted =
    "EUR, USD, GBP, BTC, ETH, AUD, CAD, CHF, CNY, JPY, INR, BRL, ZAR, SEK, NZD, SGD, HKD, NOK, DKK, PLN, CZK, HUF, ILS, AED, ARS, CLP, COP, MXN, MYR, PHP, THB, TWD, TRY, RON, RUB, UAH, IDR, PKR, VND, BDT, QAR, SAR, KWD, OMR, JOD, BHD, DZD, MAD, TND, EGP, LBP, KZT, UZS, AZN, GEL, AMD, BYN";
  const paymentAccepted =
    "Cash, Credit Card, Cryptocurrency, PayPal, Bank Transfer, SEPA, Skrill, Bancontact, Ideal, Giropay, Sofort";
  const priceRange = "$";
  const commentCount = 3; // Count reviews as comments on index page
  const personJobTitle = "Founder";

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "Brand", "OnlineBusiness", "OnlineStore"],
        "@id": `${hostname}/#organization`,
        name: `${fullName}`,
        url: `${hostname}`,
        description: `${descriptionWebsite}`,
        keywords: `${keywordsWebsite}`,
        legalName: `${fullName}`,
        foundingDate: `${foundingDate}`,
        numberOfEmployees,
        areaServed: `${areaServed}`,
        openingHours: `Mo-Su ${openTime}-${closeTime}`,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: `${openTime}`,
          closes: `${closeTime}`,
        } /*
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": `${latitude}`,
            "longitude": `${longitude}`
          },*/,
        sameAs,
        logo: {
          "@type": "ImageObject",
          "@id": `${hostname}/#logo`,
          url: `${imageLogo}`,
          contentUrl: `${imageLogo}`,
          width: `${imageLogoWidth}`,
          height: `${imageLogoHeight}`,
          caption: `${imageLogoCaption}`,
        },
        image: {
          "@id": `${hostname}/#imageKayleighPage`,
        },
        address: {
          "@id": `${hostname}/#address`,
        },
        founder: {
          "@id": `${hostname}/#person`,
        },
        currenciesAccepted: `${currenciesAccepted}`,
        paymentAccepted: `${paymentAccepted}`,
        priceRange: `${priceRange}`,
      } /*
        {
          "@type": "PostalAddress",
          "@id": `${hostname}/#address`,
          "streetAddress": "{{ $streetAddress->content }}",
          "addressLocality": "{{ $addressLocality->content }}",
          "addressRegion": "{{ $addressRegion->content }}",
          "postalCode": "{{ $postalCode->content }}",
          "addressCountry": "{{ $addresssCountry->content }}"
        },*/,
      {
        "@type": "WebSite",
        "@id": `${hostname}/#website`,
        url: `${hostname}`,
        name: `${fullName}`,
        publisher: {
          "@id": `${hostname}/#organization`,
        },
        about: {
          "@id": `${hostname}/#organization`,
        },
        author: {
          "@id": `${hostname}/#person`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}/#webpage`,
        url: `${canonical}`,
        inLanguage: `${locale}`,
        name: `${title}`,
        keywords: `${keywords}`,
        isPartOf: {
          "@id": `${hostname}/#website`,
        },
        datePublished: `${lastUpdated}`,
        dateModified: `${lastUpdated}`,
        description: `${description}`,
        primaryImageOfPage: {
          "@id": `${imagePage}#imageArticle`,
        },
        image: [
          {
            "@id": `${imagePage}#imageArticle`,
          },
          {
            "@id": `${hostname}/#imageKayleighPage`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${canonical}/#article`,
        headline: `${title}`,
        description: `${description}`,
        isPartOf: {
          "@id": `${hostname}/#website`,
        },
        mainEntityOfPage: {
          "@id": `${canonical}/#webpage`,
        },
        datePublished: `${lastUpdated}`,
        dateModified: `${lastUpdated}`,
        commentCount,
        articleSection: [
          `${$articleTag1}`,
          `${$articleTag2}`,
          `${$articleTag3}`,
          `${$articleTag4}`,
          `${$articleTag5}`,
        ],
        author: {
          "@id": `${hostname}/#person`,
        },
        publisher: {
          "@id": `${hostname}/#organization`,
        },
        image: [
          {
            "@id": `${imagePage}#imageArticle`,
          },
          {
            "@id": `${hostname}/#imageKayleighPage`,
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": `${hostname}/#imageKayleighPage`,
        url: `${imagePerson}`,
        caption: `${imagePersonCaption}`,
        representativeOfPage: true,
        productionCompany: {
          "@id": `${hostname}/#organization`,
        },
        uploadDate: `${imagePersonUploadDate}`,
        about: {
          "@id": `${hostname}/#person`,
        },
        abstract: `${imagePersonAbstract}`,
        accountablePerson: {
          "@id": `${hostname}/#person`,
        },
        alternativeHeadline: `${imagePersonAlternativeHeadline}`,
        author: {
          "@id": `${hostname}/#person`,
        },
        isFamilyFriendly: `${imagePersonIsFamilyFriendly}`,
        keywords: `${imagePersonKeywords}`,
      },
      {
        "@type": "ImageObject",
        "@id": `${imagePage}#imageArticle`,
        url: `${imagePage}`,
        caption: `${imagePageCaption}`,
        representativeOfPage: true,
        productionCompany: {
          "@id": `${hostname}/#organization`,
        },
        uploadDate: `${imagePageUploadDate}`,
        about: {
          "@id": `${hostname}/#organization`,
        },
        abstract: `${imagePageAbstract}`,
        accountablePerson: {
          "@id": `${hostname}/#person`,
        },
        alternativeHeadline: `${imagePageAlternativeHeadline}`,
        author: {
          "@id": `${hostname}/#person`,
        },
        isFamilyFriendly: `${imagePageIsFamilyFriendly}`,
        keywords: `${imagePageKeywords}`,
      },
      {
        "@type": "Person",
        "@id": `${hostname}/#person`,
        name: `${fullName}`,
        jobTitle: `${personJobTitle}`,
        image: {
          "@id": `${hostname}/#imageKayleighPage`,
        },
        sameAs,
        affiliation: {
          "@id": `${hostname}/#organization`,
        },
        memberOf: {
          "@id": `${hostname}/#organization`,
        },
        brand: {
          "@id": `${hostname}/#organization`,
        },
        familyName: `${lastName}`,
        givenName: `${firstName}`,
        gender: `${gender}`,
      },
    ],
    /*potentialAction: {
        "@type": "SearchAction",
        target: "https://kayleigh.page/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
    },*/
    /*
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "availableLanguage": "English, Dutch, French, German",
      "url": "https://kayleigh.page/contact"
    }*/
    /*
      Add hasMap if you're listing physical services
    */
  };

  return (
    <>
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />

      <link rel="canonical" href={canonical} />
      <link rel="shortlink" href={canonical} />
      <meta property="website" content={canonical} />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta name="twitter:image" content={imagePage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:label1" content={twitterLabel1} />
      <meta name="twitter:data1" content={twitterData1} />
      <meta name="twitter:label2" content={twitterLabel2} />
      <meta name="twitter:data2" content={twitterData2} />

      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imagePage} />
      <meta property="og:image:alt" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:secure_url" content={canonical} />
      <meta property="og:description" content={description} />
      <meta property="og:updated_time" content={lastUpdated} />

      <meta property="article:published_time" content={lastUpdated} />
      <meta property="article:modified_time" content={lastUpdated} />
      <meta property="article:updated_time" content={lastUpdated} />

      <meta property="article:section" content={articleSection} />
      <meta property="article:tag" content={$articleTag1} />
      <meta property="article:tag" content={$articleTag2} />
      <meta property="article:tag" content={$articleTag3} />
      <meta property="article:tag" content={$articleTag4} />
      <meta property="article:tag" content={$articleTag5} />

      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.date" content={lastUpdated} />

      <meta property="ya:ovs:upload_date" content={lastUpdated} />
      <meta property="ya:ovs:created_date" content={lastUpdated} />
      <meta property="ya:ovs:modify_date" content={lastUpdated} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
    </>
  );
}

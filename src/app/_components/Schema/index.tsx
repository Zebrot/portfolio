import Script from "next/script";

export default function Schema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pierre Terrancle",
    jobTitle: "Web Developer",
    url: "https://terrancle.dev",
    sameAs: [
      "https://github.com/zebrot",
      "https://linkedin.com/in/pierre-terrancle"
    ]
  };

  return (
    <Script
      id="schemaOrg"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

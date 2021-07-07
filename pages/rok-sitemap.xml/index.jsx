// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap } from "next-sitemap";
import artistGroup from "../../global/artists";

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  function othersitemapObject() {
    let objs = [];
    for (var i = 0; i < artistGroup.length; i++) {
      objs[i] = {
        loc: `${process.env.SITE_URL}/search?q=${artistGroup[i].name}`, // Absolute url
        lastmod: new Date().toISOString(),
      };
    }
    return objs;
  }
  const fields = [
    {
      loc: process.env.SITE_URL, // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    ...othersitemapObject(),
  ];

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};

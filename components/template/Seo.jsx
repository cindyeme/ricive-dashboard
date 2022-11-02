import React from "react";
import Head from "next/head";


const Seo = ({
  pageTitle,
  metaDescriptionContent,
  pageUrl = `https://cynthia-ricive.vercel.app`,
  author = `Emerenini Cynthia Ngozi`,
  // meta,
}) => {
  const metaData = [
    {
      name: `description`,
      content: metaDescriptionContent,
    },
    {
      name: `og:title`,
      content: pageTitle,
    },
    {
      name: `og:url`,
      content: pageUrl,
    },
    {
      name: `og:description`,
      content: metaDescriptionContent,
    },
    {
      name: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:title`,
      content: pageTitle,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:description`,
      content: metaDescriptionContent,
    },
  ];
  return (
    <Head>
      <title>{pageTitle}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;

export default function Head() {
  const robots = "noindex, nofollow";
  const canonical = "https://kayleigh.page/terms";
  const title = "Kayleigh Page - Terms of Use";

  return (
    <>
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />

      <link rel="canonical" href={canonical} />
      <link rel="shortlink" href={canonical} />
      <meta property="website" content={canonical} />

      <title>{title}</title>
   </>
  );
}

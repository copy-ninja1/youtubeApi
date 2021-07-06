import { Header } from "../components/";

export default function Layout({
  children,
  pageTitle,
  keywords,
  description,
  socialImage,
  ...props
}) {
  return (
    <>
      <section>
        <Header
          pageTitle={pageTitle}
          keywords={keywords}
          description={description}
          socialImage={socialImage}
        />
        <div className="content">{children}</div>
      </section>
    </>
  );
}

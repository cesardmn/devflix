// next
import Head from "next/head";

// components
import Header from "@components/Header";
import Categories from "@components/Categories";

export default function Home() {
  return (
    <>
      <Head>
        <title>DEVFLIX</title>
        <meta name="description" content="Bucket of develpers video links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <Header />
        <Categories />

        <iframe
          width="360"
          height="203"
          src="https://www.youtube-nocookie.com/embed/sZAxLRMxEUo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="360"
          height="203"
          src="https://www.youtube-nocookie.com/embed/sTX0UEplF54"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="360"
          height="203"
          src="https://www.youtube-nocookie.com/embed/Zs68mVQ-Tuk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="360"
          height="203"
          src="https://www.youtube-nocookie.com/embed/539iEttMwxg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

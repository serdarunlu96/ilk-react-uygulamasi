import Head from "next/head";
import stiller from "@/styles/Home.module.css";
import Baslik from "@/pages/Baslik";
import Image from "next/image";
import OzluSoz from "./OzluSoz";
import { useState } from "react";

export default function Home() {
  let [english, setEnglish] = useState(false);

  const insan = {
    ad: "Ahmet",
    soyad: "Yılmaz",
  };

  const degisti = function (e) {
    // alert("yeni değer: " + e.target.checked);
    setEnglish(e.target.checked);
  };

  return (
    <>
      <Head>
        <title>İlk Next.js Uygulamam</title>
      </Head>
      <div>
        <Image className={stiller.sagResim} src="/resim.jpg" alt="Resim" width={160} height={217} />
        <Baslik />
        <p className={stiller.vurgulu}>İlk react uygulamam!</p>
        <p>Saat: {new Date().toLocaleTimeString()}</p>
        <h2>İnsan</h2>
        <p>Adı: {insan.ad}</p>
        <p>Soyadı: {insan.soyad}</p>

        <input type="checkbox" onChange={degisti} /> İngilizce mi?
        <OzluSoz ingilizceMi={english} />
      </div>
    </>
  );
}
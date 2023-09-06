"use client";
import Image from "next/image";
import image1 from "/public/image1.jpg";
import image2 from "/public/image2.jpg";
import image3 from "/public/image3.jpg";
import image4 from "/public/image4.jpg";
import image5 from "/public/image5.jpg";
import { useEffect } from "react";
import localFont from "next/font/local";

const messapia = localFont({
  src: [
    {
      path: "../../public/messapia-bold.woff2",
      style: "normal",
    },
  ],
});

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.001) {
            entry.target.classList.add("in-view");
          } else if (entry.intersectionRatio < 0.03) {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: [0, 0.001, 0.03, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);

      const div = section.querySelector("div");

      document.addEventListener("mousemove", (potato) => {
        const aimX = (potato.pageX - window.innerWidth / 2) / 50;
        const aimY = (potato.pageY - window.innerHeight / 2) / -50;
        div.style.transform = `rotateX(${aimY}deg) rotateY(${aimX}deg)`;
      });
    });
  }, []);
  return (
    <>
      <div className="intro">
        <div className={`box ${messapia.className}`}>
          <div className="column">
            <span>S</span>
            <span>S</span>
          </div>
          <div className="column">
            <span>P</span>
            <span>S</span>
          </div>
        </div>
      </div>

      <main
        className={`${messapia.className} w-screen h-screen overflow-x-hidden`}
      >
        <section>
          <figure className="flex flex-col justify-center items-center">
            <div>
              <Image width={800} height={0} src={image1} alt="image1" />
            </div>
            <figcaption>
              <h1>Seal Street</h1>
              <p>Photo Studio</p>
            </figcaption>
          </figure>
        </section>

        <section className="alternate">
          <figure className="flex flex-col justify-center items-center">
            <figcaption>
              <h1>Seal Street</h1>
              <p>Photo Studio</p>
            </figcaption>
            <div>
              <Image width={800} height={0} src={image2} alt="image2" />
            </div>
          </figure>
        </section>

        <section>
          <figure className="flex flex-col justify-center items-center">
            <div>
              <Image width={800} height={0} src={image3} alt="image3" />
            </div>
          </figure>
        </section>

        <section className="alternate">
          <figure className="flex flex-col justify-center items-center">
            <figcaption>
              <p>@sealstreetphoto</p>
              <p>On Instagram</p>
            </figcaption>
            <div>
              <Image width={800} height={0} src={image4} alt="image4" />
            </div>
          </figure>
        </section>

        <section>
          <figure className="flex flex-col justify-center items-center">
            <div>
              <Image width={800} height={0} src={image5} alt="image5" />
            </div>
            <figcaption>
              <p>@sealstreetphoto</p>
              <p>On Instagram</p>
            </figcaption>
          </figure>
        </section>
      </main>
    </>
  );
}

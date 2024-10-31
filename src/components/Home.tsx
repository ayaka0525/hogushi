import React, { useEffect, useRef } from "react";
import shiatu from "../Images/sejutu.webp";
import massage from "../Images/massage.webp";
import stretch from "../Images/stretch.webp";
import profileImage from "../Images/nozomi-sample.webp";
import { motion } from "framer-motion";
import InitialTransition from "../utils/InitialTransition";

const Home = () => {
  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const title = {
    initial: { x: -120, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const inputs = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]); // 型を明示的に指定

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // 1回だけ発火するように設定
          }
        });
      },
      { threshold: 0.6 } // 要素の60％が表示されたら発火
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section exit={{ opacity: 0 }}>
      <InitialTransition>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
        >
          <div className="hero">
            <div className="main-text">
              <article>
                <h2>
                  あなたのメンタルヘルスとウェルネスへの
                  <br />
                  パーソナライズされたアプローチ
                </h2>
                <p>
                  私たちは、あなたがより幸せで、より穏やかになり、気分や精神状態をコントロールできるようお手伝いします。
                  <br />
                  あなたがどれだけ長い間苦労してきたとしても、私たちはあなたを助けることができます。
                </p>
              </article>
            </div>
            <div className="Booking-Form">
              <input type="date" className="date-input" />
              {/* 日付入力フィールド  */}
              <button type="button" className="btn">
                ウェブ予約
              </button>
            </div>
          </div>

          <div className="description">
            <article>
              栄養学と機能医学を通じて、男性と女性の心と体のバランスを回復できるよう支援します。
            </article>
          </div>
        </motion.div>
        <motion.section exit={{ opacity: 0 }}>
          <InitialTransition>
            <motion.div
              className="text-container text-center"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="main-container">
                <div className="text-section">
                  <article>
                    <h4>
                      「姫路整体屋さん」は、整体を通じて心と体のバランスを回復できるよう支援したい。
                      そんな思いから誕生しました。
                    </h4>
                    整体師として10年以上の経験を持ち、強いもみほぐしを得意としています。
                    お客様の体の状態やご希望に合わせて、疲れやコリをしっかりと解消するお手伝いをさせていただきます。
                    多くのリピーターの方々に支えられ、皆様に愛される整体院を目指して、日々心を込めた施術を行っています。
                    心身ともにリフレッシュできるひとときを、ぜひ「姫路整体屋さん」でお過ごしください！
                    <p className="name">店主のぞみ</p>
                  </article>
                </div>
                <div className="info-section">
                  <img
                    src={profileImage}
                    className="profileImage"
                    alt="のぞみのプロフィール画像"
                  />
                </div>
              </div>
            </motion.div>
          </InitialTransition>
        </motion.section>

        <motion.section
          id="skill"
          className="text-container text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", duration: 0.6, delay: 0.8 }}
        >
          <h2 className="title">施術提供の種類</h2>
          <div className="row text-center">
            {[
              "指圧",
              "マッサージ",
              "ストレッチ",
              "鍼治療",
              "カイロプラクティック",
              "アロマテラピー",
            ].map((title, index) => (
              <div
                key={index}
                className="skill-Card col-md-4 services"
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div className="card text-center">
                  <img
                    src={
                      title === "指圧"
                        ? shiatu
                        : title === "マッサージ"
                        ? massage
                        : title === "ストレッチ"
                        ? stretch
                        : title === "鍼治療"
                        ? shiatu
                        : title === "カイロプラクティック"
                        ? massage
                        : stretch
                    }
                    alt={title}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">
                      {title === "指圧"
                        ? "点圧法がつかえます"
                        : title === "マッサージ"
                        ? "ディープティッシュマッサージがつかえます"
                        : title === "ストレッチ"
                        ? "静的ストレッチがつかえます"
                        : title === "鍼治療"
                        ? "経絡に基づいた鍼治療が提供されます"
                        : title === "カイロプラクティック"
                        ? "骨格調整で体のバランスを整えます"
                        : "リラクゼーションと癒し効果のあるアロマテラピー"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </InitialTransition>
    </motion.section>
  );
};

export default Home;

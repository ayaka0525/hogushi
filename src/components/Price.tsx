import React from "react";
import { motion } from "framer-motion";
import InitialTransition from "../utils/InitialTransition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <InitialTransition>
      <motion.div
        className="price-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        // initial={{ width: 0 }}
        // animate={{ width: "100%" }}
        // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <h1>料金システム</h1>
        <section className="page-section" id="services">
          <div className="service">
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faHandHoldingHeart} size="1x" />
                </span>
                <h4 className="my-3">リラクゼーション30分コース</h4>
                <p className="text-muted">
                  軽い肩こりや疲れが気になる方におすすめの短時間リフレッシュコースです。
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faHandHoldingHeart} size="1x" />
                </span>
                <h4 className="my-3">全身リフレッシュ60分コース</h4>
                <p className="text-muted">
                  全身をくまなくほぐし、日常の疲れをしっかりとケアします。
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faHandHoldingHeart} size="1x" />
                </span>
                <h4 className="my-3">じっくり集中90分コース</h4>
                <p className="text-muted">
                  お疲れの箇所をじっくりとほぐし、深いリラクゼーションを提供します。疲れが溜まっている方におすすめのコースです。
                </p>
              </div>
              <div className="text-center custom-H2">
                <h2 className="section-heading text-uppercase">
                  Custom Order Custom Order Custom Order Custom Order Custom
                  Order Custom Order Custom Order Custom Order Custom Order
                  Custom Order
                </h2>
                <h2 className="section-heading text-uppercase">
                  Custom Order Custom Order Custom Order Custom Order Custom
                  Order Custom Order Custom Order Custom Order Custom Order
                  Custom Order
                </h2>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-4 text-center mb-5">
          <h2>パック料金</h2>
        </div>

        <div className="cost-container text-center justify-center">
          <table className="mb-5 mx-auto">
            <tr>
              <th className="px-6 py-4">
                <span>平日夜</span>18:00〜23:00 (最大３時間)
              </th>
              <td className="px-6 py-4">¥4,000</td>
            </tr>
            <tr>
              <th className="px-6 py-4">
                <span>土日祝</span>10:00〜18:00 (最大４時間)
              </th>
              <td className="px-6 py-4">¥6,000</td>
            </tr>
          </table>
        </div>
      </motion.div>
    </InitialTransition>
  );
};

export default Blog;

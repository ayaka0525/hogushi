import React from "react";
import { motion } from "framer-motion";
import InitialTransition from "../utils/InitialTransition";

const Contact = () => {
  return (
    <InitialTransition>
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <form>
          <div className="form mb-3">
            <label className="form-label">メールアドレス</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              お客様の個人情報は適切かつ慎重に管理するための措置を講じます。
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">お名前</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">お問い合わせ内容</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="form-info mt-4">
            <p className="mt-4">個人情報保護方針</p>
            <p>
              姫路整体屋さん（以下、当院）は、お客様の個人情報を保護することの重要性を認識し、以下の方針に基づき、適切な管理を行います。
              個人情報の収集について
              当院は、お客様のご予約やお問い合わせに際して、お名前、連絡先などの個人情報を必要に応じて収集します。これらの情報は、お客様へのサービス提供やご連絡にのみ利用し、適法かつ公正な手段で収集いたします。
              個人情報の利用目的
              収集した個人情報は、以下の目的にのみ使用いたします。
              予約の管理、確認、および変更の連絡
              施術に関するご案内やサービス提供 お客様からのお問い合わせへの対応
              個人情報の第三者提供について
              当院は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              個人情報の管理について
              お客様の個人情報は適切かつ慎重に管理し、情報漏洩、紛失、不正アクセスを防止するための措置を講じます。
              個人情報の開示、訂正、削除について
              お客様がご自身の個人情報の開示、訂正、または削除を希望される場合には、ご本人様確認の上、速やかに対応いたします。
              お問い合わせ窓口
              個人情報の取り扱いに関するご質問やご相談は、当院のお問い合わせ窓口までご連絡ください。
            </p>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              確認しました
            </label>
          </div>
          <div className="contact text-center">
            <button type="submit" className="btn mt-3 w-100">
              送信
            </button>
          </div>
        </form>
      </motion.div>
    </InitialTransition>
  );
};

export default Contact;

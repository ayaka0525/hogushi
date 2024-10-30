// src/HogushiLanding.js
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import { db } from "./firebaseConfig";

const HogushiLanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Firestoreにデータを送信
      await db.collection("reservations").add(formData);
      console.log("Reservation added:", formData);
      alert("予約が完了しました！");
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        message: "",
      }); // フォームをリセット
    } catch (error) {
      console.error("Error adding reservation: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">hogushi</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a
              href="#reservation"
              className="text-gray-600 hover:text-gray-900"
            >
              予約
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* メインビジュアル */}
      <div className="pt-16">
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-100">
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <img
                src="/images/logo.png"
                alt="logo"
                className="absolute w-full h-full object-cover rounded-lg shadow-xl animate-spin-slow"
                style={{
                  animation: "spin 20s linear infinite",
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">hogushi</h2>
              <p className="text-xl md:text-2xl">心と体の調和を目指して</p>
            </div>
          </div>
        </div>
      </div>

      {/* 予約フォーム */}
      <section id="reservation" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">ご予約</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                  <User size={20} />
                  <span>お名前</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                  <Phone size={20} />
                  <span>電話番号</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                  <Calendar size={20} />
                  <span>希望日</span>
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                  <Clock size={20} />
                  <span>希望時間</span>
                </label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-gray-700 mb-2">
                <Mail size={20} />
                <span>メールアドレス</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-gray-700 mb-2">
                <MessageSquare size={20} />
                <span>ご要望・ご質問など</span>
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-2 border rounded-lg h-32"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                予約する
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-4">hogushi</p>
          <p className="text-sm text-gray-400">
            © 2024 hogushi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HogushiLanding;

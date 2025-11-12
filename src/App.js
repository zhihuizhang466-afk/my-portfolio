// src/App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import "./index.css";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("works");

  const works = [
    {
      title: "人文纪录片系列",
      description:
        "独立策划与拍摄剪辑，关注人文议题与城市记忆。以纪实影像探索叙事张力。",
      videos: [
        {
          label: "西湖图",
          src: "https://drive.google.com/file/d/15NqybAxbPksQEe-Jglj3f-q_uDCZDSRh/preview",
        },
        {
          label: "竞技绿荫，燃情亚运",
          src: "https://drive.google.com/file/d/1UQWlQK8cgS9skaBEn3gfMt_VN7ABQbcb/preview",
        },
      ],
    },
    {
      title: "综艺节目《亲爱的小孩》",
      description:
        "担任编导与后期剪辑：选题策划、分镜设计与后期制作，强化叙事逻辑与视觉节奏。",
      cover: "/covers/亲爱的小孩.jpg",
      link: "https://v.qq.com/x/page/f3352kr1kou.html",
    },
    {
      title: "飞书官号内容运营与整合传播",
      description:
        "负责飞书抖音、视频号选题策划与运营；通过数据分析优化选题与发布策略。",
      links: [
        {
          url: "https://www.douyin.com/user/MS4wLjABAAAAgiKdxrADb7pxs2Zf63yTfF08h29WlBg3rapJnWjDfhcnPRXULhRLA7mZzW4rna8J?from_tab_name=main&modal_id=7343814283236494603",
          cover: "/covers/SHE.jpg",
          label: "飞书 SHE POWER 项目",
        },
        {
          url: "https://www.douyin.com/user/MS4wLjABAAAAgiKdxrADb7pxs2Zf63yTfF08h29WlBg3rapJnWjDfhcnPRXULhRLA7mZzW4rna8J?from_tab_name=main&modal_id=7355779323007126847",
          cover: "/covers/川渝.jpg",
          label: "飞书 成都峰会 项目",
        },
      ],
    },
  ];

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const headerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut" },
  };

  return (
    <motion.div
      {...headerAnimation}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900"
    >
      {/* ===== 顶部导航 ===== */}
      <header className="flex justify-between items-center px-8 py-6 shadow-sm sticky top-0 bg-white/70 backdrop-blur-lg z-50">
        <h1 className="text-2xl font-bold tracking-wide">之蕙 · Portfolio</h1>
        <nav className="flex gap-6 text-gray-600 font-medium">
          <button
            onClick={() => setActiveTab("about")}
            className={activeTab === "about" ? "text-blue-600" : ""}
          >
            关于我
          </button>
          <button
            onClick={() => setActiveTab("works")}
            className={activeTab === "works" ? "text-blue-600" : ""}
          >
            作品
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={activeTab === "contact" ? "text-blue-600" : ""}
          >
            联系
          </button>
        </nav>
      </header>

      {/* ===== 内容部分 ===== */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* ===== 关于我 ===== */}
        {activeTab === "about" && (
          <motion.div {...pageTransition} className="text-center">
            <h2 className="text-3xl font-bold mb-6">关于我</h2>

            {/* 头像 + 名字 */}
            <motion.img
              src="/covers/张之蕙形象照.JPG"
              alt="ZhiHui Portrait"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">张之蕙</h3>
            <p className="text-gray-600 mb-6">👋 可以叫我智慧。</p>

            {/* 简介 */}
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-left">
              成均馆大学艺术学协同专业硕士研究生，
              本科毕业于浙江传媒学院广播电视编导专业。<br />
              热爱影像叙事与传播研究，擅长内容策划、剪辑与视觉风格设计。<br />
              作品涵盖人文纪录片、综艺节目与品牌视频，
              追求在艺术与传播之间的自由表达。<br />
              个性特征：自驱力强 · 外向开放 · 善于沟通 · 乐于助人。
            </p>

            {/* 小红书 */}
            <div className="mt-8">
              <a
                href="https://www.xiaohongshu.com/user/profile/5c6457320000000012012b43"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline font-medium"
              >
                📷 个人小红书：一小颗智慧树
              </a>
            </div>
          </motion.div>
        )}

        {/* ===== 作品 ===== */}
        {activeTab === "works" && (
          <motion.div {...pageTransition}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🌿 影像与表达 · Selected Works
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {works.map((work, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="border rounded-2xl shadow p-4 bg-white hover:shadow-lg transition-all"
                >
                  {work.videos ? (
                    <div className="space-y-4 mb-3">
                      {work.videos.map((v, index) => (
                        <div key={index}>
                          <iframe
                            src={v.src}
                            allow="autoplay"
                            className="w-full aspect-video rounded-xl shadow-sm"
                            title={v.label}
                          ></iframe>
                          <p className="text-center mt-2 text-gray-700 font-medium">
                            🎬 {v.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : work.links ? (
                    <div className="flex gap-3 justify-center p-2">
                      {work.links.map((item, j) => (
                        <a
                          key={j}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-1/2 transform transition-transform hover:scale-105"
                        >
                          <img
                            src={item.cover}
                            alt={item.label}
                            className="w-full aspect-square object-cover rounded-xl shadow-sm hover:shadow-lg duration-300"
                          />
                          <p className="text-blue-500 text-sm text-center mt-2">
                            {item.label}
                          </p>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={work.cover}
                        alt={work.title}
                        className="w-full aspect-square object-cover rounded-xl hover:scale-105 hover:shadow-lg transition-transform duration-300"
                      />
                    </a>
                  )}

                  <div className="p-2">
                    <h3 className="font-bold text-lg">{work.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {work.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ===== 联系我 ===== */}
        {activeTab === "contact" && (
          <motion.div {...pageTransition} className="text-center space-y-4">
            <h2 className="text-3xl font-bold mb-4">联系我</h2>
            <p>📧 邮件： 
              <a
                href="mailto:zhihui1007@icloud.com"
                className="text-blue-600 hover:underline"
              >
                zhihui1007@icloud.com
              </a>
            </p>
            <p>📞 电话：🇨🇳 +86 13356027920 ｜ 🇰🇷 +82 01039681276</p>
            <p>📍 Seoul · Shanghai · Hangzhou</p>
          </motion.div>
        )}
      </main>

      {/* ===== 页脚 ===== */}
      <footer className="mt-16 text-center text-gray-500 text-sm pb-6">
        © 2025 张之蕙 | Designed with ❤️ React + Tailwind
      </footer>
    </motion.div>
  );
}

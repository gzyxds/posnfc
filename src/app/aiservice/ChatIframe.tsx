'use client';

/**
 * 聊天iframe组件 - 客户端组件
 * 用于嵌入外部聊天界面
 *
 * @returns {JSX.Element} 聊天iframe组件
 */
export default function ChatIframe() {
  return (
    <>
      <iframe
        src="https://www.cnai.art/chat/js-2f5f949ee4e1f0c37cfa18fe6aed7567FGXGs"
        className="chat-iframe"
        frameBorder="0"
      >
      </iframe>
      <style jsx>{`
        /* iframe框设置固定宽度1800px并水平居中 */
        .chat-iframe {
          width: 100%;
          height: calc(100vh - 160px); /* 减去头部和底部的高度 */
          border: none;
          margin: 50px auto 0; /* 增加与上方头部的间距并水平居中 */
          padding: 0;
          overflow: hidden;
          max-width: 100%; /* 确保在小屏幕上不会溢出 */
          display: block; /* 确保iframe作为块级元素 */
        }
      `}</style>
    </>
  );
}
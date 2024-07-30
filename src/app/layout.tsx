// app/layout.tsx
"use client";

import { FC, ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <Head>
        <title>Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        {children}
        <style jsx global>{`
          body {
            font-family: Arial, sans-serif;
            background: #f3f4f6;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            text-align: center;
            background: #ffffff;
            padding: 2em;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .title {
            font-size: 2em;
            margin-bottom: 0.5em;
            color: #333;
          }
          .btn-group {
            display: flex;
            flex-direction: column;
            gap: 1em;
            align-items: center;
          }
          .btn {
            padding: 0.75em 1.5em;
            font-size: 1em;
            color: #ffffff;
            background: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
          }
          .btn:hover {
            background: #0056b3;
          }
        `}</style>
      </body>
    </html>
  );
};

export default Layout;

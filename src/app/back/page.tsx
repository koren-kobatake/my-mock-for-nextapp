// app/backend/page.tsx
"use client";

import { FC } from 'react';
import Layout from '../layout';

const BackendPage: FC = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="title">決済バック</h1>
        <p>これは決済バックのページです。</p>
        <style jsx>{`
          .container {
            padding: 2em;
          }
          .title {
            font-size: 2em;
            color: #333;
          }
          p {
            font-size: 1.2em;
            color: #555;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default BackendPage;

"use client";

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Layout from './layout';

const HomePage: FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Layout>
      <div className="container">
        <h1 className="title">決済Mock画面（法人ダミー）</h1>
        <div className="btn-group">
          <button onClick={() => handleNavigation('/portal')} className="btn">
            決済ポータル
          </button>
          <button onClick={() => handleNavigation('/back')} className="btn">
            決済バック
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

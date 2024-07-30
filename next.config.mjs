import path from 'path';
// import { getDatabaseUrl } from './lib/getDatabaseUrl'; // パラメータストアからDB URLを取得する関数

/**
 * next.config.mjs
 * 
 * Next.jsアプリケーションの設定を行うためのものです。
 * プロジェクト全体の設定やカスタマイズを行うことができます。
 * 
 * 主な設定項目:
 * 1. React Strict Mode:
 *    - Reactの厳密モードを有効にする設定です。これにより、潜在的な問題を特定しやすくなります。
 * 
 * 2. Swc Minify:
 *    - SWCを使用してコードを圧縮する設定です。これにより、ビルド速度が向上し、パフォーマンスが向上します。
 * 
 * 3. Page Extensions:
 *    - プロジェクトで使用するページファイルの拡張子を指定する設定です。これにより、特定の拡張子を持つファイルをページとして扱います。
 * 
 * 使用例:
 * - この設定ファイルに設定を追加または変更することで、Next.jsアプリケーションの動作をカスタマイズできます。
 * 
 * 注意:
 * - このファイルの変更を保存した後、サーバーを再起動する必要があります。
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(process.cwd(), 'app');
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;

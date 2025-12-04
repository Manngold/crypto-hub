import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <div className="app">
      <aside className="app-slider">
        <div className="app-logo">
          <Link to="/market">Crypto Hub</Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/market">Market</NavLink>
            </li>
            <li>
              <NavLink to="watchlist">Watchlist</NavLink>
            </li>
            <li>
              <NavLink to="portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="settings">Settings</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="app-main">
        <header className="app-header">
          <div className="app-header-left">
            <span>🚀 CryptoHub · 실시간 암호화폐 대시보드</span>
          </div>
          <div className="app-header-right">
            {/* 나중에 테마 전환, 사용자 정보, 로그아웃 버튼 등이 들어갈 자리 */}
            <span>여기에 유저/테마 정보가 들어갈 예정</span>
          </div>
        </header>
        {/* 실제 페이지 콘텐츠 */}
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

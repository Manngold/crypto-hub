import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CoinDetailPage from '../pages/CoinDetailPage';
import MarketPage from '../pages/MarketPage';
import NotFoundPage from '../pages/NotFoundPage';
import PortfolioPage from '../pages/PortfolioPage';
import SettingsPage from '../pages/SettingsPage';
import WatchListPage from '../pages/WatchListPage';
import MainLayout from '../layouts/MainLayout';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/market" replace />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/coins/:id" element={<CoinDetailPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

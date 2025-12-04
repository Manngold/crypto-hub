import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      <p>
        <Link to="/market">마켓으로 돌아가기</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;

import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, isLoggedIn }) => {
    const location = useLocation();

    if (!isLoggedIn) {
        // 로그인되어 있지 않으면 로그인 페이지로 리디렉션
        return <Navigate to="/user/sign-in" state={{ from: location }} replace />;
    }

    // 로그인되어 있으면 해당 컴포넌트를 렌더링
    return children;
};

export default PrivateRoute;
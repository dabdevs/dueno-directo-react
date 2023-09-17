import { useContext } from 'react';
import AuthContext from '../contexts/AuthProvider';

function LogoutButton() {
    const { logout } = useContext(AuthContext)
    
    const handleLogout = () => {
        logout(); // Call the logout function
    };

    return (
        <button className={'block px-4 py-2 text-sm text-gray-700'} onClick={handleLogout}>Logout</button>
    );
}

export default LogoutButton;

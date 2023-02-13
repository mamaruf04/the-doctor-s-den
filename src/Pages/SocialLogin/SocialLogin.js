import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res => {
            toast.success(`Login as ${res.user?.displayName}`)
              navigate(from, { replace: true });
          })
          .catch(err => {
            toast(err.message);
          })
      }

    return (
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
    );
};

export default SocialLogin;
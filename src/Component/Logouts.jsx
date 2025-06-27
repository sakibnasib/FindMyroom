import React, { use } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Logouts = () => {
    const {logOut}=use(AuthContex);
     const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
          .then(() => {
            navigate("/");
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "You Logged Out successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
    return (
        <div>
            <button
                    onClick={handleLogOut}
                    className="   "
                  >
                    Logout
                  </button>
        </div>
    );
};

export default Logouts;
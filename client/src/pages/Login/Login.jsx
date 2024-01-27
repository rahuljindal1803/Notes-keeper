import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/profile.png";
import styles from "../../styles/Login.module.css";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <div className="container mx-auto flex justify-center ">
        <div className=" w-5/12 flex justify-center items-center h-screen ">
          <div className="bg-[#ffffff8c] rounded-2xl shadow-2xl w-8/12 backdrop-blur-md border-1 border-gray-50 h-3/4  pt-4 ">
            <div className="title flex flex-col  items-center">
              <h4 className="text-5xl font-bold">Login!</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Your Personal Space for Ideas and Thoughts
              </span>
            </div>
            <form action="/user/login" method="post" className="py-1">
              <div className="profile flex justify-center py-4">
                <img src={avatar} className={styles.profile_img} alt="" />
              </div>
              <div className=" flex flex-col justify-center items-center gap-6">
                <input
                  type="text"
                  id="name"
                  value={user.email}
                  className={styles.textbox}
                  placeholder="Username"
                  on
                />
                <input
                  type="text"
                  value={user.password}
                  className={styles.textbox}
                  placeholder="password"
                />

                <button
                  type="submit"
                  className="border box-border bg-indigo-500 hover:bg-[#ff6a6a] transition-all w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center"
                >
                  Let's Go
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500 ">
                  Don't have an account?{" "}
                  <Link className="text-red-500" to="/signup">
                    Register Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

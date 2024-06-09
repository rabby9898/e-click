import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import imageToBase from "../Api/ImageUploader";
import SummaryApi from "../common";
import toast from "react-hot-toast";
const Register = () => {
  const [show, setShow] = useState(false);

  // gradient css
  const gradientStyle = {
    background: "linear-gradient(to right, #7d0c0c, #dc2626, #ee7724)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  const sectionBg = {
    background: `url('https://i.ibb.co/6mQBTyF/6020.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });
  console.log("profile", data.profilePic);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageToBase(file);

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      toast.error("Please check password and confirm password");
    }
  };
  return (
    <section
      style={sectionBg}
      className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700"
    >
      <div className="container h-full p-10 mx-auto">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="max-w-5xl">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-2/5 lg:rounded-e-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #dc2626 , #dc2626 , #7d0c0c)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-3/5">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-32 rounded-full"
                        // src={loginIcon}
                        src={
                          data.profilePic ||
                          "https://i.ibb.co/6s3jSTw/user-4517806.png"
                        }
                        alt="logo"
                      />
                      <h4
                        style={gradientStyle}
                        className="mb-12 mt-3 pb-1 text-3xl font-semibold"
                      >
                        Join With Us
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* <!--Username input--> */}
                      <div
                        className="relative mb-4 mt-10"
                        data-twe-input-wrapper-init
                      >
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-[0.1px] border-gray-200  bg-transparent px-3 py-[0.8rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill)]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Your Name"
                          name="name"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div
                        className="relative mb-4 mt-10"
                        data-twe-input-wrapper-init
                      >
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-[0.1px] border-gray-200  bg-transparent px-3 py-[0.8rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill)]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Your Email"
                          name="email"
                          onChange={handleOnChange}
                        />
                      </div>

                      {/* <!--Password input--> */}
                      <div
                        className="relative mb-4"
                        data-twe-input-wrapper-init
                      >
                        <input
                          type={show ? "text" : "password"}
                          className="peer block min-h-[auto] w-full rounded border-[0.1px] border-gray-200 bg-transparent mt-5 px-3 py-[0.8rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill )]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                          name="password"
                          onChange={handleOnChange}
                        />
                        <span
                          onClick={() => setShow(!show)}
                          className="absolute top-[10px] right-[32px] text-2xl"
                        >
                          {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </span>
                      </div>
                      <div
                        className="relative mb-4"
                        data-twe-input-wrapper-init
                      >
                        <input
                          type={show ? "text" : "password"}
                          className="peer block min-h-[auto] w-full rounded border-[0.1px] border-gray-200 bg-transparent mt-5 px-3 py-[0.8rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill )]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          onChange={handleOnChange}
                        />
                        <span
                          onClick={() => setShow(!show)}
                          className="absolute top-[10px] right-[32px] text-2xl"
                        >
                          {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </span>
                      </div>
                      <div className="my-8">
                        <label
                          htmlFor="image"
                          className="block mb-2 text-base text-gray-400"
                        >
                          Select Your Profile Image:
                        </label>
                        <input
                          onChange={handleUploadPic}
                          type="file"
                          className="file-input file-input-bordered file-input-error w-full max-w-xs"
                          name="image"
                        />
                      </div>

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-3 pt-4 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          type="submit"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #dc2626, #dc2626 , #7d0c0c)",
                          }}
                        >
                          Register
                        </button>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <Link to={"/login"}>
                          <button
                            type="button"
                            className=" flex justify-center items-center gap-2 rounded border-2 hover:border-red-600 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            Login <FaArrowRightLong />
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

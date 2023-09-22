"use client";

import RowResponsive from "../formaters/RowResponsive";
import FormResponsiveContainer from "../formaters/FormResponsiveContainer";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GiSandsOfTime } from "react-icons/gi";
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";

export const LoginForm = () => {

  const { user, googleLogin } = UserAuth();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [loadingUp, setLoadingUp] = useState(false);
  const [error, setError] = useState("");

  const passwordVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  const handleGoogleLogin = async () => {
    await googleLogin();
    router.refresh();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      setLoadingUp(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await axios.post("/api/auth/login", formData);
      if (response.status === 200) {
        if (response.data.rol === "cliente") {
          router.refresh();
          router.push("/catalog/mi-cuenta");
        } else if (response.data.rol === "cocina") {
          router.refresh();
          router.push("/cocina");
        } else if (response.data.rol === "repartidor") {
          router.refresh();
          router.push("/repartidor");
        } else {

          router.refresh();
          router.push("/admin");
        }
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
    setLoadingUp(false);
  });

  useEffect(() => {
    if (user) {
      const googleData = { nombreCompleto: user.displayName, email: user.email };
      try {
        axios.post("/api/auth/loginGoogle", googleData).then((res) => {
          if (res.status === 200) {
            router.refresh();
            router.push("/catalog/mi-cuenta");
          } else {
            router.refresh();
            router.push("/catalog/registro");
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]); 

  return (
    <>
      <RowResponsive>
        <FormResponsiveContainer>
          {loadingUp ? (
            <div className="alert alert-info border-1 h-12 mb-3 font-extrabold shadow-secondary shadow-xl border-primary flex items-center animate-bounce">
              <GiSandsOfTime className="text-2xl" />
              PROCESANDO...
            </div>
          ) : (
            <div className="alert-placeholder h-12 mt-3"></div>
          )}
          <div className="min-w-full flex flex-col items-center">
            <form onSubmit={onSubmit}>
              <h1 className="text-xl text-neutral text-center">
                INICIAR SESIÓN
              </h1>
              <div className="divider mt-2"></div>
              <div className="flex flex-col mt-6 gap-4 justify-center">
                <div className="flex flex-col ">
                  <span className="label-text text-sm font-medium mb-1">
                    Email
                  </span>
                  <input
                    className="input input-bordered input-sm w-full min-w-full rounded h-7"
                    type="text"
                    placeholder="email@example.com"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email requerido",
                      },
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Email inválido",
                      },
                    })}
                  />
                  {errors.email ? (
                    <span className="mt-1 text-xs text-warning">
                      {errors.email.message}
                    </span>
                  ) : (
                    <span className="mt-1 text-xs">
                      <br></br>
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="label-text text-sm font-medium mb-1">
                    Contraseña
                  </span>
                  <div className="flex items-center">
                    <input
                      className="relative input input-bordered input-sm w-full min-w-full rounded h-7"
                      placeholder="contraseña"
                      type={visible ? "text" : "password"}
                      {...register("password", {})}
                    />
                    <button
                      type="button"
                      className="relative flex right-8 items-center ml-2 h-full mr-10"
                      onClick={passwordVisibility}
                    >
                      {visible ? (
                        <AiOutlineEye className="text-xl" />
                      ) : (
                        <AiOutlineEyeInvisible className="text-xl" />
                      )}
                    </button>
                  </div>
                  {error ? (
                    <span className="mt-4 text-xs text-warning text-center">
                      {error}
                    </span>
                  ) : (
                    <span className="mt-4 text-xs">
                      <br></br>
                    </span>
                  )}
                </div>
              </div>
              <div className="flex mt-5 justify-center">
                <button
                  type="submit"
                  className="items-center flex gap-x-2 first-letter:font-bold btn-accent bg-opacity-80 px-8 py-1 rounded-md mt-0"
                >
                  <AiFillLock className="text-xl" />
                  Iniciar sesión segura
                </button>
              </div>
              <p className="mt-4 flex text-sm justify-center">
                ¿No tienes cuenta?
              </p>
              <div className="flex text-sm underline justify-center">
                <Link href="/catalog/registro">Registrate</Link>
              </div>
              <div className="divider"></div>
            </form>
            <p>O ingresa con</p>
            <button
              onClick={handleGoogleLogin}
              className="items-center gap-x-1.5 mt-4 mb-16 flex font-bold border-solid border-neutral border-2 rounded-sm px-4 py-0.5 border-opacity-30"
            >
              <FcGoogle className="text-2xl px-0 mx-0" />
              Google
            </button>
          </div>
        </FormResponsiveContainer>
      </RowResponsive>
    </>
  );
};
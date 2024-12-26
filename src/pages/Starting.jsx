import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthButton from "../components/buttons/AuthButton";
import { useNavigate } from "react-router-dom";
import { getUser } from "../redux/slices/users/usersAction";

const Starting = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const goToNewEstablishment = () => {
    setIsLoading(true);
    navigate("/newestablishment");
    setIsLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentUser) {
        dispatch(
          getUser({
            user_id: currentUser.id,
          })
        );
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch, currentUser]);

  return (
    <div className="w-screen h-screen flex items-center justify-center px-[20vw] py-[10vh]">
      <div>
        <p className=" text-black-700 font-semibold text-2xl">
          {currentUser.name}
        </p>
        <div className="py-6">
          <h2 className="text-4xl font-semibold text-black-950">
            Bienvenue sur <span className="text-primary-600">Bevmarket</span>,
          </h2>
          <p className="italic">
            La platforme de gestion de votre commerce des boissons
          </p>
        </div>
        <p className="text-sm">
          Actuellement vous n'etes employe par aucun etablissement, veuillez
          attendre qu'un etablissement vous ajoutes en tant qu'employee ou creez
          votre propre etablissement pour commencer
        </p>
        <div className="w-full grid grid-cols-2 py-6">
          <div></div>
          <AuthButton
            name={"Creer un etablissement"}
            loading={isLoading}
            onClick={goToNewEstablishment}
          />
        </div>
      </div>
    </div>
  );
};

export default Starting;

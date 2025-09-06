import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
type Props = {
  children: React.ReactNode;
};
export const PageGuard = ({ children }: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}api/auth/check`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (res.ok) {
          setLoading(false);
        } else {
          navigate("/");
        }
      } catch (err) {
        navigate("/");
      }
    };

    checkAuth();
  }, []);

  return <>{children}</>;
};

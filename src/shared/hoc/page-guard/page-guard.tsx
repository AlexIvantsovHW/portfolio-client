import { useEffect } from "react";
import { useNavigate } from "react-router";
type Props = {
  children: React.ReactNode;
};
export const PageGuard = ({ children }: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/");
    }
  }, []);

  return <>{children}</>;
};

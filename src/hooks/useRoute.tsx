import { NavigateFunction, useNavigate } from "react-router-dom";

export default function useRoute(): NavigateFunction {
  const navigate = useNavigate();

  function routeTo(to: any) {
    navigate(to);
  }

  return routeTo;
}

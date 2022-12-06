import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useParams = () => {

  const [params, setParams] = useSearchParams();
  const searchParamFromURl = params.get('search') || '';
  const categoryFromURl = params.getAll('category') || '';


  const myParams = useMemo(() => {
    return { searchParamFromURl, categoryFromURl };
  }, [params]);

  /**
   * Set query string parameter.
   * @param {string} name Parameter name.
   * @param {string | string[]} value Parameter value.
   */
  const setParam = (name, value) => {
    const newParams = new URLSearchParams(params);

    newParams.delete(name);

    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item));
    } else if (value.trim()) {
      newParams.set(name, value.trim());
    }

    setParams(newParams);
  };

  return { myParams, setParam };

};


export default useParams;
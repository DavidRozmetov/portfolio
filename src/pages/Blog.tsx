import { useEffect } from "react";
import Aos from "aos";
export const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return <div data-aos="fade-up-right">Blog</div>;
};

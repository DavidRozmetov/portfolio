import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";

export const LinkedInBanger = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Helmet>
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>
      </Helmet>
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="davranbek-rozmetov-5a89301aa"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://th.linkedin.com/in/davranbek-rozmetov-5a89301aa?trk=profile-badge"
        ></a>
      </div>
    </div>
  );
};

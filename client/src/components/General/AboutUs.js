import React from "react";
import AboutUsCard from "./AboutUsCard";

// Hvert AboutUsCard instance er et medlem av gruppen. Hensikten er å vise frem oss som gruppe

export const AboutUs = () => {
  return (
    <div className="d-flex justify-content-around mt-5">
      <AboutUsCard
        name="Mathias"
        studentNummer="233562"
        desc="FullStack Utvikler for denne nettsiden"
        imgURL="https://lh3.googleusercontent.com/a-/AOh14GjkusQ7Q3F3Q9d0EHHCOa9CMGK0ddT3O6ooM2BmkCQ=s96-c"
      />
      <AboutUsCard
        name="Benjamin"
        studentNummer="233535"
        desc="FullStack Utvikler for denne nettsiden"
        imgURL="https://lh3.googleusercontent.com/a-/AOh14GjkusQ7Q3F3Q9d0EHHCOa9CMGK0ddT3O6ooM2BmkCQ=s96-c"
      />
      <AboutUsCard
        name="Johannes"
        studentNummer="233563"
        desc="FullStack Utvikler for denne nettsiden"
        imgURL="https://lh3.googleusercontent.com/ogw/ADGmqu8ExUclKCbgKDVJz3m061cnGE2amzzHRFMawmK_=s83-c-mo"
      />
      <AboutUsCard
        name="Håkon"
        studentNummer="233546"
        desc="FullStack Utvikler for denne nettsiden"
        imgURL="https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/47575869_1159498214213577_7608913015907287040_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eINdlVNvylMAX8ol9Ao&_nc_ht=scontent-arn2-1.xx&oh=ff41592febdf52ac36da99e306e6d8a0&oe=60D848D0"
      />
    </div>
  );
};
export default AboutUs;

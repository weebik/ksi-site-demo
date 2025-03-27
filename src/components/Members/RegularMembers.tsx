import TitleSection from "../Common/TitleSection.tsx";
import MemberCard from "./MemberCard";
import members from "../../TEMPORARY_DATA/members.ts";

function RegularMembers() {
  return (
    <section
      className="bg-dark-section-secondary z-10 pt-40 pb-50 -mt-30 relative items-center justify-center"
      style={{ clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 100%)" }}
    >
      {/* note: adjust the clipPath value to fit the design */}
      <div className="container flex flex-col gap-20 mx-auto max-w-350 items-center">
        <TitleSection header="Pozostali członkowie" />
        <div className="grid grid-cols-4 gap-10">
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RegularMembers;

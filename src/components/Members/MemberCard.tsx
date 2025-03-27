interface MemberProps {
  member: MemberCardProps;
}

interface MemberCardProps {
  imageURL: string;
  name: string;
  mail: string;
}

function MemberCard({ member }: MemberProps) {
  return (
    <div className="flex flex-col items-center bg-dark-background-primary px-5 py-5 rounded">
      <img
        src={member.imageURL}
        alt=""
        className="w-50 h-40 rounded object-cover"
      />
      <div className="text-center mt-4">
        <h2 className="text-dark-text-primary text-2xl font-bold">
          {member.name}
        </h2>
        <hr className="border-action-blue border-t-3 m-0.5" />
        <p className="text-dark-text-secondary text-lg">{member.mail}</p>
      </div>
    </div>
  );
}

export default MemberCard;

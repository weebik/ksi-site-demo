import { Link } from "react-router";
import ReadMoreBtn from "../../assets/ReadMoreIcon.svg";

interface ReadMoreProps {
  link: string;
}

function ReadMore({ link }: ReadMoreProps) {
  return (
    <Link to={link}>
      <div className="flex items-center gap-2 text-dark-text-secondary hover:text-action-blue cursor-pointer">
        <p>Read More</p>
        <img src={ReadMoreBtn} alt="read more" />
      </div>
    </Link>
  );
}

export default ReadMore;

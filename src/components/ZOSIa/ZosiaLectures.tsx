import Section from "../Common/Section";
import ZosiaPlayer from "./ZosiaPlayer";

function ZosiaLectures() {
  return (
    <div className="z-10 pt-32 pb-36 items-center justify-center">
      <div className="container flex flex-row gap-20 mx-auto max-w-350 items-center">
        <div className="grow-2">
          <ZosiaPlayer />
        </div>
        <div className="grow-1">
          <Section
            header="Wykłady"
            subheader="Zobacz wykłady z ostatniej edycji!"
          />
        </div>
      </div>
    </div>
  );
}

export default ZosiaLectures;

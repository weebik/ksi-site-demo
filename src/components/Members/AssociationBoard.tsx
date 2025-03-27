import Section from "../Common/Section";

function AssociationBoard() {
  return (
    <section
      className="bg-dark-section-primary z-10 pt-40 pb-50 relative items-center justify-center"
      style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="container flex flex-col gap-20 mx-auto max-w-350 items-center">
        <Section header="Zarząd koła" />

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
          <div className="flex flex-row items-center text-right gap-10 mt-[3vw]">
            <div className="flex flex-col">
              <h3 className="font-bold mb-2 text-3xl">Przewodniczący</h3>
              <hr className="border-action-blue border-t-3 mb-6" />
              <p className="text-dark-text-secondary mb-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div>
              <img
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt=""
                className="rounded-lg max-w-70 aspect-square object-cover"
              />
            </div>
          </div>

          <div className="flex flex-row items-center gap-10">
            <div>
              <img
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt=""
                className="rounded-lg max-w-70 aspect-square object-cover"
              />
            </div>

            <div className="flex flex-col text-left">
              <h3 className="font-bold mb-2 text-3xl">Wicerzewodniczący</h3>
              <hr className="border-action-blue border-t-2 mb-6" />
              <p className="text-dark-text-secondary mb-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-10">
            <div className="flex flex-col text-right">
              <h3 className="font-bold mb-2 text-3xl">Sekretarz</h3>
              <hr className="border-action-blue border-t-2 mb-6" />
              <p className="text-dark-text-secondary mb-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div>
              <img
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt=""
                className="rounded-lg max-w-70 aspect-square object-cover"
              />
            </div>
          </div>

          {/* Sekretarz */}
          <div className="flex flex-row items-center gap-10 mt-[-3vw]">
            <div>
              <img
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt=""
                className="rounded-lg max-w-70 aspect-square object-cover"
              />
            </div>

            <div className="flex flex-col text-left">
              <h3 className="font-bold mb-2 text-3xl">Sekretarz</h3>
              <hr className="border-action-blue border-t-2 mb-6" />
              <p className="text-dark-text-secondary mb-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssociationBoard;

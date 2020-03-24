import { getVisitModel } from "../domain/visit";

const VisitPage = ({ visitFeatures }) => {
  return (
    <div className="flex flex-column">
      {visitFeatures.map(
        ({ title, icon, featureImage, description, featureImageAlt }, index) => {
          return (
            <div className="flex flex-column flex-row-ns items-center white">
              <img
                alt={featureImageAlt}
                className={`w-50-ns ${index % 2 !== 0 ? "order-1-ns" : ""}`}
                src={featureImage}
              />

              <div className="flex flex-column pa4 tc w-100 w-50-ns items-center justify-center">
                <img
                  alt={`${title}-icon`}
                  className="bg-white pa3 br4"
                  src={icon}
                  height={96}
                  width={96}
                />
                <h3 className="f3 f2-ns pa2">{title}</h3>
                <p className="f5 f3-ns ma0">{description}</p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

VisitPage.getInitialProps = () => {
    return getVisitModel();
}

export default VisitPage;

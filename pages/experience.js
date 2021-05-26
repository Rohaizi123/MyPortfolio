import Layout from "../src/components/layout/main";

function Experience() {
  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  FRONT END WEB DEVELOPER
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  2 Dec 2019 - Until Now
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-normal text-gray-900 title-font mb-2">
                  Technerve Technology Solutions Sdn Bhd
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  WEB DEVELOPER INTERNSHIP
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  12 Jun 2019 - 30 Dec 2019
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-normal text-gray-900 title-font mb-2">
                  Aeronerve Sdn Bhd
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Experience;

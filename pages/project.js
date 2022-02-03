import Layout from "../src/components/layout/main";

function Project() {
  return (
    <Layout>
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-20 mx-auto">
          <header className="text-3xl font-semibold font-weight-600 mb-2">
            Projects
          </header>
          <p>
            This is the list of projects that I learn and develop during my work
            and my leisure time.
          </p>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="md:w-2/5 w-full overflow-hidden rounded-lg border-2 my-2">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="/ikhlas.gif"
            />
          </div>
          <div className="md:w-3/5 md:pl-6 my-2">
            <h1 className="text-2xl underline font-semibold font-weight-600">
              Ikhlas.fund Crowdfunding
            </h1>
            <p className="leading-relaxed text-base">
              Taxidermy bushwick celiac master cleanse microdosing seitan.
              Fashion axe four dollar toast truffaut, direct trade kombucha
              brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
              drinking vinegar tacos.
            </p>
            <div className="grid grid-flow-col auto-cols-max mt-1">
              <div className="text-sm px-3 py-0 bg-red-200 text-black rounded-full">
                Laravel
              </div>
              <div className="text-sm px-3 py-0 bg-yellow-200 text-black rounded-full ml-2">
                Vue JS
              </div>
              <div className="text-sm px-3 py-0 bg-blue-200 text-black rounded-full ml-2">
                MySQL
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap mt-2">
          <div className="md:w-2/5 w-full overflow-hidden rounded-lg border-2 my-2">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="/terrabina.gif"
            />
          </div>
          <div className="md:w-3/5 md:pl-6 my-2">
            <h1 className="text-2xl underline font-semibold font-weight-600">
              TerraBina - Digital Construction Progress Monitoring Report
            </h1>
            <p className="leading-relaxed text-base">
              Taxidermy bushwick celiac master cleanse microdosing seitan.
              Fashion axe four dollar toast truffaut, direct trade kombucha
              brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
              drinking vinegar tacos.
            </p>
            <div className="grid grid-flow-col auto-cols-max mt-1">
              <div className="text-sm px-3 py-0 bg-red-200 text-black rounded-full">
                Laravel
              </div>
              <div className="text-sm px-3 py-0 bg-blue-200 text-black rounded-full ml-2">
                MySQL
              </div>
              <div className="text-sm px-3 py-0 bg-yellow-200 text-black rounded-full ml-2">
                Mapbox
              </div>
              <div className="text-sm px-3 py-0 bg-blue-200 text-black rounded-full ml-2">
                Three JS
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap mt-2">
          <div className="md:w-2/5 w-full overflow-hidden rounded-lg border-2 my-2">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="/mpc.gif"
            />
          </div>
          <div className="md:w-3/5 md:pl-6 my-2">
            <h1 className="text-2xl underline font-semibold font-weight-600">
              MPC - Evaluation System
            </h1>
            <p className="leading-relaxed text-base">
              Taxidermy bushwick celiac master cleanse microdosing seitan.
              Fashion axe four dollar toast truffaut, direct trade kombucha
              brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
              drinking vinegar tacos.
            </p>
            <div className="grid grid-flow-col auto-cols-max mt-1">
              <div className="text-sm px-3 py-0 bg-red-200 text-black rounded-full">
                Laravel
              </div>
              <div className="text-sm px-3 py-0 bg-blue-200 text-black rounded-full ml-2">
                MySQL
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Project;

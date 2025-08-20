export default function Testimonials() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-textMain">
          PEOPLE'S THOUGHTS
        </h2>
        <p className="mt-4 tracking-[4px] text-lg sm:text-xl text-subText">
          What People Say About Us
        </p>
      </div>

      <section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* First Testimonial */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-accent mb-6">Customer</h3>
            <figure className="flex flex-col flex-grow justify-between">
              <blockquote className="text-textMain text-lg leading-relaxed">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at. Vulputate gravida
                  sociis enim nullam ultricies habitant malesuada lorem ac.
                  Tincidunt urna dui pellentesque sagittis.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                <div className="text-textMain">
                  <div className="font-semibold">Jamini Yadav</div>
                  <div className="text-sm text-subText">20 days ago</div>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Second Testimonial */}
          <div className="flex flex-col border-t border-white/10 pt-10 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-10">
            <h3 className="text-2xl font-bold text-accent mb-6">Customer</h3>
            <figure className="flex flex-col flex-grow justify-between">
              <blockquote className="text-textMain text-lg leading-relaxed">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                  proident duis dolore nulla veniam reprehenderit nisi officia
                  voluptate incididunt exercitation exercitation elit. Nostrud
                  veniam sint dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                <div className="text-textMain">
                  <div className="font-semibold">Abhishek Chaturvedhi</div>
                  <div className="text-sm text-subText">11 days ago</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

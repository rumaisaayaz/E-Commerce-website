import Image from "next/image";

export default function NewsletterInstagram() {
    return (
      <section className="w-full bg-[#F7F7F7] py-20">
        <div className="container mx-auto px-4">
          {/* Newsletter Section */}
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-[28px] font-normal mb-10">
              Or Subscribe To The Newsletter
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
              <div className="w-full relative">
                <input
                  type="email"
                  placeholder="Email Address..."
                  className="w-full py-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-500"
                />
              </div>
              <button className="text-sm font-medium py-2 px-6 hover:text-gray-600 transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
  
          {/* Instagram Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[28px] font-normal text-center mb-10">
              Follow Products And Discounts On Instagram
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {/* Wooden Bar Stools */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/image-2.png"
                  alt="Wooden bar stools"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Beige Swivel Chair */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/image-1.png"
                  alt="Beige swivel chair"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Pink Accent Chair */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/product-2.png"
                  alt="Pink accent chair"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* White Classic Chair */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/product-1.png"
                  alt="White classic chair"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Orange Modern Chair */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/product-3.png"
                  alt="Orange modern chair"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Green Office Chair */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/image-3.png"
                  alt="Green office chair"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  
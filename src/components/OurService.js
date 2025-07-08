// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const services = [
//   {
//     title: "Website Development",
//     price: "RM199 - RM2,499",
//     desc: "Custom websites from lite to corporate with domain, hosting, and responsive design.",
//     image: "/placeholder1.png",
//     plans: [
//       {
//         title: "Website Lite",
//         price: "RM199 / RM299 / RM399",
//         desc: "Suitable for personal, portfolio, or small service pages. 1 page, mobile responsive, basic design.",
//         image: "/plan-lite.png",
//       },
//       {
//         title: "Standard Website",
//         price: "RM499",
//         desc: "Includes up to 3 pages with responsive layout, contact form, and basic animations.",
//         image: "/plan-standard.png",
//       },
//       {
//         title: "Business Website",
//         price: "RM1,399",
//         desc: "Professional design for SMEs, includes 5 pages, custom graphics, and CMS integration.",
//         image: "/plan-business.png",
//       },
//       {
//         title: "Corporate Website",
//         price: "RM2,499",
//         desc: "Full-scale corporate system with up to 10 pages, branding support, email setup, and analytics.",
//         image: "/plan-corporate.png",
//       }
//     ]
//   },
//   // Additional services like Mobile App, Video + Drone, and Digital Marketing can follow same format
// ];

// export default function OurServicesPage() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black px-6 py-20 text-white font-sans relative">
//       <h1 className="text-center text-4xl font-bold text-purple-400 mb-12">Our Services</h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 relative">
//         {services.map((srv, idx) => (
//           <motion.div
//             key={idx}
//             onClick={() => setSelected(srv)}
//             whileHover={{ scale: 1.05 }}
//             className="cursor-pointer backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition"
//           >
//             <h2 className="text-lg font-semibold text-purple-300 mb-1">{srv.title}</h2>
//             <p className="text-sm text-gray-400">{srv.price}</p>
//             <p className="text-sm mt-2 text-gray-300 line-clamp-3">{srv.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 overflow-y-auto"
//             onClick={() => setSelected(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-black/50 backdrop-blur-lg border border-white/10 p-6 rounded-xl max-w-2xl w-full text-white shadow-xl"
//             >
//               <div className="mb-4">
//                 <Image
//                   src={selected.image}
//                   alt={selected.title}
//                   width={600}
//                   height={300}
//                   className="rounded-lg object-cover w-full h-56"
//                 />
//               </div>
//               <h3 className="text-2xl font-bold text-purple-300 mb-3">{selected.title}</h3>
//               <p className="text-sm text-gray-300 mb-4">{selected.desc}</p>

//               {selected.plans && (
//                 <div className="space-y-6">
//                   {selected.plans.map((plan, i) => (
//                     <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-lg">
//                       <div className="flex items-start gap-4">
//                         <Image
//                           src={plan.image}
//                           alt={plan.title}
//                           width={100}
//                           height={100}
//                           className="rounded-md object-cover"
//                         />
//                         <div>
//                           <h4 className="text-lg font-semibold text-purple-300">{plan.title}</h4>
//                           <p className="text-sm text-gray-400">{plan.price}</p>
//                           <p className="text-sm text-gray-300 mt-1">{plan.desc}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               <button
//                 onClick={() => setSelected(null)}
//                 className="mt-6 text-sm text-purple-400 hover:underline"
//               >
//                 Close ✕
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }
import { Briefcase, Smartphone, Laptop, Bot, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "System Developer – Jabatan Bendahari Negeri Sabah",
    year: "2020 - 2025",
    desc: "Developed internal government systems to improve operational efficiency using modern tech stacks.",
    icon: <Laptop size={20} />,
  },
  {
    title: "Freelance Developer – Riderunne",
    year: "2021 - 2025",
    desc: "Built full-stack CRUD APIs and websites for business clients including booking systems and dashboards.",
    icon: <Briefcase size={20} />,
  },
  {
    title: "Website Projects",
    year: "2020 - 2025",
    desc: "Successfully launched over 10+ professional websites for clients, businesses, and organizations.",
    icon: <Laptop size={20} />,
  },
  {
    title: "Mobile App Projects",
    year: "2022 - 2025",
    desc: "Completed 5 major mobile app projects, using Flutter and React Native for both Android and iOS.",
    icon: <Smartphone size={20} />,
  },
  {
    title: "Bible Tracker & Revival System",
    year: "2024 - 2025",
    desc: "Designed AI-powered Bible reading tracker and revival leaderboard for church community use.",
    icon: <BookOpen size={20} />,
  },
  {
    title: "Donation & NGO Systems",
    year: "2023 - 2025",
    desc: "Developed donation platforms for church NGOs with approval workflows and receipt uploads.",
    icon: <Briefcase size={20} />,
  },
  {
    title: "E-Commerce Web & App",
    year: "2023 - 2024",
    desc: "Created multi-page shop system with cart, payment, and real-time stock tracking.",
    icon: <Laptop size={20} />,
  },
  {
    title: "AI Chatbot – Datuk James Ratib",
    year: "2025",
    desc: "Built a custom chatbot interface with FAQ content for a political figure’s public website.",
    icon: <Bot size={20} />,
  },
  {
    title: "Car Rental Websites",
    year: "2020 - 2025",
    desc: "Produced multiple car rental websites with sleek UI and automated inquiry forms.",
    icon: <Smartphone size={20} />,
  },
];

export default function WorkExperienceSection() {
  return (
    <section className="mt-28 max-w-5xl mx-auto px-4 relative z-10">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-12 tracking-wider">
        Work Experience
      </h2>

      {/* Timeline */}
      <div className="relative border-l-[3px] border-purple-500/40 pl-16 space-y-14">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="relative group"
          >
            {/* Icon - always on top */}
            <div className="absolute -left-6 top-5 z-20 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center shadow-md ring-4 ring-purple-300/30 group-hover:scale-110 transition">
              <div className="scale-90">{exp.icon}</div>
            </div>

            {/* Card */}
           <div className="relative z-10 bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 transition-all duration-300">

              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-400">{exp.year}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

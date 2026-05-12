import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HeroButtons = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: "0.8s" }}
  >
    {/* ── Primary Action ── */}
    <motion.div
      whileHover={{ x: 5 }}
      className="group relative flex items-center gap-4 text-white"
    >
      <Link to="/action-activities" className="flex items-center gap-4">
        <div className="flex flex-col items-start">
          <span className="text-sm font-black uppercase tracking-[0.3em] mb-1">
            Conoce nuestras actividades
          </span>
          <div className="h-px w-full bg-white/20 group-hover:bg-primario transition-all duration-500" />
        </div>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primario group-hover:bg-primario transition-all duration-500">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </Link>
    </motion.div>

    {/* ── Secondary Action ── */}
    <motion.a
      href="https://chat.whatsapp.com/tuEnlaceAqui"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 5 }}
      className="group relative flex items-center gap-4 text-white/90 hover:text-white transition-colors duration-500"
    >
      <div className="flex flex-col items-start">
        <span className="text-sm font-black uppercase tracking-[0.3em] mb-1">
          Únete al Cambio
        </span>
        <div className="h-px w-full bg-white/10 group-hover:bg-white/40 transition-all duration-500" />
      </div>
      <FaWhatsapp className="w-5 h-5 text-green-400/50 group-hover:text-green-400 transition-colors" />
    </motion.a>
  </div>
);

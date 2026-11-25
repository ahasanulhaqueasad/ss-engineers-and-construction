import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import team from "../../data/team.json";

const TeamSection = () => {
  return (
    <section className="bg-surface px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Meet Our Experts
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            The People Behind
            <span className="text-accent"> Our Success</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our team brings together technical expertise, creativity and a
            shared commitment to delivering quality engineering solutions.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 flex items-end justify-center gap-3 bg-gradient-to-t from-brand/90 via-transparent to-transparent pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label="LinkedIn profile"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand transition-colors hover:bg-accent hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="#"
                    aria-label="Facebook profile"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand transition-colors hover:bg-accent hover:text-white"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="mailto:info@example.com"
                    aria-label="Email team member"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand transition-colors hover:bg-accent hover:text-white"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="font-heading text-lg font-extrabold text-brand">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-bold text-accent">
                  {member.position}
                </p>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  {member.specialization}
                </p>

                <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-white transition-all hover:bg-accent"
          >
            Work With Our Team
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

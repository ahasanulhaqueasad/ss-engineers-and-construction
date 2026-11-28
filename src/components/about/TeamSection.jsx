import { motion } from "motion/react";
import { Link } from "react-router-dom";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import team from "../../data/team.json";

const formatLabel = (value) => {
  if (!value || typeof value !== "string") return "";

  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const TeamSection = () => {
  const getSocialLinks = (member) =>
    [
      {
        key: "linkedin",
        url: member.linkedin,
        label: `LinkedIn profile of ${member.name}`,
        icon: FaLinkedinIn,
      },
      {
        key: "facebook",
        url: member.facebook,
        label: `Facebook profile of ${member.name}`,
        icon: FaFacebookF,
      },
      {
        key: "email",
        url: member.email ? `mailto:${member.email}` : null,
        label: `Email ${member.name}`,
        icon: FaEnvelope,
      },
    ].filter((social) => social.url);

  return (
    <section
      aria-labelledby="team-section-heading"
      className="bg-surface px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            The People Behind Our Work
          </span>

          <h2
            id="team-section-heading"
            className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl"
          >
            Meet Our <span className="text-accent">Team</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Get to know the people who contribute their knowledge, dedication,
            and professional skills to our engineering and construction
            projects.
          </p>
        </motion.div>

        {/* Team Cards */}
        {team.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => {
              const socialLinks = getSocialLinks(member);

              return (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Member Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${formatLabel(member.position)}`}
                      width="400"
                      height="450"
                      loading="lazy"
                      decoding="async"
                      className="h-72 w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Social Links */}
                    {socialLinks.length > 0 && (
                      <div className="absolute inset-0 flex items-end justify-center gap-3 bg-gradient-to-t from-brand/90 via-transparent to-transparent pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
                        {socialLinks.map((social) => {
                          const Icon = social.icon;
                          const isExternal =
                            social.key === "linkedin" ||
                            social.key === "facebook";

                          return (
                            <a
                              key={social.key}
                              href={social.url}
                              aria-label={social.label}
                              target={isExternal ? "_blank" : undefined}
                              rel={
                                isExternal ? "noopener noreferrer" : undefined
                              }
                              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand transition-colors hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                            >
                              <Icon aria-hidden="true" />
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Member Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-heading text-lg font-extrabold text-brand">
                      {member.name}
                    </h3>

                    {member.position && (
                      <p className="mt-2 text-sm font-bold text-accent">
                        {formatLabel(member.position)}
                      </p>
                    )}

                    {member.specialization && (
                      <p className="mt-3 text-xs leading-6 text-slate-500">
                        {formatLabel(member.specialization)}
                      </p>
                    )}

                    <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <p className="py-12 text-center text-slate-500">
            Team information will be available soon.
          </p>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-white transition-all hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
          >
            Contact Our Team
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

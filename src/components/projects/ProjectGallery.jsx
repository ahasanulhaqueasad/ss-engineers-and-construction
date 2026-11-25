import { motion } from "motion/react";

const ProjectGallery = ({ project }) => {
  const galleryImages = [
    project.image,
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
  ];

  return (
    <section className="bg-surface px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Visual Showcase
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            Project Gallery
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Explore project visuals and discover the details behind our
            engineering and construction work.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group overflow-hidden rounded-2xl ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`${project.title} gallery ${index + 1}`}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-[300px] sm:h-[420px] lg:h-full" : "h-[250px]"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

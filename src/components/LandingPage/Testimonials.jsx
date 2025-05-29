// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'This platform transformed my learning experience. Highly recommended!',
  },
  {
    id: 2,
    name: 'John Smith',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote: 'Great instructors and flexible schedule. I learned so much.',
  },
  {
    id: 3,
    name: 'Samantha Lee',
    image: 'https://randomuser.me/api/portraits/women/51.jpg',
    quote: 'I love the community and support here. It really helps me stay motivated.',
  },
];

 const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">
        What Our <span className="text-purple-600">Students</span> Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ id, name, image, quote }) => (
          <motion.div
            key={id}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={image}
              alt={name}
              className="h-16 w-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-4">"{quote}"</p>
            <h3 className="text-center font-semibold">{name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;
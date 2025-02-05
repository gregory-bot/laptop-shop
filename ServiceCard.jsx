import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-36 object-cover"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
        <Link
          to={`/service/${service.id}`}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          Check Out More
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPaw, FaPlay, FaWhatsapp } from 'react-icons/fa';
import { whatsappFor } from '../data/site';
import SmartImage from './SmartImage';

export default function Puppy({ p }) {
  const enquiry = whatsappFor(`Hi, I would like to know more about ${p.name} (${p.breed}).`);
  return (
    <motion.article
      className="pup-card"
      whileHover={{ y: -9, rotate: p.id % 2 ? 1 : -1, scale: 1.025 }}
      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
    >
      <Link className="pup-card-link" to={`/puppies/${p.slug}`} aria-label={`View ${p.name} details`}>
        <div className="pup-photo">
          <SmartImage src={p.image} alt={`${p.name} ${p.breed} puppy`} loading="lazy" />
          <span className="availability"><i /> Available</span>
          {p.video && <span className="video-tag"><FaPlay /> Video</span>}
          <span className="paw-stamp"><FaPaw /></span>
        </div>
        <div className="pup-info">
          <span className="hand-label">little love no. {String(p.id).padStart(2, '0')}</span>
          <h3>{p.name}</h3>
          <p>{p.breed}</p>
          <div className="pup-meta"><span>{p.gender}</span><span>{p.age}</span></div>
          <span className="text-link">View puppy details <b>🐾</b></span>
        </div>
      </Link>
      <a className="pup-enquire-link" href={enquiry} target="_blank" rel="noreferrer">
        <FaWhatsapp /> Ask about this pup
      </a>
    </motion.article>
  );
}

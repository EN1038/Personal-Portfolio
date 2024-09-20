// components/Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>© {new Date().getFullYear()} Kamalat Glindoung. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 text-3xl">
          <a href="https://github.com/EN1038" className='hover:text-violet-600' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.facebook.com/KamalatGlindoung/" className='hover:text-violet-600' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

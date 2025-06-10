import React from 'react';
import { motion } from 'framer-motion';
import './HelpPage.css';

const HelpPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const sections = [
    {
      title: '📱 About Our App',
      content:
        'Lost & Found is a community-powered platform to help users report, find, and recover lost or found belongings with ease. Whether you’ve misplaced your phone, found a bag, or seen someone’s ID, this app brings helpful people together.',
    },
    {
      title: '🧭 How This App Works',
      content:
        'Users can report lost or found items. Others can view those listings and reach out if they’ve found or lost the same item. It’s fast, secure, and trusted by thousands.',
    },
    {
      title: '📤 Report a Lost Item',
      content:
        'Click on “Report Lost Item”, add item name, description, image, and contact details. Your post gets published instantly to help others find it.',
    },
    {
      title: '📥 Report a Found Item',
      content:
        'Click on “Report Found Item”, describe the object, upload a picture, and optionally add the location. It will be visible to users searching for their belongings.',
    },
    {
      title: '🔍 Item Matching & Claim Process',
      content:
        'When someone thinks the item is theirs, they must answer verification questions (color, date, unique mark, etc.). Admins may assist in connecting both parties.',
    },
    {
      title: '🛡️ Safety & Privacy',
      content:
        'We never display your personal address or exact location. Phone and WhatsApp links are optional. Users are advised to meet in public and verify claims carefully.',
    },
    {
      title: '🚀 Features You’ll Love',
      content:
        '- Live listings for Lost & Found items\n- Phone & WhatsApp contact options\n- Admin verification for safety\n- Image-based item display\n- Simple UI for mobile users',
    },
    {
      title: '📞 Need Help or Support?',
      content:
        'For more questions or emergencies, contact us at support@lostfoundapp.com or call us directly at +91-9876543210. We’re available 24/7.',
    },
  ];

  return (
    <div className="help-page">
      <h1 className="help-title">Help & Support</h1>
      {sections.map((section, index) => (
        <motion.section
          className="help-section"
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2>{section.title}</h2>
          {section.content.includes('\n') ? (
            <ul>
              {section.content.split('\n').map((item, i) => (
                <li key={i}>{item.replace(/^-\s*/, '')}</li>
              ))}
            </ul>
          ) : (
            <p>{section.content}</p>
          )}
        </motion.section>
      ))}
    </div>
  );
};

export default HelpPage;

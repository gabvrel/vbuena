import React from "react";
import igIcon from '../assets/images/ig_icon.png';
import fbIconOrg from '../assets/images/fb_icon_org.png';
import lnkinIconOrg from '../assets/images/lnkin_icon_org.png';

export default function SocialLinks() {
  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/vidabuenaec/", username: "@vidasanaec", icon: igIcon },
    { name: "Facebook", url: "https://www.facebook.com/VidaBuenaEcuadorUIO/", username: "VidaSana EC", icon: fbIconOrg },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/vidabuena/", username: "Vida Sana", icon: lnkinIconOrg },
  ];

  return (
    <div>
      <p className="text-gray-600">Siguenos en:</p>
      <div className="flex justify-start items-start gap-10 flex-wrap mt-8">
        {socialLinks.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <img src={social.icon} alt={social.name} className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="mt-2 text-gray-700 group-hover:text-cyan-600 text-sm">{social.username}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

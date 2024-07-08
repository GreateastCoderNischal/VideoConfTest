"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
const Footer = () => {
  const { data: session } = useSession();

  

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us{session && `  -  ${session.user.name}`}</h3>
            <p className="mb-4">
              We are a company dedicated to providing high-quality products and services to our customers.
            </p>
            <Link href="/about">About</Link>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="mb-4">
              123 Main Street, Anytown USA
              <br />
              Phone: (555) 123-4567
              <br />
              Email: info@example.com
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
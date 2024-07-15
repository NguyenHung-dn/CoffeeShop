// components/Navbar.js
import { useRouter } from "next/router";
import Link from "next/link";

const nav = [
  { name: "HOME", link: "/" },
  { name: "OUR PRODUCTS", link: "/products" },
  { name: "BLOG", link: "/blog" },
  { name: "ABOUT", link: "/about" },
  { name: "CONTACT", link: "/contact" },
  { name: "STYLEGUIDE", link: "/styleguide" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex space-x-4">
      {nav.map((item) => {
        const isActive = router.pathname === item.link;
        return (
          <Link
            key={item.link}
            href={item.link}
            className={`nav-item ${isActive ? "active" : ""}`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;

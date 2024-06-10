const Navbar = () => {
  return (
    <nav className="hidden h-[10vh] w-screen bg-black  items-center justify-center text-zinc-50 z-10 font-sans md:flex">
      <div>
        <ul className="flex gap-20 justify-center items-center">
          <li>Home</li>
          <li>Our Story</li>
          <li>Price List</li>
          <li>Feedbacks</li>
          <li>Our Locations</li>
          <li id="contact">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

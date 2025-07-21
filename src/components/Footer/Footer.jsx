const Footer = () => {
    return (
        <div>
            <div className="mt-40">
                <div className="relative">
                    {/* upper footer  */}
                    <div className="absolute bottom-60 left-64">
                        <div class="card card-side bg-base-100 shadow-sm">
                            <div class="p-32 card-body flex justify-center items-center gap-7">
                                <h2 class="card-title text-black text-5xl font-bold">Subscribe to our newsletter</h2>
                                <p className="text-xl text-gray-500">Get the latest updates and news right in your inbox!</p>
                                <fieldset class="mt-1">
                                    <div class="join">
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            class="input input-bordered join-item placeholder-gray-500" />
                                        <button class="px-6 py-2 rounded-full text-black font-semibold bg-gradient-to-r from-pink-400 via-purple-300 to-yellow-300 shadow-md">
                                            Subscribe
                                        </button>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    {/* lower footer  */}
                    <footer class="bg-[#111838] footer sm:footer-horizontal text-neutral-content pt-60 flex justify-between items-center px-40 pb-20">
                        <nav>
                            <h6 class=" text-xl font-bold text-white"> About Us</h6>
                            <p className="text-gray-400 ">We are a passionate team <br />dedicated to providing the best <br />services to our customers</p>
                        </nav>
                        <nav>
                            <h6 class=" text-xl font-bold text-white"> About Us</h6>
                            <ul className="text-gray-400 ">
                                <li>Home</li>
                                <li>Services</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                        <nav>
                            <h6 class=" text-xl font-bold text-white">Subscribe</h6>
                            <p className="text-gray-400">Subscribe to our newsletter for the <br />latest updates</p>
                            <fieldset class="w-80 mt-1">
                                <div class="join">
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        class="input input-bordered join-item placeholder-gray-500" />
                                    <button class="px-6 py-2 rounded-full text-black font-semibold bg-gradient-to-r from-pink-400 via-purple-300 to-yellow-300 shadow-md">
                                        Subscribe
                                    </button>
                                </div>
                            </fieldset>
                        </nav>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;
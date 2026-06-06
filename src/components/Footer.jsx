import Logo from "../assets/logo-footer.png";

function Footer() {
    return (
        <footer className="bg-pale-sky/50 border-t border-charcoal/10">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
                <img src={Logo} alt="Dentist Website Logo" className="h-12 w-auto object-contain scale-110" />

                <p className="text-center mt-2 !text-[18px] lg:!text-[20px] text-charcoal/80"> © 2026 Navy Dental • Designed by Yassmine Senouci</p>
            </div>
        </footer>
    );
}

export default Footer;
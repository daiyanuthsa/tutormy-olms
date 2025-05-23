import { Link } from "@inertiajs/react";
import Logo from "../../../public/assets/Logo.webp";

export default function ApplicationLogo(props) {
    return (
        <Link href="/">
            <img src={Logo} alt="logo" className="w-36 -mt-2"/>
        </Link>
    );
}

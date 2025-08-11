import { Link } from "@inertiajs/react";
import Logo from "../../../public/assets/main-logo.png";

export default function ApplicationLogo(props) {
    return (
        <Link href="/">
            <img src={Logo} alt="logo" className=" mt-1 w-36 -mt-2"/>
        </Link>
    );
}


import Link from "next/link";
import { navigationLinks } from "../../utils/data";

export const NavBar = () => {
	return(

		<ul>
            {navigationLinks.map((link, index)=>(
                <li key={index}>
                    <Link href={link.path}>{link.label}</Link>
                </li>
            ))}
		</ul>
	);

    }
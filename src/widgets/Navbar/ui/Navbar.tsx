import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

type Props = {
    className?: string;
}

export const Navbar = ({className}: Props) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={"/"} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY} >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
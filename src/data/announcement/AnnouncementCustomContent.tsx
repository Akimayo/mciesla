import { faSignalMessenger, faMastodon, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";

const AnnouncementCustomContent: React.FC = () => {
    const { t, i18n } = useTranslation();
    return <section>
        <ul>
            <li>
                <strong>
                    <FontAwesomeIcon icon={faGlobe} /> Web
                </strong><br />
                {t("announcement.web.0")}<a href="https://mciesla.cz/">mciesla.cz</a>{t("announcement.web.1")}
            </li>
            <li>
                <strong>
                    <FontAwesomeIcon icon={faEnvelope} /> E-mail
                </strong><br />
                {t("announcement.email.0")}<a href={"mailto:" + (i18n.language == "cs" ? "ahoj" : "hello") + "@mciesla.cz"} children={(i18n.language == "cs" ? "ahoj" : "hello") + "@mciesla.cz"} />{t("announcement.email.1")}
            </li>
            <li>
                <strong>
                    <FontAwesomeIcon icon={faSignalMessenger} /> Signal
                </strong><br />
                {t("announcement.signal.0")}
            </li>
            <li>
                <strong>
                    <FontAwesomeIcon icon={faDiscord} /> Discord
                </strong><br />
                {t("announcement.discord.0")}
            </li>
            <li>
                <strong>
                    <FontAwesomeIcon icon={faMastodon} /> Mastodon
                </strong><br />
                {t("announcement.mastodon.0")}<a href="https://mstdn.social/@mciesla">@mciesla@mstdn.social</a>{t("announcement.mastodon.1")}
                <br /><small children={t("announcement.mastodon.2")} />
            </li>
        </ul>
        <p children={t("announcement.others")} />
    </section>
};
export default AnnouncementCustomContent;
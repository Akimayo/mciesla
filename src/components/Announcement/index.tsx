import "./announcement.scss";
import React, { useMemo } from "react";
import { MDXRenderer, MDXRendererProps } from "gatsby-plugin-mdx";
import AnnouncementCustomContent from "../../data/announcement/AnnouncementCustomContent";

interface AnnouncementProps extends MDXRendererProps {
    until: string | number | Date;
}

const Announcement: React.FC<AnnouncementProps> = ({ until, ...props }) => {
    const active = useMemo<boolean>(() => {
        if (until instanceof Date) return (new Date()) <= until;
        else return (new Date()) <= (new Date(until));
    }, [until])
    return active ? <article className="mc-migration">
        <div className="mc-migration--content">
            <MDXRenderer {...props} />
            <AnnouncementCustomContent />
        </div>
    </article> : null
};
export default Announcement;
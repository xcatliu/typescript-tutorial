// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';

interface SidebarProps {
  sidebar: SidebarConfig;
  outputPath: string;
}

type SidebarConfig = {
  title: string;
  link: string;
  children?: SidebarConfig;
}[];

const Sidebar = ({ sidebar, outputPath }: SidebarProps) => (
  <aside>
    <ul>
      {sidebar.map(({ title, link, children }) => (
        <li>
          <a href={link} className={link === `/${outputPath}` ? 'active' : ''}>
            {title}
          </a>
          {children && (
            <ul>
              {children.map(({ title, link }) => (
                <li>
                  <a href={link} className={link === `/${outputPath}` ? 'active' : ''}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;

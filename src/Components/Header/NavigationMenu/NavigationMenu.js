import React, {useState, useEffect} from 'react';
import styles from './NavigationMenu.module.css'
import {NavLink} from "react-router-dom";
import {routes} from "../../../Routes/Routes";
import {useOnClickOutside} from "../../../Hooks/UseOnClickOutside";
import {words} from "../../../Words/Words";

function NavigationMenu() {

    const style = {top: '0'};
    const [visible, toggleVisibility] = useState(true);
    const [pageOffset, setPageOffset] = useState(0);
    const handleScroll = () => {
        setPageOffset(window.pageYOffset);
        if (window.pageYOffset > pageOffset) {
            toggleVisibility(false);
        } else {
            toggleVisibility(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <nav className={styles.navigationMenu} style={visible ? style : null}>
            <ul className={styles.menu}>
                <li>
                    <NavLink exact activeClassName={styles.active} to={routes.home.path}>
                        {words.home}
                    </NavLink>
                </li>
                <li>
                    <NounsLink/>
                </li>
                <li>
                    <VerbsLink/>
                </li><li>
                    <AdjectivesLink/>
                </li>
            </ul>
        </nav>
    )
}

function NounsLink() {

    const [ref] = useOnClickOutside(() => toggleExpanded(false));
    const [expanded, toggleExpanded] = useState(false);
    const handleClick = () => toggleExpanded(!expanded);

    return (
        <div ref={ref}>
            <div className={styles.link} onClick={handleClick}>
                {words.nouns}
            </div>

            {
                expanded && (
                    <ul className={styles.subMenu}>
                        <li>
                            <NavLink activeClassName={styles.active}
                                     to={routes.nouns.routes.learn.path}
                                     onClick={handleClick}>
                                {words.learn}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={styles.active}
                                     to={routes.nouns.routes.repeat.path}
                                     onClick={handleClick}>
                                {words.repeat}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={styles.active}
                                     to={routes.nouns.routes.all.path}
                                     onClick={handleClick}>
                                {words.all}
                            </NavLink>
                        </li>
                    </ul>
                )
            }

        </div>
    )
}

function VerbsLink() {

    const [ref] = useOnClickOutside(() => toggleExpanded(false));
    const [expanded, toggleExpanded] = useState(false);
    const handleClick = () => toggleExpanded(!expanded);

    return (
        <div ref={ref}>
            <div className={styles.link} onClick={handleClick}>
                {words.verbs}
            </div>

            {
                expanded && (
                    <ul className={styles.subMenu}>
                        <li>
                            <NavLink activeClassName={styles.active}
                                     to={routes.verbs.routes.learn.path}
                                     onClick={handleClick}>
                                {words.learn}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={styles.active}
                                     to={routes.verbs.routes.repeat.path}
                                     onClick={handleClick}>
                                {words.repeat}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={styles.active}
                                     to={routes.verbs.routes.all.path}
                                     onClick={handleClick}>
                                {words.all}
                            </NavLink>
                        </li>
                    </ul>
                )
            }

        </div>
    )
}

function AdjectivesLink() {

    const [ref] = useOnClickOutside(() => toggleExpanded(false));
    const [expanded, toggleExpanded] = useState(false);
    const handleClick = () => toggleExpanded(!expanded);

    return (
      <div ref={ref}>
          <div className={styles.link} onClick={handleClick}>
              {words.adjectives}
          </div>

          {
              expanded && (
                <ul className={styles.subMenu}>
                    <li>
                        <NavLink activeClassName={styles.active}
                                 to={routes.adjectives.routes.learn.path}
                                 onClick={handleClick}>
                            {words.learn}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active}
                                 to={routes.adjectives.routes.repeat.path}
                                 onClick={handleClick}>
                            {words.repeat}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active}
                                 to={routes.adjectives.routes.all.path}
                                 onClick={handleClick}>
                            {words.all}
                        </NavLink>
                    </li>
                </ul>
              )
          }

      </div>
    )
}


export default NavigationMenu;
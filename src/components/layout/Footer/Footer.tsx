import React from "react";
import styles from "./Footer.module.scss";
import Text from "../../atoms/Text";

const socialLinks = [
  {
    text: "Telegram discussions",
    href: "https://t.me/Dex223_Defi"
  },
  {
    text: "Telegram announcements channel",
    href: "https://t.me/Dex_223"
  },
  {
    text: "Dex223 twitter",
    href: "https://twitter.com/Dex_223"
  },
  {
    text: "Discord",
    href: "https://discord.gg/t5bdeGC5Jk"
  },
  {
    text: "Dexaran's twitter",
    href: "https://twitter.com/Dexaran"
  }
];

const usefulLinks = [
  {
    text: "ERC20 & ERC223 Token Converter",
    href: "https://dexaran.github.io/token-converter/"
  },
  {
    text: "ERC223 Front Page",
    href: "https://dexaran.github.io/erc223"
  },
  {
    text: "Page source codes",
    href: "https://github.com/Dexaran/Dex223-ICO-page/tree/main"
  }
];

const partners = [
  {
    text: "EOS Support",
    href: "https://eossupport.io/"
  }
];

export default function Footer() {
  return <footer className={styles.footer}>
    <div className="container">
      <div className={styles.footerLinks}>
        <div className={styles.leftLinks}>
          <div className={styles.linkColumn}>
            <div className={styles.footerLinkGroupTitle}>Social media</div>
            {socialLinks.map((link) => {
              return <div key={link.text}><a target="_blank" href={link.href}
                                             className={styles.footerLink}>{link.text}</a></div>
            })}
          </div>
          <div className={styles.linkColumn}>
            <div className={styles.footerLinkGroupTitle}>Useful links</div>
            {usefulLinks.map((link) => {
              return <div key={link.text}><a target="_blank" href={link.href}
                                             className={styles.footerLink}>{link.text}</a></div>
            })}
          </div>
          <div className={styles.linkColumn}>
            <div className={styles.footerLinkGroupTitle}>Partners</div>
            {partners.map((link) => {
              return <div key={link.text}><a target="_blank" href={link.href}
                                             className={styles.footerLink}>{link.text}</a></div>
            })}
          </div>
        </div>
        <div className={styles.rightLinks}>
          {/*<div className={styles.dedicatedMediaInfo}>*/}
          {/*  <span className={styles.dedicatedIcon}>*/}
          {/*    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">*/}
          {/*      <path*/}
          {/*        d="M11.5381 20.6191C10.3135 20.6191 9.15918 20.3848 8.0752 19.916C6.99707 19.4473 6.04492 18.7998 5.21875 17.9736C4.39258 17.1475 3.74512 16.1953 3.27637 15.1172C2.80762 14.0332 2.57324 12.8789 2.57324 11.6543C2.57324 10.4297 2.80762 9.27832 3.27637 8.2002C3.74512 7.11621 4.38965 6.16113 5.20996 5.33496C6.03613 4.50879 6.98828 3.86133 8.06641 3.39258C9.15039 2.92383 10.3047 2.68945 11.5293 2.68945C12.7539 2.68945 13.9082 2.92383 14.9922 3.39258C16.0762 3.86133 17.0312 4.50879 17.8574 5.33496C18.6836 6.16113 19.3311 7.11621 19.7998 8.2002C20.2686 9.27832 20.5029 10.4297 20.5029 11.6543C20.5029 12.8789 20.2686 14.0332 19.7998 15.1172C19.3311 16.1953 18.6836 17.1475 17.8574 17.9736C17.0312 18.7998 16.0762 19.4473 14.9922 19.916C13.9141 20.3848 12.7627 20.6191 11.5381 20.6191ZM11.5381 19.125C12.5752 19.125 13.5449 18.9316 14.4473 18.5449C15.3496 18.1582 16.1436 17.625 16.8291 16.9453C17.5146 16.2598 18.0479 15.4658 18.4287 14.5635C18.8154 13.6611 19.0088 12.6914 19.0088 11.6543C19.0088 10.6172 18.8154 9.64746 18.4287 8.74512C18.042 7.84277 17.5059 7.04883 16.8203 6.36328C16.1406 5.67773 15.3467 5.14453 14.4385 4.76367C13.5361 4.37695 12.5664 4.18359 11.5293 4.18359C10.4922 4.18359 9.52246 4.37695 8.62012 4.76367C7.71777 5.14453 6.92676 5.67773 6.24707 6.36328C5.56738 7.04883 5.03418 7.84277 4.64746 8.74512C4.2666 9.64746 4.07617 10.6172 4.07617 11.6543C4.07617 12.6914 4.2666 13.6611 4.64746 14.5635C5.03418 15.4658 5.56738 16.2598 6.24707 16.9453C6.93262 17.625 7.72656 18.1582 8.62891 18.5449C9.53125 18.9316 10.501 19.125 11.5381 19.125ZM10 16.5674C9.81836 16.5674 9.66602 16.5088 9.54297 16.3916C9.41992 16.2744 9.3584 16.1279 9.3584 15.9521C9.3584 15.7764 9.41992 15.6299 9.54297 15.5127C9.66602 15.3955 9.81836 15.3369 10 15.3369H11.0898V11.3027H10.1494C9.96777 11.3027 9.81543 11.2441 9.69238 11.127C9.56934 11.0098 9.50781 10.8633 9.50781 10.6875C9.50781 10.5117 9.56934 10.3652 9.69238 10.248C9.81543 10.1309 9.96777 10.0723 10.1494 10.0723H11.8018C12.0244 10.0723 12.1943 10.1455 12.3115 10.292C12.4287 10.4326 12.4873 10.623 12.4873 10.8633V15.3369H13.5771C13.7588 15.3369 13.9111 15.3955 14.0342 15.5127C14.1572 15.6299 14.2188 15.7764 14.2188 15.9521C14.2188 16.1279 14.1572 16.2744 14.0342 16.3916C13.9111 16.5088 13.7588 16.5674 13.5771 16.5674H10ZM11.459 8.60449C11.1426 8.60449 10.873 8.49316 10.6504 8.27051C10.4277 8.04785 10.3164 7.77832 10.3164 7.46191C10.3164 7.13965 10.4277 6.86719 10.6504 6.64453C10.873 6.42188 11.1426 6.31055 11.459 6.31055C11.7812 6.31055 12.0508 6.42188 12.2676 6.64453C12.4902 6.86719 12.6016 7.13965 12.6016 7.46191C12.6016 7.77832 12.4902 8.04785 12.2676 8.27051C12.0508 8.49316 11.7812 8.60449 11.459 8.60449Z"*/}
          {/*        fill="#3BD171"/>*/}
          {/*    </svg>*/}
          {/*  </span>*/}
          {/*  <span>Dedicated social media for DEX223 will be announced soon</span>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
    <div className={styles.bottomFooter}>
      <div className="container">
        <div className={styles.bottomFooterContent}>
          <div style={{ maxWidth: 872 }}><Text variant={16} color="secondary">Disclaimer: Cryptocurrency may be
            unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be
            subject to capital gains or other taxes applicable in your jurisdiction.</Text></div>
          <span className={styles.cpr}>Copyright © {new Date(Date.now()).getFullYear()} DEX223 <br/> All Rights Reserved</span>
        </div>
      </div>
    </div>
  </footer>;
}

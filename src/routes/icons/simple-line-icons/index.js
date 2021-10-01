/**
 * Simple Line Icons
 */
import React from 'react';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import 'font-awesome/css/font-awesome.min.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const icons = [
  "fa fa-address-book",  
  "fa fa-adjust", 
  "fa fa-arrows", 
  "fa fa-bars", 
  "fa fa-bell", 
  "fa fa-bullseye",
  "fa fa-calendar",  
  "fa fa-adjust", 
  "fa fa-camera", 
  "fa fa-adjust", 
  "fa fa-check", 
  "fa fa-envelope", 
  "fa fa-crop", 
  "fa fa-eye",
  "fa fa-filter",  
  "fa fa-glass", 
  "fa fa-headphones", 
  "fa fa-inbox", 
  "fa fa-adjust",
"fa fa-anchor",
"fa fa-archive",
"fa fa-area-chart",
"fa fa-arrows",
"fa fa-arrows-h",
"fa fa-arrows-v",
"fa fa-asterisk",
"fa fa-at",
"fa fa-automobile",

"fa fa-balance-scale",
"fa fa-ban",
"fa fa-bank",

"fa fa-bar-chart",
"fa fa-bar-chart-o",

"fa fa-barcode",
"fa fa-bars",
"fa fa-battery-0",

"fa fa-battery-1",

"fa fa-battery-2",

"fa fa-battery-3",

"fa fa-battery-4",

"fa fa-battery-empty",
"fa fa-battery-full",
"fa fa-battery-half",
"fa fa-battery-quarter",
"fa fa-battery-three-quarters",
"fa fa-bed",
"fa fa-beer",
"fa fa-bell",
"fa fa-bell-o",
"fa fa-bell-slash",
"fa fa-bell-slash-o",
"fa fa-bicycle",
"fa fa-binoculars",
"fa fa-birthday-cake",
"fa fa-bolt",
"fa fa-bomb",
"fa fa-book",
"fa fa-bookmark",
"fa fa-bookmark-o",
"fa fa-briefcase",
"fa fa-bug",
"fa fa-building",
"fa fa-building-o",
"fa fa-bullhorn",
"fa fa-bullseye",
"fa fa-bus",
"fa fa-cab",

"fa fa-calculator",
"fa fa-calendar",
"fa fa-calendar-check-o",
"fa fa-calendar-minus-o",
"fa fa-calendar-o",
"fa fa-calendar-plus-o",
"fa fa-calendar-times-o",
"fa fa-camera",
"fa fa-camera-retro",
"fa fa-car",
"fa fa-caret-square-o-down",
"fa fa-caret-square-o-left",
"fa fa-caret-square-o-right",
"fa fa-caret-square-o-up",
"fa fa-cart-arrow-down",
"fa fa-cart-plus",
"fa fa-cc",
"fa fa-certificate",
"fa fa-check",
"fa fa-check-circle",
"fa fa-check-circle-o",
"fa fa-check-square",
"fa fa-check-square-o",
"fa fa-child",
"fa fa-circle",
"fa fa-circle-o",
"fa fa-circle-o-notch",
"fa fa-circle-thin",
"fa fa-clock-o",
"fa fa-clone",
"fa fa-close",

"fa fa-cloud",
"fa fa-cloud-download",
"fa fa-cloud-upload",
"fa fa-code",
"fa fa-code-fork",
"fa fa-coffee",
"fa fa-cog",
"fa fa-cogs",
"fa fa-comment",
"fa fa-comment-o",
"fa fa-commenting",
"fa fa-commenting-o",
"fa fa-comments",
"fa fa-comments-o",
"fa fa-compass",
"fa fa-copyright",
"fa fa-creative-commons",
"fa fa-credit-card",
"fa fa-crop",
"fa fa-crosshairs",
"fa fa-cube",
"fa fa-cubes",
"fa fa-cutlery",
"fa fa-dashboard",

"fa fa-database",
"fa fa-desktop",
"fa fa-diamond",
"fa fa-dot-circle-o",
"fa fa-download",
"fa fa-edit",

"fa fa-ellipsis-h",
"fa fa-ellipsis-v",
"fa fa-envelope",
"fa fa-envelope-o",
"fa fa-envelope-square",
"fa fa-eraser",
"fa fa-exchange",
"fa fa-exclamation",
"fa fa-exclamation-circle",
"fa fa-exclamation-triangle",
"fa fa-external-link",
"fa fa-external-link-square",
"fa fa-eye",
"fa fa-eye-slash",
"fa fa-eyedropper",
"fa fa-fax",
"fa fa-feed",

"fa fa-female",
"fa fa-fighter-jet",
"fa fa-file-archive-o",
"fa fa-file-audio-o",
"fa fa-file-code-o",
"fa fa-file-excel-o",
"fa fa-file-image-o",
"fa fa-file-movie-o",

"fa fa-file-pdf-o",
"fa fa-file-photo-o",

"fa fa-file-picture-o",

"fa fa-file-powerpoint-o",
"fa fa-file-sound-o",

"fa fa-file-video-o",
"fa fa-file-word-o",
"fa fa-file-zip-o",
"fa (alias)",
"fa fa-film",
"fa fa-filter",
"fa fa-fire",
"fa fa-fire-extinguisher",
"fa fa-flag",
"fa fa-flag-checkered",
"fa fa-flag-o",
"fa fa-flash",
"fa (alias)",
"fa fa-flask",
"fa fa-folder",
"fa fa-folder-o",
"fa fa-folder-open",
"fa fa-folder-open-o",
"fa fa-frown-o",
"fa fa-futbol-o",
"fa fa-gamepad",
"fa fa-gavel",
"fa fa-gear",
"fa (alias)",
"fa fa-gears",
"fa (alias)",
"fa fa-gift",
"fa fa-glass",
"fa fa-globe",
"fa fa-graduation-cap",
"fa fa-group",
"fa (alias)",
"fa fa-hand-grab-o",
"fa (alias)",
"fa fa-hand-lizard-o",
"fa fa-hand-paper-o",
"fa fa-hand-peace-o",
"fa fa-hand-pointer-o",
"fa fa-hand-rock-o",
"fa fa-hand-scissors-o",
"fa fa-hand-spock-o",
"fa fa-hand-stop-o",
"fa (alias)",
"fa fa-hdd-o",
"fa fa-headphones",
"fa fa-heart",
"fa fa-heart-o",
"fa fa-heartbeat",
"fa fa-history",
"fa fa-home",
"fa fa-hotel",
"fa (alias)",
"fa fa-hourglass",
"fa fa-hourglass-1",
"fa (alias)",
"fa fa-hourglass-2",
"fa (alias)",
"fa fa-hourglass-3",
"fa (alias)",
"fa fa-hourglass-end",
"fa fa-hourglass-half",
"fa fa-hourglass-o",
"fa fa-hourglass-start",
"fa fa-i-cursor",
"fa fa-image",

"fa fa-inboxfa-industry",
]

const SimpleLineIcons = ({ match }) => {
  return (
    <div className="icons-wrapper">
      <PageTitleBar title={<IntlMessages id="sidebar.simpleLineIcons" />} match={match} />
        <div className="row">
          {icons.map((icon, key) => (
            <RctCollapsibleCard customClasses="icon-box" colClasses="col-sm-6 col-md-4 col-xl-3" key={key}
              contentCustomClasses="item"
            >
              {/* <span aria-hidden="true" className={icon}></span> &nbsp;{icon} */}
              <i className={icon} aria-hidden="true">&nbsp;{icon}</i>
            </RctCollapsibleCard>
          ))}
        </div>
    </div>
  );
};

export default SimpleLineIcons;

//img src={require('Assets/img/error-page-img.png')} alt="error-img" className="img-fluid" />

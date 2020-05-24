import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faFacebook,
    faStackOverflow,
    faGithub,
    faInstagram,
    faVimeo
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faBars,
    faTwitter,
    faFacebook,
    faStackOverflow,
    faGithub,
    faInstagram,
    faVimeo
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
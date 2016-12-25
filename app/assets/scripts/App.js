import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();

//1er argumento el item a revelar, el 2do el offset
new RevealOnScroll($('.feature-item'), "85%"); //Para features
new RevealOnScroll($('.testimonial'), "60%"); //Para testimonials
var stickyHeader = new StickyHeader();
var modal = new Modal();
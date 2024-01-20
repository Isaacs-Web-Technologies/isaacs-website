"use client";
import { Builder, withChildren } from "@builder.io/react";
import Afrowithphone from "./components/HomeComponents/Afrowithphone/Afrowithphone";
import Awesome from "./components/HomeComponents/Awesome/Awesome";
import ClientCarousel from "./components/HomeComponents/ClientCarousel/ClientCarousel";
import Contact from "./components/HomeComponents/Contact/Contact";
import Counter from "./components/Counter/Counter";
import DigitalMarketing from "./components/HomeComponents/DigitalMarketing/DigitalMarketing";
import Footer from "./components/HomeComponents/Footer/Footer";
import FullServiceDigi from "./components/HomeComponents/FullServiceDigi/FullServiceDigi";
import StandingDigi from "./components/HomeComponents/StandingDigi/StandingDigi";

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(Afrowithphone, {
  name: "Afrowithphone",
});

Builder.registerComponent(Awesome, {
  name: "Awesome",
});

Builder.registerComponent(withChildren(ClientCarousel), {
  name: "ClientCarousel",
});

Builder.registerComponent(withChildren(Contact), {
  name: "Contact",
});

Builder.registerComponent(FullServiceDigi, {
  name: "FullServiceDigi",
});

Builder.registerComponent(DigitalMarketing, {
  name: "DigitalMarketing",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(StandingDigi, {
  name: "StandingDigi",
});

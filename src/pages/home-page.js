import React from "react";
import { Auth0Features } from "../components/auth0-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";
import "./HomePage.css";

export const HomePage = () => (
  <PageLayout>
    <HeroBanner />
    <Auth0Features />
    <div className="hello-world-container">
      <h1 className="hello-world-text">Hello World!</h1>
    </div>
  </PageLayout>
);

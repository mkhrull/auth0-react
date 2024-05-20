import React from "react";
import { Auth0Features } from "../components/auth0-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";

export const HomePage = () => (
  <PageLayout>
    <HeroBanner />
    <Auth0Features />
     <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1 style={{ color: "white" }}>Hello World!</h1>
    </div>
  </PageLayout>
);

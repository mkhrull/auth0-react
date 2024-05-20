import React from "react";
import { Auth0Feature } from "./auth0-feature";

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "Microsoft HoloLens 2",
      description:
        "Microsoft HoloLens 2 is a mixed reality head-mounted display developed and manufactured by Microsoft. It is the successor to the original Microsoft HoloLens. The first variant of the device, The HoloLens 2 enterprise edition, debuted on February 24, 2019. This was followed by a developer edition that was announced on May 2, 2019. The HoloLens 2 was subsequently released in limited numbers on November 7, 2019.",
      resourceUrl: "https://www.microsoft.com/en-us/hololens",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "Insta360 Pro 2",
      description:
        "Insta360 Pro 2 is a unibody 360 VR camera with 6 lenses that shoots 8K video and photos in 3D and monoscopic formats, and supports up to 8K VR live streaming. Pro 2 is also equipped with Insta360's FlowState stabilization.",
      resourceUrl: "https://www.insta360.com/product/insta360-pro2",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
    {
      title: "Attack Protection",
      description:
        "Auth0 can detect attacks and stop malicious attempts to access your application such as blocking traffic from certain IPs and displaying CAPTCHA. Auth0 supports the principle of layered protection in security that uses a variety of signals to detect and mitigate attacks.",
      resourceUrl: "https://auth0.com/docs/attack-protection",
      icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
    },
    {
      title: "Serverless Extensibility",
      description:
        "Actions are functions that allow you to customize the behavior of Auth0. Each action is bound to a specific triggering event on the Auth0 platform. Auth0 invokes the custom code of these Actions when the corresponding triggering event is produced at runtime.",
      resourceUrl: "https://auth0.com/docs/actions",
      icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Explore Auth0 Features</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

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
      title: "Intel® RealSense™ LiDAR Camera L515",
      description:
        "The L515 is a revolutionary solid state LiDAR depth camera which uses a proprietary MEMS mirror scanning technology, enabling better laser power efficiency compared to other time‑of‑flight technologies. With less than 3.5W power consumption for depth streaming, the Intel RealSense LiDAR camera L515 is the world’s most power efficient high‑resolution LiDAR camera.",
      resourceUrl: "https://www.intelrealsense.com/lidar-camera-l515/",
      icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
    },
    {
      title: "DJI Air 2S",
      description:
        "The DJI Air 2S is a small drone with a powerful 1200 mAh battery and a 1" sensor. The DJI Air 2S uses a large 1-inch sensor that's equally good at photography and video: it can shoot 5.4K at 30 frames per second and even 4K at 60 frames per second. With 20 megapixels, the brilliant f/2.8 sensor produces detailed images. ",
      resourceUrl: "https://www.dji.com/global/support/product/air-2s",
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

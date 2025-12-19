import React from "react";
import FlowingMenu from "./FlowingMenu";

const demoItems = [
    { link: "/work", text: "Stories That Convert", image: "https://picsum.photos/600/400?random=2" },
    { link: "/insights", text: "Build Trust Fast", image: "https://picsum.photos/600/400?random=3" },
    { link: "/contact", text: "Let’s Bond", image: "https://picsum.photos/600/400?random=4" },
    { link: "/blog", text: "Ideas & Insights", image: "https://picsum.photos/600/400?random=5" },
];


export default function FlowingMenuComp() {
    return (
        <div style={{ height: "400px", position: "relative" }}>
            <FlowingMenu items={demoItems} />
        </div>
    );
}

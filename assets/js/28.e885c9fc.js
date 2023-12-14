(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{326:function(e,t,a){"use strict";a.r(t);var r=a(10),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"pointcloud-stitching-for-iqr-lab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pointcloud-stitching-for-iqr-lab"}},[e._v("#")]),e._v(" Pointcloud Stitching for IQR Lab")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Scalable, multicamera distributed system for realtime pointcloud stitching in "),t("a",{attrs:{href:"https://iqr-lab.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IQR Lab"),t("OutboundLink")],1),e._v(". This program is currently designed to use the "),t("strong",[e._v("D400 Series Intel RealSense")]),e._v(" depth cameras. Using the "),t("a",{attrs:{href:"https://github.com/IntelRealSense/librealsense",target:"_blank",rel:"noopener noreferrer"}},[e._v("librealsense 2.0 SDK"),t("OutboundLink")],1),e._v(", depth frames are grabbed and pointclouds are computed on the edge, before sending the raw XYZRGB values to a central computer over a TCP sockets. The central program stitches the pointclouds together and displays it a viewer using "),t("a",{attrs:{href:"http://pointclouds.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PCL"),t("OutboundLink")],1),e._v(" libraries.")]),e._v(" "),t("h2",{attrs:{id:"calibration-under-construction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calibration-under-construction"}},[e._v("#")]),e._v(" Calibration [Under Construction]")]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("Different steps of installation are required for installing the realsense camera servers versus the central computing system. The current instructions are for running on Ubuntu 22.04 LTS.")]),e._v(" "),t("h4",{attrs:{id:"camera-servers-on-the-edge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#camera-servers-on-the-edge"}},[e._v("#")]),e._v(" Camera servers on the edge")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Go to the IQR Lab "),t("a",{attrs:{href:"https://github.com/IntelRealSense/librealsense",target:"_blank",rel:"noopener noreferrer"}},[e._v("librealsense guide"),t("OutboundLink")],1),e._v(" and follow the instructions to install the "),t("code",[e._v("librealsense")]),e._v(" 2.0 SDK.")])]),e._v(" "),t("li",[t("p",[e._v("Ensure that your "),t("code",[e._v("cmake")]),e._v(" version is 3.1 or later. If not, download and install a newer version from the "),t("a",{attrs:{href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CMake website"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Clone "),t("a",{attrs:{href:"https://github.com/iqr-lab/pointcloud_stitching",target:"_blank",rel:"noopener noreferrer"}},[e._v("this repository"),t("OutboundLink")],1),e._v(" and "),t("code",[e._v("cd")]),e._v(" into it.")])]),e._v(" "),t("li",[t("p",[e._v("Build and install the camera edge server binaries")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mkdir build && cd build\ncmake ..\nmake && sudo make install\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Install OpenCV [todo: need to test if this is necessary]")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo apt install libopencv-dev\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Install OPENGL [todo: need to test if this is necessary]")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo apt-get install libglfw3-dev libgl1-mesa-dev libglu1-mesa-dev\n")])])])])]),e._v(" "),t("h4",{attrs:{id:"central-computing-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#central-computing-system"}},[e._v("#")]),e._v(" Central computing system")]),e._v(" "),t("ul",[t("li",[e._v("Follow the instructions to download and install the "),t("code",[e._v("pcl")]),e._v(" from their "),t("a",{attrs:{href:"https://pointclouds.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),t("OutboundLink")],1),e._v(".\n"),t("ul",[t("li",[e._v("Ensure that your "),t("code",[e._v("pcl")]),e._v(" version is 1.13 or later. If this version is not available in your package manager, you will need to download the source code and build it yourself.")])])]),e._v(" "),t("li",[e._v("Clone "),t("a",{attrs:{href:"https://github.com/iqr-lab/pointcloud_stitching",target:"_blank",rel:"noopener noreferrer"}},[e._v("this repository"),t("OutboundLink")],1),e._v(" and "),t("code",[e._v("cd")]),e._v(" into it.")]),e._v(" "),t("li",[e._v("Build and compile the central computing system binaries."),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mkdir build && cd build\ncmake .. -DBUILD_CLIENT=true\nmake && sudo make install\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("Each realsense is connected to an edge computer, which are all accessible through ssh from the central computer.")]),e._v(" "),t("p",[e._v("To start running, do the following:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("SSH to each edge computer and run:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pcs-camera-optimized -s\n")])])]),t("p",[e._v("If the servers are setup correctly, each one should say "),t("code",[e._v("Waiting for client...")])])]),e._v(" "),t("li",[t("p",[e._v("Then on the central computer, run:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pcs-multicamera-client -v\n")])])]),t("p",[e._v("This begins the pointcloud stitching ("),t("code",[e._v("-v")]),e._v(" for visualizing the pointcloud).")]),e._v(" "),t("p",[e._v("For more available options, run "),t("code",[e._v("pcs-multicamera-client -h")]),e._v(" for help and an explanation of each option.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{326:function(t,e,a){"use strict";a.r(e);var r=a(10),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"kalibr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kalibr"}},[t._v("#")]),t._v(" Kalibr")]),t._v(" "),e("p",[t._v("This document covers the setup of "),e("a",{attrs:{href:"https://github.com/ethz-asl/kalibr",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kalibr"),e("OutboundLink")],1),t._v(" for calibrating the extrensics for each camera.")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("Please follow the "),e("code",[t._v("Docker")]),t._v(" image instructions "),e("a",{attrs:{href:"https://github.com/ethz-asl/kalibr/wiki/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Note: If using Docker Desktop, you might need to tune your Docker resource allocation for the image to build properly. A tested, working configuration is 10 CPU core limit and 10GB RAM limit. You also need to add "),e("code",[t._v("/tmp/.X11-unix")]),t._v(" as a virtual file share under Settings->Resources->File Sharing.")]),t._v(" "),e("h2",{attrs:{id:"calibration-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#calibration-target"}},[t._v("#")]),t._v(" Calibration Target")]),t._v(" "),e("p",[t._v("We currently use a custom calibration target available "),e("a",{attrs:{href:"https://github.com/iqr-lab/pointcloud_stitching/blob/master/calibration/custom_target.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Alternatively, you can generate the target PDF yourself by running inside the container:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" devel/setup.bash\nrosrun kalibr kalibr_create_target_pdf "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--type")]),t._v(" apriltag "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--nx")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--ny")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--tsize")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.06")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--tspace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n")])])]),e("p",[t._v("When printing, ensure that the printed size is true to the file. Attach the target to a rigid surface for proper calibration.")])])}),[],!1,null,null,null);e.default=s.exports}}]);
import{_ as t,c as i,a as n,o as r}from"./app-BuYQg0bi.js";const a={};function o(s,e){return r(),i("div",null,e[0]||(e[0]=[n(`<h1 id="pointcloud-stitching-for-iqr-lab" tabindex="-1"><a class="header-anchor" href="#pointcloud-stitching-for-iqr-lab"><span>Pointcloud Stitching for IQR Lab</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>Scalable, multicamera distributed system for realtime pointcloud stitching in <a href="https://iqr-lab.github.io/" target="_blank" rel="noopener noreferrer">IQR Lab</a>. This program is currently designed to use the <strong>D400 Series Intel RealSense</strong> depth cameras. Using the <a href="https://github.com/IntelRealSense/librealsense" target="_blank" rel="noopener noreferrer">librealsense 2.0 SDK</a>, depth frames are grabbed and pointclouds are computed on the edge, before sending the raw XYZRGB values to a central computer over a TCP sockets. The central program stitches the pointclouds together and displays it a viewer using <a href="http://pointclouds.org/" target="_blank" rel="noopener noreferrer">PCL</a> libraries.</p><h3 id="host-py-script" tabindex="-1"><a class="header-anchor" href="#host-py-script"><span><code>host.py</code> Script</span></a></h3><p>This Python script is designed to run any arbitrary script on each of the edge servers. We provide some useful scripts in <a href="./edge_scripts"><code>edge_scripts/</code></a>. Run <code>python host.py -h</code> to see usage instructions.</p><p>Note: <code>host.py</code> follows the <code>iqr-vision-i.local</code> hostnaming convention.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><p>Different steps of installation are required for installing the realsense camera servers versus the central computing system. The current instructions are for running on Ubuntu 22.04 LTS.</p><h4 id="central-computer" tabindex="-1"><a class="header-anchor" href="#central-computer"><span>Central Computer</span></a></h4><ol><li>Follow the instructions to download and install the <code>pcl</code> from their <a href="https://pointclouds.org/downloads/" target="_blank" rel="noopener noreferrer">website</a>. <ul><li>Ensure that your <code>pcl</code> version is 1.13 or later. If this version is not available in your package manager, you will need to download the source code and build it yourself.</li></ul></li><li>Clone <a href="https://github.com/iqr-lab/pointcloud_stitching" target="_blank" rel="noopener noreferrer">this repository</a> and <code>cd</code> into it.</li><li>Build and compile the central computing system binaries.</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mkdir -p build &amp;&amp; cd build</span>
<span class="line">cmake .. -DBUILD_CLIENT=true</span>
<span class="line">make</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="camera-edge-server" tabindex="-1"><a class="header-anchor" href="#camera-edge-server"><span>Camera Edge Server</span></a></h4><ol><li>Go to the IQR Lab <a href="https://iqr-lab.github.io/docs/computer-vision/intel-realsense.html" target="_blank" rel="noopener noreferrer">librealsense guide</a> and follow the instructions to install the <code>librealsense</code> 2.0 SDK.</li><li>Ensure that your <code>cmake</code> version is 3.1 or later. If not, download and install a newer version from the <a href="https://cmake.org/download/" target="_blank" rel="noopener noreferrer">CMake website</a></li><li>There are two methods for obtaining the source <ol><li>Release - Clone <a href="https://github.com/iqr-lab/pointcloud_stitching" target="_blank" rel="noopener noreferrer">this repository</a> into <code>~/pointcloud_stitching</code></li><li>FS Mount - This allows all edge servers to share one, live version of the source <ol><li>Create an SSH key on the edge server to the central computer</li><li>Test the key and accept the fingerprint</li><li>Install <code>sshfs</code>: <code>sudo apt install sshfs</code></li><li>Modify <a href="edge_scripts/mount.sh"><code>edge_scripts/mount.sh</code></a> on the central computer with the correct user login, central computer hostname, absolute paths, and identity file</li><li>Add this edge server&#39;s hostname to <a href="/HOSTS" target="_blank" rel="noopener noreferrer"><code>HOSTS</code></a></li><li>Run <code>python host.py edge_scripts/mount.sh</code></li><li>To set this FS mount as permanent, please follow <a href="https://www.digitalocean.com/community/tutorials/how-to-use-sshfs-to-mount-remote-file-systems-over-ssh#step-3-permanently-mounting-the-remote-filesystem" target="_blank" rel="noopener noreferrer">these instructions</a></li></ol></li></ol></li><li>Ensure that <code>~/pointcloud_stitching</code> is the path of the local repo</li><li>Run <code>python host.py edge_scripts/build_edge.sh</code></li></ol><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Each RealSense is connected to an edge computer, which are all accessible through ssh from the central computer.</p><p>To start running, do the following:</p><ol><li><p>SSH to each edge computer and run:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">~/build/src/pcs-camera-optimized -s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If the servers are setup correctly, each one should say <code>Waiting for client...</code></p></li><li><p>Then on the central computer, run:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">build/src/pcs-multicamera-optimized -v</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This begins the pointcloud stitching (<code>-v</code> for visualizing the pointcloud).</p><p>For more available options, run <code>build/src/pcs-multicamera-optimized -h</code> for help and an explanation of each option.</p></li></ol>`,17)]))}const c=t(a,[["render",o],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/pointcloud_stitching/","title":"Pointcloud Stitching for IQR Lab","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[{"level":3,"title":"host.py Script","slug":"host-py-script","link":"#host-py-script","children":[]}]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"pointcloud_stitching/README.md"}');export{c as comp,d as data};

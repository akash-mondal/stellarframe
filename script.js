function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./background/back-00001.png
    ./background/back-00002.png
    ./background/back-00003.png
    ./background/back-00004.png
    ./background/back-00005.png
    ./background/back-00006.png
    ./background/back-00007.png
    ./background/back-00008.png
    ./background/back-00009.png
    ./background/back-00010.png
    ./background/back-00011.png
    ./background/back-00012.png
    ./background/back-00013.png
    ./background/back-00014.png
    ./background/back-00015.png
    ./background/back-00016.png
    ./background/back-00017.png
    ./background/back-00018.png
    ./background/back-00019.png
    ./background/back-00020.png
    ./background/back-00021.png
    ./background/back-00022.png
    ./background/back-00023.png
    ./background/back-00024.png
    ./background/back-00025.png
    ./background/back-00026.png
    ./background/back-00027.png
    ./background/back-00028.png
    ./background/back-00029.png
    ./background/back-00030.png
    ./background/back-00031.png
    ./background/back-00032.png
    ./background/back-00033.png
    ./background/back-00034.png
    ./background/back-00035.png
    ./background/back-00036.png
    ./background/back-00037.png
    ./background/back-00038.png
    ./background/back-00039.png
    ./background/back-00040.png
    ./background/back-00041.png
    ./background/back-00042.png
    ./background/back-00043.png
    ./background/back-00044.png
    ./background/back-00045.png
    ./background/back-00046.png
    ./background/back-00047.png
    ./background/back-00048.png
    ./background/back-00049.png
    ./background/back-00050.png
    ./background/back-00051.png
    ./background/back-00052.png
    ./background/back-00053.png
    ./background/back-00054.png
    ./background/back-00055.png
    ./background/back-00056.png
    ./background/back-00057.png
    ./background/back-00058.png
    ./background/back-00059.png
    ./background/back-00060.png
    ./background/back-00061.png
    ./background/back-00062.png
    ./background/back-00063.png
    ./background/back-00064.png
    ./background/back-00065.png
    ./background/back-00066.png
    ./background/back-00067.png
    ./background/back-00068.png
    ./background/back-00069.png
    ./background/back-00070.png
    ./background/back-00071.png
    ./background/back-00072.png
    ./background/back-00073.png
    ./background/back-00074.png
    ./background/back-00075.png
    ./background/back-00076.png
    ./background/back-00077.png
    ./background/back-00078.png
    ./background/back-00079.png
    ./background/back-00080.png
    ./background/back-00081.png
    ./background/back-00082.png
    ./background/back-00083.png
    ./background/back-00084.png
    ./background/back-00085.png
    ./background/back-00086.png
    ./background/back-00087.png
    ./background/back-00088.png
    ./background/back-00089.png
    ./background/back-00090.png
    ./background/back-00091.png
    ./background/back-00092.png
    ./background/back-00093.png
    ./background/back-00094.png
    ./background/back-00095.png
    ./background/back-00096.png
    ./background/back-00097.png
    ./background/back-00098.png
    ./background/back-00099.png
    ./background/back-00100.png
    ./background/back-00101.png
    ./background/back-00102.png
    ./background/back-00103.png
    ./background/back-00104.png
    ./background/back-00105.png
    ./background/back-00106.png
    ./background/back-00107.png
    ./background/back-00108.png
    ./background/back-00109.png
    ./background/back-00110.png
    ./background/back-00111.png
    ./background/back-00112.png
    ./background/back-00113.png
    ./background/back-00114.png
    ./background/back-00115.png
    ./background/back-00116.png
    ./background/back-00117.png
    ./background/back-00118.png
    ./background/back-00119.png
    ./background/back-00120.png
    ./background/back-00121.png
    ./background/back-00122.png
    ./background/back-00123.png
    ./background/back-00124.png
    ./background/back-00125.png
    ./background/back-00126.png
    ./background/back-00127.png
    ./background/back-00128.png
    ./background/back-00129.png
    ./background/back-00130.png
    ./background/back-00131.png
    ./background/back-00132.png
    ./background/back-00133.png
    ./background/back-00134.png
    ./background/back-00135.png
    ./background/back-00136.png
    ./background/back-00137.png
    ./background/back-00138.png
    ./background/back-00139.png
    ./background/back-00140.png
    ./background/back-00141.png
    ./background/back-00142.png
    ./background/back-00143.png
    ./background/back-00144.png
    ./background/back-00145.png
    ./background/back-00146.png
    ./background/back-00147.png
    ./background/back-00148.png
    ./background/back-00149.png
    ./background/back-00150.png
    ./background/back-00151.png
    ./background/back-00152.png
    ./background/back-00153.png
    ./background/back-00154.png
    ./background/back-00155.png
    ./background/back-00156.png
    ./background/back-00157.png
    ./background/back-00158.png
    ./background/back-00159.png
    ./background/back-00160.png
    ./background/back-00161.png
    ./background/back-00162.png
    ./background/back-00163.png
    ./background/back-00164.png
    ./background/back-00165.png
    ./background/back-00166.png
    ./background/back-00167.png
    ./background/back-00168.png
    ./background/back-00169.png
    ./background/back-00170.png
    ./background/back-00171.png
    ./background/back-00172.png
    ./background/back-00173.png
    ./background/back-00174.png
    ./background/back-00175.png
    ./background/back-00176.png
    ./background/back-00177.png
    ./background/back-00178.png
    ./background/back-00179.png
    ./background/back-00180.png
    ./background/back-00181.png
    ./background/back-00182.png
    ./background/back-00183.png
    ./background/back-00184.png
    ./background/back-00185.png
    ./background/back-00186.png
    ./background/back-00187.png
    ./background/back-00188.png
    ./background/back-00189.png
    ./background/back-00190.png
    ./background/back-00191.png
    ./background/back-00192.png
    ./background/back-00193.png
    ./background/back-00194.png
    ./background/back-00195.png
    ./background/back-00196.png
    ./background/back-00197.png
    ./background/back-00198.png
    ./background/back-00199.png
    ./background/back-00200.png
    ./background/back-00201.png
    ./background/back-00202.png
    ./background/back-00203.png
    ./background/back-00204.png
    ./background/back-00205.png
    ./background/back-00206.png
    ./background/back-00207.png
    ./background/back-00208.png
    ./background/back-00209.png
    ./background/back-00210.png
    ./background/back-00211.png
    ./background/back-00212.png
    ./background/back-00213.png
    ./background/back-00214.png
    ./background/back-00215.png
    ./background/back-00216.png
    ./background/back-00217.png
    ./background/back-00218.png
    ./background/back-00219.png
    ./background/back-00220.png
    ./background/back-00221.png
    ./background/back-00222.png
    ./background/back-00223.png
    ./background/back-00224.png
    ./background/back-00225.png
    ./background/back-00226.png
    ./background/back-00227.png
    ./background/back-00228.png
    ./background/back-00229.png
    ./background/back-00230.png
    ./background/back-00231.png
    ./background/back-00232.png
    ./background/back-00233.png
    ./background/back-00234.png
    ./background/back-00235.png
    ./background/back-00236.png
    ./background/back-00237.png
    ./background/back-00238.png
    ./background/back-00239.png
    ./background/back-00240.png
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 240;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
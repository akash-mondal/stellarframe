function redirectToGitHubRepo() {
  window.location.href = "https://github.com/akash-mondal/StellarFramesDemos";
}

// Add a click event listener to the button
document.getElementById("github-button").addEventListener("click", redirectToGitHubRepo);

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
if (window.mobileCheck()) {
  // Create an alert message for mobile users
  alert("This Experience Is Not Optimized For Mobile View , Switching To Desktop View is Recommened");
}
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth ;
  canvas.height = window.innerHeight;
  render();
});
const isMobile = window.mobileCheck();
const smoothScrollSpeed = isMobile ? 0.3 : 1; 
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
      multiplier : smoothScrollSpeed,
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
  
  
 
  function files(index) {
    var data = `
    ./background/back-00001.jpg
./background/back-00002.jpg
./background/back-00003.jpg
./background/back-00004.jpg
./background/back-00005.jpg
./background/back-00006.jpg
./background/back-00007.jpg
./background/back-00008.jpg
./background/back-00009.jpg
./background/back-00010.jpg
./background/back-00011.jpg
./background/back-00012.jpg
./background/back-00013.jpg
./background/back-00014.jpg
./background/back-00015.jpg
./background/back-00016.jpg
./background/back-00017.jpg
./background/back-00018.jpg
./background/back-00019.jpg
./background/back-00020.jpg
./background/back-00021.jpg
./background/back-00022.jpg
./background/back-00023.jpg
./background/back-00024.jpg
./background/back-00025.jpg
./background/back-00026.jpg
./background/back-00027.jpg
./background/back-00028.jpg
./background/back-00029.jpg
./background/back-00030.jpg
./background/back-00031.jpg
./background/back-00032.jpg
./background/back-00033.jpg
./background/back-00034.jpg
./background/back-00035.jpg
./background/back-00036.jpg
./background/back-00037.jpg
./background/back-00038.jpg
./background/back-00039.jpg
./background/back-00040.jpg
./background/back-00041.jpg
./background/back-00042.jpg
./background/back-00043.jpg
./background/back-00044.jpg
./background/back-00045.jpg
./background/back-00046.jpg
./background/back-00047.jpg
./background/back-00048.jpg
./background/back-00049.jpg
./background/back-00050.jpg
./background/back-00051.jpg
./background/back-00052.jpg
./background/back-00053.jpg
./background/back-00054.jpg
./background/back-00055.jpg
./background/back-00056.jpg
./background/back-00057.jpg
./background/back-00058.jpg
./background/back-00059.jpg
./background/back-00060.jpg
./background/back-00061.jpg
./background/back-00062.jpg
./background/back-00063.jpg
./background/back-00064.jpg
./background/back-00065.jpg
./background/back-00066.jpg
./background/back-00067.jpg
./background/back-00068.jpg
./background/back-00069.jpg
./background/back-00070.jpg
./background/back-00071.jpg
./background/back-00072.jpg
./background/back-00073.jpg
./background/back-00074.jpg
./background/back-00075.jpg
./background/back-00076.jpg
./background/back-00077.jpg
./background/back-00078.jpg
./background/back-00079.jpg
./background/back-00080.jpg
./background/back-00081.jpg
./background/back-00082.jpg
./background/back-00083.jpg
./background/back-00084.jpg
./background/back-00085.jpg
./background/back-00086.jpg
./background/back-00087.jpg
./background/back-00088.jpg
./background/back-00089.jpg
./background/back-00090.jpg
./background/back-00091.jpg
./background/back-00092.jpg
./background/back-00093.jpg
./background/back-00094.jpg
./background/back-00095.jpg
./background/back-00096.jpg
./background/back-00097.jpg
./background/back-00098.jpg
./background/back-00099.jpg
./background/back-00100.jpg
./background/back-00101.jpg
./background/back-00102.jpg
./background/back-00103.jpg
./background/back-00104.jpg
./background/back-00105.jpg
./background/back-00106.jpg
./background/back-00107.jpg
./background/back-00108.jpg
./background/back-00109.jpg
./background/back-00110.jpg
./background/back-00111.jpg
./background/back-00112.jpg
./background/back-00113.jpg
./background/back-00114.jpg
./background/back-00115.jpg
./background/back-00116.jpg
./background/back-00117.jpg
./background/back-00118.jpg
./background/back-00119.jpg
./background/back-00120.jpg
./background/back-00121.jpg
./background/back-00122.jpg
./background/back-00123.jpg
./background/back-00124.jpg
./background/back-00125.jpg
./background/back-00126.jpg
./background/back-00127.jpg
./background/back-00128.jpg
./background/back-00129.jpg
./background/back-00130.jpg
./background/back-00131.jpg
./background/back-00132.jpg
./background/back-00133.jpg
./background/back-00134.jpg
./background/back-00135.jpg
./background/back-00136.jpg
./background/back-00137.jpg
./background/back-00138.jpg
./background/back-00139.jpg
./background/back-00140.jpg
./background/back-00141.jpg
./background/back-00142.jpg
./background/back-00143.jpg
./background/back-00144.jpg
./background/back-00145.jpg
./background/back-00146.jpg
./background/back-00147.jpg
./background/back-00148.jpg
./background/back-00149.jpg
./background/back-00150.jpg
./background/back-00151.jpg
./background/back-00152.jpg
./background/back-00153.jpg
./background/back-00154.jpg
./background/back-00155.jpg
./background/back-00156.jpg
./background/back-00157.jpg
./background/back-00158.jpg
./background/back-00159.jpg
./background/back-00160.jpg
./background/back-00161.jpg
./background/back-00162.jpg
./background/back-00163.jpg
./background/back-00164.jpg
./background/back-00165.jpg
./background/back-00166.jpg
./background/back-00167.jpg
./background/back-00168.jpg
./background/back-00169.jpg
./background/back-00170.jpg
./background/back-00171.jpg
./background/back-00172.jpg
./background/back-00173.jpg
./background/back-00174.jpg
./background/back-00175.jpg
./background/back-00176.jpg
./background/back-00177.jpg
./background/back-00178.jpg
./background/back-00179.jpg
./background/back-00180.jpg
./background/back-00181.jpg
./background/back-00182.jpg
./background/back-00183.jpg
./background/back-00184.jpg
./background/back-00185.jpg
./background/back-00186.jpg
./background/back-00187.jpg
./background/back-00188.jpg
./background/back-00189.jpg
./background/back-00190.jpg
./background/back-00191.jpg
./background/back-00192.jpg
./background/back-00193.jpg
./background/back-00194.jpg
./background/back-00195.jpg
./background/back-00196.jpg
./background/back-00197.jpg
./background/back-00198.jpg
./background/back-00199.jpg
./background/back-00200.jpg
./background/back-00201.jpg
./background/back-00202.jpg
./background/back-00203.jpg
./background/back-00204.jpg
./background/back-00205.jpg
./background/back-00206.jpg
./background/back-00207.jpg
./background/back-00208.jpg
./background/back-00209.jpg
./background/back-00210.jpg
./background/back-00211.jpg
./background/back-00212.jpg
./background/back-00213.jpg
./background/back-00214.jpg
./background/back-00215.jpg
./background/back-00216.jpg
./background/back-00217.jpg
./background/back-00218.jpg
./background/back-00219.jpg
./background/back-00220.jpg
./background/back-00221.jpg
./background/back-00222.jpg
./background/back-00223.jpg
./background/back-00224.jpg
./background/back-00225.jpg
./background/back-00226.jpg
./background/back-00227.jpg
./background/back-00228.jpg
./background/back-00229.jpg
./background/back-00230.jpg
./background/back-00231.jpg
./background/back-00232.jpg
./background/back-00233.jpg
./background/back-00234.jpg
./background/back-00235.jpg
./background/back-00236.jpg
./background/back-00237.jpg
./background/back-00238.jpg
./background/back-00239.jpg
./background/back-00240.jpg
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
  ScrollTrigger.create({
    trigger: "#page1>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  ScrollTrigger.create({
    trigger: "#page2>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  ScrollTrigger.create({
    trigger: "#page3>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  ScrollTrigger.create({
    trigger: "#page4>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  ScrollTrigger.create({
    trigger: "#page5>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  ScrollTrigger.create({
    trigger: "#page6>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
